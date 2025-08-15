import { StyleSheet, View, Text } from "react-native";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE COM INFORMACOES SOBRE O TREINO USADO NO BottomSheet
 * @param style ESTILIZACAO EXTRA DO COMPONENTE
*/
export default function ClassDetails({ style }) {
	return (
		<View style={[classDetails.container, style]} >
			<View style={classDetails.containerInfo} >
				<Text style={classDetails.textInfo} >Endereço</Text>
				<Text style={classDetails.textInfo} >Rua a Número 1</Text>
			</View>
			<View style={classDetails.containerInfo} >
				<Text style={classDetails.textInfo} >Hora de Início</Text>
				<Text style={classDetails.textInfo} >8:10</Text>
			</View>
			<View style={classDetails.containerInfo} >
				<Text style={classDetails.textInfo} >Hora de Término</Text>
				<Text style={classDetails.textInfo} >10:10</Text>
			</View>
			<View style={classDetails.containerInfo} >
				<Text style={classDetails.textInfo} >Marcar Presença</Text>
				<Text style={classDetails.textInfo} >xxx</Text>
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