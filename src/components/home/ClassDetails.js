import { StyleSheet, View, Text, ActivityIndicator, Switch } from "react-native";
import { useState } from "react";

import { useLogin } from "../../app/isLogin.js";
import { useBottomSheet } from "../../app/BottomSheetGlobal.js";
import { confirmPresence } from "../../functions/home/classDetails.js";

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
	const { setIsLogin } = useLogin();
	const { closeSheet } = useBottomSheet();
	const [presence, setPresence] = useState(confirmedPresence);
	const [spinner, setSpinner] = useState(false);

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
				<View style={classDetails.containerSwitch} >
					{(spinner) ? <ActivityIndicator style={classDetails.spinner} size="30" color="white" /> : null}
					<Switch style={classDetails.switch} trackColor={{ false: "#ccc", true: "green" }} thumbColor={"white"} value={presence} onValueChange={(newPresence) => confirmPresence(newPresence, setPresence, setSpinner, setIsLogin, closeSheet)} />
				</View>
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
		alignItems: "center",
		marginVertical: 10
	},
	textInfo: {
		color: theme.primaryTextColor,
		fontSize: 15
	},
	containerSwitch: {
		flexDirection: "row",
		alignItems: "center"
	},
	spinner: {
		height: 5
	},
	switch: {
		height: 17
	}
});