import { StyleSheet, View, Text } from "react-native";

// import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE DE EVENTOS
*/
export default function Events({ style }) {
	const cards = [0, 1, 2];

	return (
		<View style={[events.container, style]} >
			<View style={events.containerTitle}>
				<Text style={events.title} >NDB Games</Text>
				<Text style={{ color: "white" }} >Ver mais</Text>
			</View>
			<View style={events.containerCards} >
				{cards.map((card, i) => <View key={i} style={events.card} ></View>)}
			</View>
		</View>
	);
}

const events = StyleSheet.create({
	container: {
		backgroundColor: "blue",
		height: 200,
		borderRadius: 20
	},
	containerTitle: {
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 10,
		paddingHorizontal: 15
	},
	title: {
		color: "white",
		fontSize: 20,
	},
	containerCards: {
		flex: 1,
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	card: {
		backgroundColor: "grey",
		height: "90%",
		width: "28%",
		borderRadius: 10
	}
});