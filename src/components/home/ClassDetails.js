import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { useState } from "react";

import { useLogin } from "../../app/isLogin.js";
import { useBottomSheet } from "../../app/BottomSheetGlobal.js";
import { confirmPresence } from "../../functions/home/classDetails.js";

import ToggleSwitch from "../ToggleSwitch.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE COM INFORMACOES SOBRE O TREINO USADO NO BottomSheet
 * @param style ESTILIZACAO EXTRA DO COMPONENTE
 * @param presenceList INFORMACOES SOBRE O TREINO E LISTA DE PRESENCA
 * @param setPresenceList FUNCAO QUE CONTROLA O O ESTADO DE presenceList
*/
export default function ClassDetails({ style, presenceList, setPresenceList }) {
	const { setIsLogin } = useLogin();
	const { closeSheet } = useBottomSheet();

	return (
		<View style={[classDetails.container, style]} >
			<View style={classDetails.containerInfo} >
				<Text style={classDetails.textInfo} >Endereço</Text>
				<Text style={classDetails.textInfo} >{presenceList.address}</Text>
			</View>
			<View style={classDetails.containerInfo} >
				<Text style={classDetails.textInfo} >Hora de Início</Text>
				<Text style={classDetails.textInfo} >{presenceList.start}</Text>
			</View>
			<View style={classDetails.containerInfo} >
				<Text style={classDetails.textInfo} >Hora de Término</Text>
				<Text style={classDetails.textInfo} >{presenceList.end}</Text>
			</View>
			<View style={classDetails.containerInfo} >
				<Text style={classDetails.textInfo} >Marcar Presença</Text>
				<View style={classDetails.containerSwitch} >
					<ToggleSwitch style={classDetails.switch} value={presenceList.confirmedPresence} onValueChange={(newPresence) => confirmPresence(newPresence, setPresenceList, setIsLogin, closeSheet)} />
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
		marginVertical: -10
	}
});