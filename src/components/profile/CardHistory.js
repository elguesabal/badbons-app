import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Scoreboard from "../Scoreboard.js";

import { theme } from "../../styles/theme.js";

const events = [ // AMANHA EU COMECO A CHAMAR ESSAS INFORMACOES PELA API
	{
		event: "Arco de Shibuya",
		games: [
			{
				title: "Final",
				favorite: true,
				player1: { name: "Gojo", points: 21 },
				player2: { name: "Sukuna", points: 23 }
			}
		]
	},
	{
		event: "BadBons Open 1/2024",
		games: [
			{
				title: "Semi-Final",
				favorite: false,
				player1: { name: "Grupo 1", points: "17" },
				player2: { name: "Grupo 2", points: "5" }
			},
			{
				title: "Quarta de Finais",
				favorite: false,
				player1: { name: "Grupo 1", points: "17" },
				player2: { name: "Grupo 2", points: "5" }
			}
		]
	},
	{
		event: "NDB Games 1/2024",
		games: [
			{
				title: "Final",
				favorite: false,
				player1: { name: "Grupo 1", points: "17" },
				player2: { name: "Grupo 2", points: "5" }
			},
			{
				title: "Semi-Final",
				favorite: false,
				player1: { name: "Grupo 1", points: "17" },
				player2: { name: "Grupo 2", points: "5" }
			}
		]
	}
];

/**
 * @author VAMPETA
 * @brief COMPONETE QUE CONTEM O BOTAO QUE LEVA PARA O HISTORICO DE PARTIDAS
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param style ESTILIZACAO EXTRA DO COMPONENTE
*/
export default function CardHistory({ navigation, style }) {
	return (
		<View style={style}>
			<TouchableOpacity style={history.button} onPress={() => navigation.navigate("history", { events: events })}>
				<View style={history.containerTitle} >
					<MaterialIcons name="replay" size={24} color={theme.primaryTextColor} />
					<Text style={history.title} >Histórico de Partidas</Text>
				</View>
					<MaterialIcons name="keyboard-arrow-right" size={24} color={theme.primaryTextColor} />
			</TouchableOpacity>
			<Scoreboard style={history.scoreboard} game={events[0].games[0]} />
		</View>
	);
}

const history = StyleSheet.create({
	container: {

	},
	button: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 10
	},
	containerTitle: {
		flexDirection: "row",
		alignItems: "center"
	},
	title: {
		color: theme.primaryTextColor,
		fontSize: 15,
		marginLeft: 3
	},
	scoreboard: {

	}
});