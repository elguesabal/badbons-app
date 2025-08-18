import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import { useBottomSheet } from "../../app/BottomSheetGlobal.js";

import DaysBottomSheet from "./DayBottomSheet.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE COM DIAS DE TREINO
*/
export default function Days({ style, times }) {
	const arrayDays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];
	const trainingDays = (times) ? [...new Set(Object.values(times).flat().map(item => item.day))].map(day => day.slice(0, 3)) : [];
	const { openSheet } = useBottomSheet();

	return (
		<View style={[days.container, style]} >
			{arrayDays.map((day, i) => (
				<TouchableOpacity key={i} style={[days.day, { backgroundColor: (trainingDays.includes(day)) ? theme.primaryBackgroundColor : theme.secondaryBackgroundColor }]} onPress={() => (trainingDays.includes(day)) ? openSheet(<DaysBottomSheet key={i} day={day} />) : null} >
					<Text style={days.text} >{day}</Text>
					<Text style={days.text} >{i + 1}</Text>
				</TouchableOpacity>
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