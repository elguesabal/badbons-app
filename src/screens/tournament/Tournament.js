import { StyleSheet, Platform, View, Text } from "react-native";
import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device"

import Button from "../../components/Button.js";

import { useBottomSheet } from "../../app/BottomSheetGlobal.js";
import { useModal } from "../ModalGlobal/ModalGlobal.js";

async function sendNotification() {
	const teste = await Notifications.scheduleNotificationAsync({
		content: {
			title: "badbons",
			body: "testando notificacao"
		},
		trigger: { seconds: 3 }
	});
	console.log("notificacao enviada: ", teste);
}

/**
 * @author VAMPETA
 * @brief TELA DE TORNEIO
*/
export default function Tournament() {
	const { openSheet } = useBottomSheet();
	const { openModal } = useModal();

	useEffect(() => {
		async function teste() {
			if (!Device.isDevice) return (console.log("tem q testar no celular"));
			const { status: existingStatus } = await Notifications.getPermissionsAsync();
			let finalStatus = existingStatus;
			if (existingStatus !== "granted") {
				const { status } = await Notifications.requestPermissionsAsync();
				finalStatus = status;
			}
			if (finalStatus !== "granted") return (console.log("permissao negada"));
			if (Platform.OS === "android") {
				await Notifications.setNotificationChannelAsync("default", {
					name: "default",
					importance: Notifications.AndroidImportance.MAX,
					vibrationPattern: [0, 250, 250, 250],
					lightColor: "#FF231F7C",
					sound: "default"
				});
			}
		}
		teste();
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
			<Button text="Notificacao" onPress={sendNotification} />
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