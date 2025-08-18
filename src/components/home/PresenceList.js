import { StyleSheet, View, Text } from "react-native";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief LISTA DE PRESENCA DO BottomSheet
 * @param style ESTILIZACAO EXTRA DO COMPONENTE
 * @param teacher NOME DO PROFESSOR
 * @param students LISTA DE ESTUDANTES QUE MARCARAM PRESENCAO PARA IR AO TREINO
*/
export default function PresenceList({ style, teacher, students }) {
	return (
		<View style={[presenceList.container, style]} >
			<Text style={presenceList.title} >Tag de Presença</Text>
			<Text style={presenceList.teacher} >Professor {teacher}</Text>
			<BottomSheetScrollView style={presenceList.students} contentContainerStyle={presenceList.scroll} >
				{students.map((student, i) => (<Text key={i} style={presenceList.student} >{i + 1}. {student}</Text>))}
			</BottomSheetScrollView>
		</View>
	);
}

const presenceList = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.secondaryBackgroundColor,
		borderRadius: 15
	},
	title: {
		alignSelf: "center",
		color: theme.primaryTextColor,
		fontSize: 25,
		marginTop: 10
	},
	teacher: {
		alignSelf: "center",
		color: theme.primaryTextColor,
		fontSize: 15
	},
	students: {
		marginTop: 20,
	},
	scroll: {
		paddingLeft: 20
	},
	student: {
		color: theme.primaryTextColor,
		fontSize: 20,
		marginVertical: 5
	}
});