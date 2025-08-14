import { StyleSheet, View, Text } from "react-native";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE DE EVENTOS
 * @param style ESTILIZACAO EXTRA DO COMPONENTE
*/
export default function Events({ style }) {
	const cards = [0, 1, 2];

	return (
		<View style={[events.container, style]} >
			<View style={events.containerTitle}>
				<Text style={events.title} >NDB Games</Text>
				<Text style={{ color: theme.primaryTextColor }} >Ver mais</Text>
			</View>
			<View style={events.containerCards} >
				{cards.map((card, i) => <View key={i} style={events.card} ></View>)}
			</View>
		</View>
	);
}

const events = StyleSheet.create({
	container: {
		backgroundColor: theme.primaryBackgroundColor,
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
		color: theme.primaryTextColor,
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
		backgroundColor: theme.secondaryBackgroundColor,
		height: "90%",
		width: "28%",
		borderRadius: 10
	}
});