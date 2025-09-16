import { StyleSheet, View, ScrollView, Text } from "react-native";
import { useState, useEffect } from "react";

import { useLogin } from "../../app/isLogin.js";
import { useModal } from "../ModalGlobal/ModalGlobal.js";

import { requestGameHistory } from "../../functions/profile/history.js";

import Load from "../../screens/load/Load.js";

import Scoreboard from "../../components/Scoreboard.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief SCREEN COM HISTORICO DE PARTIDAS
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
*/
export default function History({ navigation }) {
	const { setIsLogin } = useLogin();
	const [load, setLoad] = useState(true);
	const { openModal } = useModal();
	const [events, setEvents] = useState({});

	useEffect(() => { requestGameHistory(navigation, setEvents, setLoad, setIsLogin, openModal) }, []);

	if (load) return (<Load />);
	if (!events.length) {
		return (
			<View style={history.containerNoHistory} >
				<Text style={history.textNoHistory} >Sem histórico de partidas</Text>
			</View>
		);
	}

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
		color: theme.primaryTextColor,
		fontSize: 15,
		marginLeft: 10
	},
	scoreboard: {
		marginTop: 15
	},
	containerNoHistory: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	textNoHistory: {
		color: theme.primaryTextColor,
		fontSize: 25
	}
});