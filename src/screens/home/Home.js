import { StyleSheet, StatusBar, Platform, ScrollView } from "react-native";

import Days from "../../components/home/Days.js";
import Scoreboard from "../../components/home/Scoreboard.js";
// EXERCICIOS???
import Events from "../../components/home/Events.js";
import Activities from "../../components/home/Activities.js";
import Publicity from "../../components/home/Publicity.js";

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 20;

/**
 * @author VAMPETA
 * @brief TELA HOME
*/
export default function Home() {
	return (
		<ScrollView style={home.scroll} showsVerticalScrollIndicator={false} >
			<Days />
			<Scoreboard />
			{/* EXERCICIOS??? */}
			<Events />
			<Activities />
			<Publicity />
		</ScrollView>
	);
}

const home = StyleSheet.create({
	scroll: {
		flex: 1,
		marginTop: statusBarHeight,
		paddingTop: 30,
	}
});