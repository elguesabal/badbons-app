import { StyleSheet, View, Text } from "react-native";

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
		color: "white",
		fontSize: 20,
		marginLeft: 10,
		marginBottom: "5%"
	},
	containerActivitie: {
		flexDirection: "row",
		marginBottom: "3%"
	},
	img: {
		backgroundColor: "blue",
		width: 30,
		height: 30,
		borderRadius: 3
	},
	textActivitie: {
		color: "white",
		marginLeft: 5
	}
});