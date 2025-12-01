import { StyleSheet, ActivityIndicator, View } from "react-native";
import { useEffect, useState } from "react";

import { useLogin } from "../../app/isLogin.js";
import { useBottomSheet } from "../../app/BottomSheetGlobal.js";
import { useModal } from "../../screens/ModalGlobal/ModalGlobal.js";

import { getPresenceList } from "../../functions/home/dayBottomSheet.js";

import HeaderBottomSheet from "./HeaderBottomSheet.js";
import ClassDetails from "./ClassDetails.js";
import PresenceList from "./PresenceList.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE QUE AGRUPA TODOS OS ELEMENTOS DO BottomSheet
 * @param date DATA DO TREINO
*/
export default function DaysBottomSheet({ date }) {
	const { setIsLogin } = useLogin();
	const { closeSheet } = useBottomSheet();
	const { openModal } = useModal();
	const [presenceList, setPresenceList] = useState(false);

	useEffect(() => { getPresenceList(date, setPresenceList, setIsLogin, closeSheet, openModal) }, []);
	if (!presenceList) return (
		<View style={daysBottomSheet.load} >
			<ActivityIndicator size="70" color="white" />
		</View>
	);
	return (
		<View style={daysBottomSheet.container} >
			<HeaderBottomSheet style={daysBottomSheet.header} />
			<ClassDetails style={daysBottomSheet.classDetails} presenceList={presenceList} setPresenceList={setPresenceList} date={date} />
			<PresenceList style={daysBottomSheet.presenceList} teacher={presenceList.teacher} students={presenceList.confirmedStudents} />
		</View>
	);
}

const daysBottomSheet = StyleSheet.create({
	load: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center"
	},
	container: {
		flex: 1,
		alignItems: "center"
	},
	header: {
		alignSelf: "stretch",
	},
	classDetails: {
		alignSelf: "stretch",
	},
	presenceList: {
		width: "80%",
		marginTop: 20
	}
});