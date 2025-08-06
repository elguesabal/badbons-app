import { StyleSheet, View, Text } from "react-native";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE COM DIAS DE TREINO
*/
export default function Days({ style, times }) {
	const arrayDays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];
	const trainingDays = (times) ? [...new Set(Object.values(times).flat().map(item => item.day))].map(day => day.slice(0, 3)) : [];

	return (
		<View style={[days.container, style]} >
			{arrayDays.map((day, i) => (
				<View key={i} style={[days.day, { backgroundColor: (trainingDays.includes(day)) ? theme.primaryBackgroundColor : theme.secondaryBackgroundColor }]} >
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
		justifyContent: "space-evenly"
	},
	day: {
		width: "10%",
		paddingVertical: 5,
		borderRadius: 5
	},
	text: {
		color: theme.primaryTextColor,
		fontSize: 15,
		textAlign: "center"
	}
});