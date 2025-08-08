import { StyleSheet, View, ScrollView, Text } from "react-native";

import CardHistory from "./CardHistory.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE RESPONSAVEL PELA SECAO DE "Geral" DA ABA PERFIL
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param date DATA DE NASCIMENTO DO USUARIO
*/
export default function General({ navigation, date }) {
	return (
		<View style={general.container} >
			<ScrollView style={general.scrollCard} horizontal={true} showsHorizontalScrollIndicator={false} >
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
			<View style={general.containerInfo} >
				<Text style={general.titleInfo} >Detalhes Pessoais</Text>
				<View style={general.line} >
					<Text style={general.textInfo} >País de Origem</Text>
					<Text style={general.textCredentials} >Japão</Text>
				</View>
				<View style={general.line} >
					<Text style={general.textInfo} >Data de Nascimento</Text>
					<Text style={general.textCredentials} >{date}</Text>
				</View>
				<View style={general.line} >
					<Text style={general.textInfo} >Idade</Text>
					<Text style={general.textCredentials} >????</Text>
				</View>
				<View style={general.line} >
					<Text style={general.textInfo} >Primeira visita ao App</Text>
					<Text style={general.textCredentials} >--/--/----</Text>
				</View>
				<View style={general.line} >
					<Text style={general.textInfo} >Sexo</Text>
					<Text style={general.textCredentials} >Masculino</Text>
				</View>
			</View>
			<CardHistory navigation={navigation} style={general.cardHistory} />
		</View>
	);
}

const general = StyleSheet.create({
	container: {
		marginTop: 25
	},
	scrollCard: {
		alignSelf: "stretch",
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
	containerInfo: {
		marginHorizontal: "10%",
		marginTop: 25
	},
	titleInfo: {
		color: theme.primaryTextColor,
		fontSize: 15,
		marginBottom: 5
	},
	line: {
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-between",
		borderBottomWidth: 1,
		borderBottomColor: theme.secondaryTextColor,
		paddingVertical: 10
	},
	textInfo: {
		color: theme.secondaryTextColor
	},
	textCredentials: {
		color: theme.primaryTextColor
	},
	cardHistory: {
		marginHorizontal: "10%",
		marginTop: 25
	},
});