import { StyleSheet, View, Text } from "react-native";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE COM INFORMACOES SOBRE O TREINO USADO NO BottomSheet
 * @param style ESTILIZACAO EXTRA DO COMPONENTE
 * @param address ENDERECO DA UNIDADE
 * @param start HORARIO DE COMECO DO TREINO
 * @param end HORARIO DE TERMINO DO TREINO
 * @param confirmedPresence BOOLEANO INFORMANDO SE O PROPRIO ALUNO MARCOU PRESENCA OU NAO
*/
export default function ClassDetails({ style, address, start, end, confirmedPresence }) {
	return (
		<View style={[classDetails.container, style]} >
			<View style={classDetails.containerInfo} >
				<Text style={classDetails.textInfo} >Endereço</Text>
				<Text style={classDetails.textInfo} >{address}</Text>
			</View>
			<View style={classDetails.containerInfo} >
				<Text style={classDetails.textInfo} >Hora de Início</Text>
				<Text style={classDetails.textInfo} >{start}</Text>
			</View>
			<View style={classDetails.containerInfo} >
				<Text style={classDetails.textInfo} >Hora de Término</Text>
				<Text style={classDetails.textInfo} >{end}</Text>
			</View>
			<View style={classDetails.containerInfo} >
				<Text style={classDetails.textInfo} >Marcar Presença</Text>
				<Text style={classDetails.textInfo} >{(confirmedPresence) ? "true" : "false"}</Text>
			</View>
		</View>
	);
}

const classDetails = StyleSheet.create({
	container: {
		padding: 10,
		borderBottomWidth: 10,
		borderBottomColor: theme.secondaryBackgroundColor
	},
	containerInfo: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 10
	},
	textInfo: {
		color: theme.primaryTextColor,
		fontSize: 15
	},
});