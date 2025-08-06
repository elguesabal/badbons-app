import { StyleSheet, View, Text } from "react-native";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE DE ATIVIDADES RECENTES
*/
export default function Activities({ style }) {
	const recentActivities = ["Treinamento", "Torneio Amigavel", "Badbons Open", "NDB Games"];

	return (
		<View style={[activities.container, style]} >
			<Text style={activities.title} >Atividades Recentes</Text>
			{recentActivities.map((activitie, i) => (
				<View key={i} style={activities.containerActivitie} >
					<View style={activities.img} ></View>
					<Text style={activities.textActivitie} >{activitie}</Text>
				</View>
			))}
		</View>
	);
}

const activities = StyleSheet.create({
	container: {

	},
	title: {
		color: theme.primaryTextColor,
		fontSize: 20,
		marginLeft: 10,
		marginBottom: "5%"
	},
	containerActivitie: {
		flexDirection: "row",
		marginBottom: "3%"
	},
	img: {
		backgroundColor: theme.primaryBackgroundColor,
		width: 30,
		height: 30,
		borderRadius: 3
	},
	textActivitie: {
		color: theme.primaryTextColor,
		marginLeft: 5
	}
});