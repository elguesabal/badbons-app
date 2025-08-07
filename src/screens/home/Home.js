import { StyleSheet, StatusBar, Platform, ScrollView } from "react-native";
import { useState, useEffect } from "react";

import { getCredentials } from "../../functions/home/home.js";

import Days from "../../components/home/Days.js";
import Scoreboard from "../../components/home/Scoreboard.js";
import Exercises from "../../components/home/Exercises.js";
import Events from "../../components/home/Events.js";
import Activities from "../../components/home/Activities.js";
import Publicity from "../../components/home/Publicity.js";

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 20;

/**
 * @author VAMPETA
 * @brief TELA HOME
*/
export default function Home() {
	const [credentials, setCredentials] = useState({});

	useEffect(() => { getCredentials(setCredentials) }, []);

	return (
		<ScrollView style={home.scroll} showsVerticalScrollIndicator={false} >
			<Days style={home.days} times={credentials.times} />
			<Scoreboard style={home.scoreboard} title="NDB Games" />
			<Exercises style={home.exercises} />
			<Events style={home.events} />
			<Activities style={home.activities} />
			<Publicity style={home.publicity} />
		</ScrollView>
	);
}

const home = StyleSheet.create({
	scroll: {
		flex: 1,
		marginTop: statusBarHeight,
	},
	days: {
		marginTop: 25
	},
	scoreboard: {
		marginHorizontal: "15%",
		marginTop: 25
	},
	exercises: {
		marginHorizontal: "10%",
		marginTop: 25
	},
	events: {
		marginHorizontal: "5%",
		marginTop: 25
	},
	activities: {
		marginHorizontal: "5%",
		marginTop: 25
	},
	publicity: {
		marginHorizontal: "5%",
		marginTop: 25,
		marginBottom: 50
	}
});