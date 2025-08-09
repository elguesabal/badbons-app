import { StyleSheet, View, ScrollView, Text } from "react-native";

import Scoreboard from "../../components/Scoreboard.js";

/**
 * @author VAMPETA
 * @brief SCREEN COM HISTORICO DE PARTIDAS
 * @param route OBJETO CONTENDO DADOS DE EVENTOS E PARTIDAS
*/
export default function History({ route }) {
	const { events } = route.params;

	return (
		<ScrollView contentContainerStyle={history.scroll} >
			{events.map((event, i) => (
				<View key={i} style={history.containerEvent} >
					<Text style={history.titleEvent} >{event.event}</Text>
					{event.games.map((game, j) => (<Scoreboard key={j} style={history.scoreboard} game={game} />))}
				</View>
			))}
		</ScrollView>
	);
}

const history = StyleSheet.create({
	scroll: {
		alignItems: "center",
		paddingBottom: 25
	},
	containerEvent: {
		width: "80%",
		marginTop: 30
	},
	titleEvent: {
		color: "white",
		fontSize: 15,
		marginLeft: 10
	},
	scoreboard: {
		marginTop: 15
	}
});