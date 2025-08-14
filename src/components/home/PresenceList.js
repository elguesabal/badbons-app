import { StyleSheet, View, Text } from "react-native";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief LISTA DE PRESENCA DO BottomSheet
 * @param style ESTILIZACAO EXTRA DO COMPONENTE
 * @param students LISTA DE ESTUDANTES QUE MARCARAM PRESENCAO PARA IR AO TREINO
*/
export default function PresenceList({ style, students }) {
	return (
		<BottomSheetScrollView style={[presenceList.container, style]} contentContainerStyle={presenceList.scroll} >
			<Text style={presenceList.title} >Tag de Presença</Text>
			<Text style={presenceList.teacher} >Professor Marcos</Text>
			<View style={presenceList.students} >
				{students.map((student, i) => (<Text key={i} style={presenceList.student} >{i + 1}. {student}</Text>))}
			</View>
		</BottomSheetScrollView>
	);
}

const presenceList = StyleSheet.create({
	container: {
		backgroundColor: theme.secondaryBackgroundColor,
		borderRadius: 15,
		marginTop: 20,
		width: "80%",
		height: 200
	},
	scroll: {

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
		alignSelf: "stretch",
		marginTop: 20,
		paddingHorizontal: 20,
	},
	student: {
		color: theme.primaryTextColor,
		fontSize: 20,
		marginVertical: 5
	}
});