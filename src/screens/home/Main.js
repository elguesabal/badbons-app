import { StyleSheet, StatusBar, Platform, ScrollView } from "react-native";
import { useState, useEffect } from "react";

import { getCredentials } from "../../functions/home/home.js";

import Days from "../../components/home/Days.js";
import Scoreboard from "../../components/Scoreboard.js";
import Exercises from "../../components/home/Exercises.js";
import Events from "../../components/home/Events.js";
import Activities from "../../components/home/Activities.js";
import Publicity from "../../components/home/Publicity.js";

const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 20;

const game = {
	title: "Semi-Final",
	favorite: true,
	player1: { name: "Grupo 1", points: "17" },
	player2: { name: "Grupo 2", points: "5" }
};

/**
 * @author VAMPETA
 * @brief TELA HOME
*/
export default function Main() {
	const [credentials, setCredentials] = useState({});

	useEffect(() => { getCredentials(setCredentials) }, []);

	return (
		<ScrollView style={home.container} contentContainerStyle={home.scroll} showsVerticalScrollIndicator={false} >
			<Days style={home.days} times={credentials.times} />
			<Scoreboard style={home.scoreboard} game={game} />
			<Exercises style={home.exercises} />
			<Events style={home.events} />
			<Activities style={home.activities} />
			<Publicity style={home.publicity} />
		</ScrollView>
	);
}

const home = StyleSheet.create({
	container: {
		marginTop: statusBarHeight
	},
	scroll: {
		flexGrow: 1,
		paddingBottom: 25,
		alignItems: "center"
	},
	days: {
		width: "100%",
		marginTop: 25
	},
	scoreboard: {
		width: "70%",
		marginTop: 25
	},
	exercises: {
		width: "80%",
		marginTop: 25
	},
	events: {
		width: "90%",
		marginTop: 25
	},
	activities: {
		width: "90%",
		marginTop: 25
	},
	publicity: {
		width: "90%",
		marginTop: 25,
	}
});