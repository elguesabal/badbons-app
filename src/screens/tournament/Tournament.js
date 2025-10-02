import { StyleSheet, Platform, View, Text } from "react-native";
import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device"

import Button from "../../components/Button.js";

import { useBottomSheet } from "../../app/BottomSheetGlobal.js";
import { useModal } from "../ModalGlobal/ModalGlobal.js";

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: true,
		shouldSetBadge: true
	})
});

async function scheduleNotification() {
	await Notifications.scheduleNotificationAsync({
		content: {
			title: "BadBons teste",
			body: "testando notificacaoooooo"
		},
		trigger: {
			seconds: 5
		}
	});
}

async function requestPermission() {
	if (Device.isDevice) {
		const { status: existingStatus } = await Notifications.getPermissionsAsync();
		let finalStatus = existingStatus;
		if (existingStatus !== "granted") {
			const { status } = await Notifications.requestPermissionsAsync();
			finalStatus = status;
		}
		if (finalStatus !== "granted") alert("permissao negada");
		if (finalStatus === "granted") alert("permissao concedida");
	}
}

/**
 * @author VAMPETA
 * @brief TELA DE TORNEIO
*/
export default function Tournament() {
	const { openSheet } = useBottomSheet();
	const { openModal } = useModal();

	useEffect(() => {
		requestPermission();
	}, []);

	return (
		<View style={tournament.container}>
			<Button text="Abrir BottomSheet" onPress={() => openSheet(
				<View style={tournament.bottomSheet} >
					<Text>treino</Text>
				</View>
			)} />
			<Button text="Abrir load" onPress={() => openModal({ load: true })} />
			<Button text="Abrir Modal" onPress={() => openModal({ icon: "android", text: "Aviso: Você foi avisado", button: "ok", handleButton: () => alert("avisado") })} />
			<Button text="Abrir Modal Boolean" onPress={() => openModal({ icon: "android", text: "Aviso: Você foi avisado", yes: (closeModal) => { alert("vc clicou sim"); closeModal(); }, no: () => alert("vc clicou nao") })} />
			<Button text="Notificacao" onPress={scheduleNotification} />
		</View>
	);
}

const tournament = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	bottomSheet: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
});