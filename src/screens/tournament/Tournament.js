import { StyleSheet, View, Text } from "react-native";
import { useEffect } from "react";

import Button from "../../components/Button.js";

import { useBottomSheet } from "../../app/BottomSheetGlobal.js";
import { useModal } from "../ModalGlobal/ModalGlobal.js";

import { scheduleNotification, requestPermission } from "../../functions/notifications.js";

/**
 * @author VAMPETA
 * @brief TELA DE TORNEIO
*/
export default function Tournament() {
	const { openSheet } = useBottomSheet();
	const { openModal } = useModal();

	useEffect(() => { requestPermission(); }, []);
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
			<Button text="Notificacao 1" onPress={() => scheduleNotification({ title: "teste 1", body: "teste 1", seconds: 1 })} />
			<Button text="Notificacao 2" onPress={() => scheduleNotification({ title: "teste 2", body: "teste 2", seconds: 5 })} />
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