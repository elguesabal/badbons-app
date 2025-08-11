import { StyleSheet, View, ScrollView, Text } from "react-native";
import { useState, useEffect } from "react";

import { useLogin } from "../../app/isLogin.js";
import { requestGameHistory } from "../../functions/profile/history.js";

import Load from "../../screens/load/Load.js";
import Error from "../../screens/error/Error.js";

import Scoreboard from "../../components/Scoreboard.js";

/**
 * @author VAMPETA
 * @brief SCREEN COM HISTORICO DE PARTIDAS
*/
export default function History() {
	const { setIsLogin } = useLogin();
	const [load, setLoad] = useState(true);
	const [error, setError] = useState("");
	const [events, setEvents] = useState({});

	useEffect(() => { requestGameHistory(setEvents, setLoad, setError, setIsLogin) }, []);

	if (error) return (<Error error={error} />);
	if (load) return (<Load />);

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