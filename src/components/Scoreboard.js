import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "../styles/styles.js";
import { theme } from "../styles/theme.js";

/**
 * @author VAMPETA
 * @brief PLACAR DE JOGOS
 * @param style ESTILIZACAO EXTRA DO COMPONENTE
 * @param game INFORMACOES DA PARTIDA
*/
export default function Scoreboard({ style, game }) {
	if (!game) return (<View style={[scoreboard.container, style]} ></View>);

	return (
		<View style={[scoreboard.container, style]} >
			<View style={scoreboard.containerTitle}>
				<Text style={scoreboard.title} >{game.title}</Text>
				<MaterialIcons name="favorite" color={(game.favorite) ? "red" : theme.primaryBackgroundColor} size={24} />
			</View>
			<View style={scoreboard.containerScore} >
				<View style={styles.center} >
					<View style={scoreboard.containerPhoto} >
						<MaterialIcons name="person" size={30} color="grey" />
					</View>
					<Text style={scoreboard.player} >{game.player1.name}</Text>
				</View>
				<Text style={scoreboard.score} >{game.player1.points}:{game.player2.points}</Text>
				<View style={styles.center} >
					<View style={scoreboard.containerPhoto} >
						<MaterialIcons name="person" size={30} color="grey" />
					</View>
					<Text style={scoreboard.player} >{game.player2.name}</Text>
				</View>
			</View>
		</View>
	);
}

const scoreboard = StyleSheet.create({
	container: {
		backgroundColor: theme.primaryBackgroundColor,
		height: 130,
		borderRadius: 10
	},
	containerTitle: {
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 5,
		paddingHorizontal: 15
	},
	title: {
		color: theme.primaryTextColor,
		fontSize: 15,
	},
	containerScore: {
		flex: 1,
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-evenly",
		alignItems: "center"
	},
	containerPhoto: {
		backgroundColor: theme.tertiaryBackgroundColor,
		alignItems: "center",
		justifyContent: "center",
		width: 40,
		height: 40,
		borderRadius: "100%",
		overflow: "hidden"
	},
	// photo: {		// AINDA NAO ADICIONEI FOTO
	// 	width: "100%",
	// 	height: "100%",
	// 	resizeMode: "cover",
	// },
	player: {
		color: theme.primaryTextColor
	},
	score: {
		color: theme.primaryTextColor,
		fontSize: 20,
		marginBottom: 10
	}
});