import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useEffect, useState } from "react";

import { useBottomSheet } from "../../app/BottomSheetGlobal.js";

import { nextSevenDays, requestTrainingDays } from "../../functions/home/days.js";

import DaysBottomSheet from "./DayBottomSheet.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE COM DIAS DE TREINO
*/
export default function Days({ style }) {
	const arrayDays = nextSevenDays();
	const [trainingDays, setTrainingDays] = useState([]);
	const { openSheet } = useBottomSheet();

	useEffect(() => { requestTrainingDays(setTrainingDays); }, []);
	return (
		<View style={[days.container, style]} >
			{arrayDays.map((day, i) => (
				<TouchableOpacity key={i} style={[days.day, { backgroundColor: (trainingDays.includes(day.dayWeek)) ? theme.primaryBackgroundColor : theme.secondaryBackgroundColor }]} onPress={() => (trainingDays.includes(day.dayWeek)) ? openSheet(<DaysBottomSheet key={i} date={day.date} />) : null} >
					<Text style={days.textDay} >{day.dayWeek}</Text>
					<Text style={days.textDate} >{day.date.substring(0, 5)}</Text>
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
	textDay: {
		color: theme.primaryTextColor,
		fontSize: 15,
		textAlign: "center"
	},
	textDate: {
		color: theme.primaryTextColor,
		fontSize: 10,
		textAlign: "center",
		marginVertical: 5
	}
});