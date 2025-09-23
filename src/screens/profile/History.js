import { StyleSheet, View, FlatList, ActivityIndicator, Text } from "react-native";
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
	const [events, setEvents] = useState([]);
	const [page, setPage] = useState(1);
	const [loadingMore, setLoadingMore] = useState(false);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => { requestGameHistory(navigation, setEvents, setLoad, setIsLogin, openModal, loadingMore, setLoadingMore, hasMore, setHasMore, page, setPage) }, []);
	if (load) return (<Load />);
	if (!events.length) {
		return (
			<View style={history.containerNoHistory} >
				<Text style={history.textNoHistory} >Sem histórico de partidas</Text>
			</View>
		);
	}
	return (
		<FlatList contentContainerStyle={history.scroll} data={events} keyExtractor={(_, i) => i.toString()} onEndReachedThreshold={0.2} ListFooterComponent={(loadingMore) ? <ActivityIndicator size="large" color="white" /> : null } onEndReached={() => requestGameHistory(navigation, setEvents, setLoad, setIsLogin, openModal, loadingMore, setLoadingMore, hasMore, setHasMore, page, setPage)}
			renderItem={({ item, index }) => (
				<View key={index} style={history.containerEvent} >
					<Text style={history.titleEvent} >{item.event}</Text>
					{item.games.map((game, j) => (<Scoreboard key={j} style={history.scoreboard} game={game} />))}
				</View>
			)
		} />
	);
}

const history = StyleSheet.create({
	scroll: {
		paddingBottom: 25
	},
	containerEvent: {
		marginTop: 30,
		alignItems: "center",
		marginVertical: 5
	},
	titleEvent: {
		color: theme.primaryTextColor,
		alignSelf: "stretch",
		fontSize: 15,
		marginLeft: "12%"
	},
	scoreboard: {
		width: "80%",
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