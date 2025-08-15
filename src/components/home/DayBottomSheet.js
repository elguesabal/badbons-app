import { StyleSheet, View } from "react-native";

import HeaderBottomSheet from "../profile/HeaderBottomSheet.js";
import ClassDetails from "./ClassDetails.js";
import PresenceList from "./PresenceList.js";

const students = ["Natan do Egito", "Alexandre Oliveira", "Alunos", "Alunos", "Alunos", "Alunos", "Alunos", "Alunos", "Alunos", "Alunos"];

/**
 * @author VAMPETA
 * @brief COMPONENTE QUE AGRUPA TODOS OS ELEMENTOS DO BottomSheet
*/
export default function DaysBottomSheet() {
	return (
		<View style={daysBottomSheet.container} >
			<HeaderBottomSheet style={daysBottomSheet.header} />
			<ClassDetails style={daysBottomSheet.classDetails} />
			<PresenceList style={daysBottomSheet.presenceList} students={students} />
		</View>
	);
}

const daysBottomSheet = StyleSheet.create({
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