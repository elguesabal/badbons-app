import { StyleSheet, ActivityIndicator, View } from "react-native";
import { useEffect, useState } from "react";

import { useLogin } from "../../app/isLogin.js";
import { useBottomSheet } from "../../app/BottomSheetGlobal.js";
import { getPresenceList } from "../../functions/home/dayBottomSheet.js";

import Error from "../../screens/error/Error.js";

import HeaderBottomSheet from "../profile/HeaderBottomSheet.js";
import ClassDetails from "./ClassDetails.js";
import PresenceList from "./PresenceList.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE QUE AGRUPA TODOS OS ELEMENTOS DO BottomSheet
 * @param day DIA DE TREINO
*/
export default function DaysBottomSheet({ day }) {
	const { setIsLogin } = useLogin();
	const { closeSheet } = useBottomSheet();
	const [error, setError] = useState(false);
	const [presenceList, setPresenceList] = useState(false);

	useEffect(() => { getPresenceList(day, setPresenceList, setError, setIsLogin, closeSheet) }, []);

	if (error) return (<Error {...error} />);
	if (!presenceList) return (
		<View style={daysBottomSheet.load} >
			<ActivityIndicator size="70" color="white" />
		</View>
	);

	return (
		<View style={daysBottomSheet.container} >
			<HeaderBottomSheet style={daysBottomSheet.header} />
			<ClassDetails style={daysBottomSheet.classDetails} presenceList={presenceList} setPresenceList={setPresenceList} />
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