import { StyleSheet, View, FlatList, TouchableOpacity, Text } from "react-native";

import { theme } from "../../styles/theme.js";

const data = [
	{
		viewed: false,
		title: "NDB NEWS",
		time: "10 min",
		message: "Quartas de Final - Vencedor Igor Coelho"
	},
	{
		viewed: false,
		title: "Torneio Amigo",
		time: "15min",
		message: "Final - Vencedor Natan Roldão"
	},
	{
		viewed: false,
		title: "Loja BadBons",
		time: "20min",
		message: "Camisas Novas já estão liberadas, confira!"
	},
	{
		viewed: true,
		title: "Equipe BadBons",
		time: "20min",
		message: "Aula de Reposição para a Tijuca, Dia 10 das 9:00 às 10:00"
	},
	{
		viewed: false,
		title: "NDB NEWS",
		time: "10 min",
		message: "Quartas de Final - Vencedor Igor Coelho"
	},
	{
		viewed: false,
		title: "Torneio Amigo",
		time: "15min",
		message: "Final - Vencedor Natan Roldão"
	},
	{
		viewed: false,
		title: "Loja BadBons",
		time: "20min",
		message: "Camisas Novas já estão liberadas, confira!"
	},
	{
		viewed: true,
		title: "Equipe BadBons",
		time: "20min",
		message: "Aula de Reposição para a Tijuca, Dia 10 das 9:00 às 10:00"
	},



	{
		viewed: false,
		title: "NDB NEWS",
		time: "10 min",
		message: "Quartas de Final - Vencedor Igor Coelho"
	},
	{
		viewed: false,
		title: "Torneio Amigo",
		time: "15min",
		message: "Final - Vencedor Natan Roldão"
	},
	{
		viewed: false,
		title: "Loja BadBons",
		time: "20min",
		message: "Camisas Novas já estão liberadas, confira!"
	},
	{
		viewed: true,
		title: "Equipe BadBons",
		time: "20min",
		message: "Aula de Reposição para a Tijuca, Dia 10 das 9:00 às 10:00"
	},
	{
		viewed: false,
		title: "NDB NEWS",
		time: "10 min",
		message: "Quartas de Final - Vencedor Igor Coelho"
	},
	{
		viewed: false,
		title: "Torneio Amigo",
		time: "15min",
		message: "Final - Vencedor Natan Roldão"
	},
	{
		viewed: false,
		title: "Loja BadBons",
		time: "20min",
		message: "Camisas Novas já estão liberadas, confira!"
	},
	{
		viewed: true,
		title: "Equipe BadBons",
		time: "20min",
		message: "Aula de Reposição para a Tijuca, Dia 10 das 9:00 às 10:00"
	},
	{
		viewed: false,
		title: "NDB NEWS",
		time: "10 min",
		message: "Quartas de Final - Vencedor Igor Coelho"
	},
	{
		viewed: false,
		title: "Torneio Amigo",
		time: "15min",
		message: "Final - Vencedor Natan Roldão"
	},
	{
		viewed: false,
		title: "Loja BadBons",
		time: "20min",
		message: "Camisas Novas já estão liberadas, confira!"
	},
	{
		viewed: true,
		title: "Equipe BadBons",
		time: "20min",
		message: "Aula de Reposição para a Tijuca, Dia 10 das 9:00 às 10:00"
	},
	{
		viewed: false,
		title: "NDB NEWS",
		time: "10 min",
		message: "Quartas de Final - Vencedor Igor Coelho"
	},
	{
		viewed: false,
		title: "Torneio Amigo",
		time: "15min",
		message: "Final - Vencedor Natan Roldão"
	},
	{
		viewed: false,
		title: "Loja BadBons",
		time: "20min",
		message: "Camisas Novas já estão liberadas, confira!"
	},
	{
		viewed: true,
		title: "Equipe BadBons",
		time: "20min",
		message: "Aula de Reposição para a Tijuca, Dia 10 das 9:00 às 10:00"
	},
	{
		viewed: false,
		title: "NDB NEWS",
		time: "10 min",
		message: "Quartas de Final - Vencedor Igor Coelho"
	},
	{
		viewed: false,
		title: "Torneio Amigo",
		time: "15min",
		message: "Final - Vencedor Natan Roldão"
	},
	{
		viewed: false,
		title: "Loja BadBons",
		time: "20min",
		message: "Camisas Novas já estão liberadas, confira!"
	},
	{
		viewed: true,
		title: "Equipe BadBons",
		time: "20min",
		message: "Aula de Reposição para a Tijuca, Dia 10 das 9:00 às 10:00"
	},
	{
		viewed: false,
		title: "NDB NEWS",
		time: "10 min",
		message: "Quartas de Final - Vencedor Igor Coelho"
	},
	{
		viewed: false,
		title: "Torneio Amigo",
		time: "15min",
		message: "Final - Vencedor Natan Roldão"
	},
	{
		viewed: false,
		title: "Loja BadBons",
		time: "20min",
		message: "Camisas Novas já estão liberadas, confira!"
	},
	{
		viewed: true,
		title: "Equipe BadBons",
		time: "20min",
		message: "Aula de Reposição para a Tijuca, Dia 10 das 9:00 às 10:00"
	}
];

/**
 * @author VAMPETA
 * @brief TELA DE NOTIFICACOES
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
*/
export default function Notifications({ navigation }) {
	return (
		<View style={notifications.container} >
			<FlatList data={data} keyExtractor={(item, i) => i} renderItem={({ item }) => (
				<TouchableOpacity style={[notifications.notification, (item.viewed) ? { backgroundColor: "rgba(0, 0, 0, 0.2)" } : null]} onPress={() => navigation.navigate("notification")} >
					<View style={[notifications.dotNotification, (item.viewed) ? null : { backgroundColor: theme.primaryBackgroundColor }]} />
					<View style={notifications.containerNotification} >
						<View style={notifications.headerNotification} >
							<Text style={notifications.title} >{item.title}</Text>
							<Text style={notifications.time} >{item.time}</Text>
						</View>
						<Text style={notifications.text} >{item.message}</Text>
					</View>
				</TouchableOpacity>
			)} />
		</View>
	);
}

const notifications = StyleSheet.create({
	container: {

	},
	notification: {
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		flexDirection: "row",
		alignItems: "center",
		height: 70,
		padding: 15,
		marginVertical: 5
	},
	dotNotification: {
		height: 15,
		width: 15,
		borderRadius: "100%"
	},
	containerNotification: {
		height: "100%",
		justifyContent: "space-between",
		marginLeft: 20
	},
	headerNotification: {
		flexDirection: "row"
	},
	title: {
		color: theme.primaryTextColor,
		marginRight: 10
	},
	time: {
		color: theme.secondaryTextColor
	},
	text: {
		color: theme.secondaryTextColor
	}
});