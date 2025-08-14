import { StyleSheet, View } from "react-native";

import HeaderBottomSheet from "../profile/HeaderBottomSheet.js";
import ClassDetails from "./ClassDetails.js";
import PresenceList from "./PresenceList.js";

const students = ["Natan do Egito", "Alexandre Oliveira", "Alunos", "Alunos", "Alunos", "Alunos", "Alunos", "Alunos", "Alunos", "Alunos"];

/**
 * @author VAMPETA
 * @brief 
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
		alignItems: "center",
	},
	header: {

	},
	classDetails: {

	},
	presenceList: {
		// width: "80%",
		// marginVertical: 20
	}
});