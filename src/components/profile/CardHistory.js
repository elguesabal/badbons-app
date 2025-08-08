import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Scoreboard from "../home/Scoreboard.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief COMPONETE QUE CONTEM O BOTAO QUE LEVA PARA O HISTORICO DE PARTIDAS
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param style ESTILIZACAO EXTRA DO COMPONENTE
*/
export default function CardHistory({ navigation, style }) {
	return (
		<View style={style}>
			<TouchableOpacity style={history.button} onPress={() => navigation.navigate("history")}>
				<View style={history.containerTitle} >
					<MaterialIcons name="replay" size={24} color={theme.primaryTextColor} />
					<Text style={history.title} >Histórico de Partidas</Text>
				</View>
					<MaterialIcons name="keyboard-arrow-right" size={24} color={theme.primaryTextColor} />
			</TouchableOpacity>
			<Scoreboard style={history.scoreboard} title="Final" />
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