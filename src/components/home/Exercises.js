import { StyleSheet, View, Text, Image } from "react-native";

export default function Exercises({ style }) {
	const nExercises = 10;
	const completed = 0;

	return (
		<View style={[exercises.container, style]} >
			<View style={exercises.containerText} >
				<Text style={exercises.text} >0 Exercícios</Text>
				<Text style={exercises.text} >{nExercises} Exercícios</Text>
			</View>
			<View style={exercises.containerProgress} >
				<View style={exercises.containerLine} >
					<View style={[exercises.lineCompleted, { width: `${(completed / nExercises) * 100}%` }]} ></View>
					<Image style={exercises.shuttlecock} source={require("../../../assets/img/shuttlecock.png")} />
					<View style={exercises.lineIncomplete} ></View>
				</View>
				<View style={exercises.containerPopup} >
					<Text style={[exercises.textPopup, { marginLeft: `${(completed / nExercises) * 100}%` }]} >{completed} Exercícios</Text>
				</View>
			</View>
		</View>
	);
}

const exercises = StyleSheet.create({
	container: {
		// backgroundColor: "green",
	},
	containerText: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	text: {
		color: "white",
		fontSize: 15,
		marginHorizontal: 10
	},
	containerProgress: {
		alignItems: "center",
		marginVertical: 5
	},
	containerLine: {
		// backgroundColor: "red",
		flexDirection: "row",
		width: "85%",
		height: 5,
		marginTop: 20
	},
	lineCompleted: {
		backgroundColor: "blue",
		// width: "50%",
		height: "100%"
	},
	shuttlecock: {
		width: 30,
		height: 25,
		marginLeft: -30,
		marginTop: -20
	},
	lineIncomplete: {
		backgroundColor: "white",
		// height: 5,
		// width: "100%"
		flex: 1
	},
	containerPopup: {
		// backgroundColor: "red",
		width: "80%"
	},
	textPopup: {
		color: "white",
		fontSize: 15,
		borderWidth: 3,
		borderColor: "white",
		padding: 5,
		marginTop: 5
	}
});