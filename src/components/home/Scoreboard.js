import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "../../styles/styles";

/**
 * @author VAMPETA
 * @brief PLACAR DE JOGOS
*/
export default function Scoreboard() {
	return (
		<View style={scoreboard.container} >
			<View style={scoreboard.containerTitle}>
				<Text style={scoreboard.title} >NDB Games</Text>
				<MaterialIcons name="favorite" color="red" size={24} />
			</View>
			<View style={scoreboard.containerScore} >
				<View style={styles.center} >
					<View style={scoreboard.photo} ></View>
					<Text style={scoreboard.player} >Grupo 1</Text>
				</View>
				<Text style={scoreboard.score} >17:5</Text>
				<View style={styles.center} >
					<View style={scoreboard.photo} ></View>
					<Text style={scoreboard.player} >Grupo 2</Text>
				</View>
			</View>
		</View>
	);
}

const scoreboard = StyleSheet.create({
	container: {
		backgroundColor: "blue",
		alignSelf: "stretch",
		height: "20%",
		marginHorizontal: "15%",
		marginTop: "10%",
		borderRadius: 10
	},
	containerTitle: {
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-between",
		paddingVertical: 5,
		paddingHorizontal: 10
	},
	title: {
		color: "white",
		fontSize: 20,
	},
	containerScore: {
		flex: 1,
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-evenly",
		alignItems: "center"
	},
	photo: {
		backgroundColor: "white",
		width: 40,
		height: 40,
		borderRadius: 100
	},
	player: {
		color: "white"
	},
	score: {
		color: "white",
		fontSize: 20,
		marginBottom: 10
	}
});