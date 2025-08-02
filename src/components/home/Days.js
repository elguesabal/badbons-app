import { StyleSheet, View, Text } from "react-native";

/**
 * @author VAMPETA
 * @brief COMPONENTE COM DIAS DE TREINO
*/
export default function Days() {
	const arrayDays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];

	return (
		<View style={days.container} >
			{arrayDays.map((day, i) => (
				<View key={i} style={[days.day, { backgroundColor: (i == 1 || i == 4) ? "blue" : "grey" }]} >
					<Text style={days.text} >{day}</Text>
					<Text style={days.text} >{i + 1}</Text>
				</View>
			))}
		</View>
	);
}

const days = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-evenly"
	},
	day: {
		backgroundColor: "grey",
		width: "10%",
		paddingVertical: 5,
		borderRadius: 5
	},
	text: {
		color: "white",
		fontSize: 15,
		textAlign: "center"
	}
});