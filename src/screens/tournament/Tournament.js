import { StyleSheet, View, Text } from "react-native";
import * as Notifications from "expo-notifications";
import { useState, useEffect } from "react";

import Button from "../../components/Button.js";

import { useBottomSheet } from "../../app/BottomSheetGlobal.js";
import { useModal } from "../ModalGlobal/ModalGlobal.js";

import { scheduleNotification, getTokenNotifications } from "../../functions/notifications.js";

/**
 * @author VAMPETA
 * @brief TELA DE TORNEIO
*/
export default function Tournament() {
	const { openSheet } = useBottomSheet();
	const { openModal } = useModal();
	const [token, setToken] = useState("");

	useEffect(() => {
		async function getToken() {
			setToken(await getTokenNotifications());
		}
		getToken();
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
			<Button text="Notificacao 1" onPress={() => scheduleNotification({ body: "teste 1", type: "TIME_INTERVAL", seconds: 1, repeats: true })} />
			<Button text="notificacoes agendadas" onPress={async () => console.log(await Notifications.getAllScheduledNotificationsAsync())} />
			<Text selectable={true} style={{ color: "white", marginTop: 20 }} >{token}</Text>
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