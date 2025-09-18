import { StyleSheet, View, Text, Image } from "react-native";
import { useState, useEffect } from "react";

import { requestExercises } from "../../functions/home/exercises.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE DE EXERCICIOS COMPLETOS
 * @param style ESTILIZACAO EXTRA DO COMPONENTE
*/
export default function Exercises({ style }) {
	const [data, setData] = useState({ nExercises: 0, completed: 0 });

	useEffect(() => { requestExercises(setData) }, []);
	return (
		<View style={[exercises.container, style]} >
			<View style={exercises.containerText} >
				<Text style={exercises.text} >0 Exercícios</Text>
				<Text style={exercises.text} >{data.nExercises} Exercícios</Text>
			</View>
			<View style={exercises.containerProgress} >
				<View style={exercises.containerLine} >
					<View style={exercises.circleStart}></View>
					<View style={[exercises.lineCompleted, { width: `${(data.completed / data.nExercises) * 100}%` }]} ></View>
					<Image style={exercises.shuttlecock} source={require("../../../assets/img/shuttlecock.png")} />
					<View style={exercises.lineIncomplete} ></View>
					<View style={exercises.circleEnd}></View>
				</View>
				<View style={exercises.containerPopup} >
					<Text style={[exercises.textPopup, { marginLeft: `${(data.completed / data.nExercises) * 100 - 15}%` }]} >{data.completed} Exercícios</Text>
				</View>
			</View>
		</View>
	);
}

const exercises = StyleSheet.create({
	container: {

	},
	containerText: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	text: {
		color: theme.primaryTextColor,
		fontSize: 15,
		marginHorizontal: 10
	},
	containerProgress: {
		alignItems: "center",
		marginVertical: 5
	},
	containerLine: {
		flexDirection: "row",
		width: "85%",
		height: 5,
		marginTop: 20
	},
	circleStart: {
		backgroundColor: theme.tertiaryBackgroundColor,
		width: 10,
		height: 10,
		marginTop: -2.5,
		marginLeft: -10,
		borderRadius: "100%"
	},
	lineCompleted: {
		backgroundColor: theme.primaryBackgroundColor,
		height: "100%"
	},
	shuttlecock: {
		width: 30,
		height: 25,
		marginLeft: -30,
		marginTop: -19
	},
	lineIncomplete: {
		backgroundColor: theme.tertiaryBackgroundColor,
		flex: 1
	},
	circleEnd: {
		backgroundColor: theme.tertiaryBackgroundColor,
		width: 10,
		height: 10,
		marginTop: -2.5,
		marginRight: -10,
		borderRadius: "100%"
	},
	containerPopup: {
		width: "85%"
	},
	textPopup: {
		color: theme.primaryTextColor,
		fontSize: 12,
		borderWidth: 2,
		borderColor: theme.tertiaryBackgroundColor,
		width: "30%",
		textAlign: "center",
		paddingVertical: 5,
		marginTop: 5,
	}
});