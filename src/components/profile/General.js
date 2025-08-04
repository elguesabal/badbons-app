import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Scoreboard from "../home/Scoreboard.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE RESPONSAVEL PELA SECAO DE "Geral" DA ABA PERFIL
*/
export default function General({ date }) {
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
			<View style={general.containerHistory}>
				<TouchableOpacity style={general.buttonHistory} onPress={() => alert("teste")}>
					<View style={general.containerTitleHistory} >
						<MaterialIcons name="replay" size={24} color="white" />
						<Text style={general.titleHistory} >Histórico de Partidas</Text>
					</View>
						<MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
				</TouchableOpacity>
				<Scoreboard />
			</View>
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
		backgroundColor: "dimgrey",
		width: 120,
		height: 80,
		borderRadius: "10%",
		marginHorizontal: 10,
		justifyContent: "center",
		paddingHorizontal: 10
	},
	titleCard: {
		color: "white"
	},
	textCard: {
		color: "grey"
	},
	containerInfo: {
		marginHorizontal: "10%",
		marginTop: 25
	},
	titleInfo: {
		color: "white",
		fontSize: 15,
		marginBottom: 5
	},
	line: {
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-between",
		borderBottomWidth: 1,
		borderBottomColor: "grey",
		paddingVertical: 10
	},
	textInfo: {
		color: "grey"
	},
	textCredentials: {
		color: "white"
	},
	containerHistory: {
		marginHorizontal: "10%",
		marginTop: 25
	},
	buttonHistory: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	containerTitleHistory: {
		flexDirection: "row",
		alignItems: "center"
	},
	titleHistory: {
		color: "white",
		fontSize: 15,
		marginLeft: 3
	}
});