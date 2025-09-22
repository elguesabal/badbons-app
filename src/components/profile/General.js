import { StyleSheet, View, ScrollView, Text } from "react-native";

import Credentials from "./Credentials.js";
import CardHistory from "./CardHistory.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE RESPONSAVEL PELA SECAO DE "Geral" DA ABA PERFIL
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param style ESTILIZACAO EXTRA DO COMPONENTE
*/
export default function General({ navigation, style }) {
	return (
		<View style={[general.container, style]} >
			<ScrollView contentContainerStyle={general.scrollCard} horizontal={true} showsHorizontalScrollIndicator={false} >
				<View style={general.card} >
					<Text style={general.titleCard} >Principal</Text>
					<Text style={general.textCard} >Categoria</Text>
				</View>
				<View style={general.card} >
					<Text style={general.titleCard} >Destro</Text>
					<Text style={general.textCard} >Mão Dominante</Text>
				</View>
				<View style={general.card} >
					<Text style={general.titleCard} >10°</Text>
					<Text style={general.textCard} >Rank</Text>
				</View>
			</ScrollView>
			<Credentials style={general.credentials} />
			<CardHistory navigation={navigation} style={general.cardHistory} />
		</View>
	);
}

const general = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center"
	},
	scrollCard: {

	},
	card: {
		backgroundColor: theme.secondaryBackgroundColor,
		width: 120,
		height: 80,
		borderRadius: "10%",
		marginHorizontal: 10,
		justifyContent: "center",
		paddingHorizontal: 10
	},
	titleCard: {
		color: theme.primaryTextColor
	},
	textCard: {
		color: theme.primaryTextColor
	},
	credentials: {
		width: "80%",
		marginTop: 25
	},
	cardHistory: {
		width: "80%",
		marginTop: 25
	},
});