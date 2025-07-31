import { StyleSheet, View, Text } from "react-native";

import Days from "../../components/home/Days.js";
import Scoreboard from "../../components/home/Scoreboard.js";
// EXERCICIOS???
import Events from "../../components/home/Events.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA HOME
*/
export default function Home() {
	return (
		<View style={styles.containerStart}>
			<Days />
			<Scoreboard />
			{/* EXERCICIOS??? */}
			<Events />
		</View>
	);
}

const home = StyleSheet.create({

});