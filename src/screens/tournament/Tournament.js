import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";

import Button from "../../components/Button.js";
import ToggleSwitch from "../../components/ToggleSwitch.js";

import { useBottomSheet } from "../../app/BottomSheetGlobal.js";
import { useModal } from "../ModalGlobal/ModalGlobal.js";


import Modal from "react-native-modal";
function SideModal() {
	const [isVisible, setIsVisible] = useState(false);
	return (
		<>
			<Button text="modal lateral" onPress={() => setIsVisible(true)} />
			<Modal isVisible={isVisible} onBackdropPress={() => setIsVisible(false)} animationIn="slideInLeft" animationOut="slideOutLeft">
				<View style={{ backgroundColor: "red", height: 200, width: 200 }}>
					<Text style={{ color: "white" }}>Modal da lateral!</Text>
				</View>
			</Modal>
		</>
	);
}

/**
 * @author VAMPETA
 * @brief TELA DE TORNEIO
*/
export default function Tournament() {
	const { openSheet } = useBottomSheet();
	const { openModal } = useModal();
	const [isEnabled, setIsEnabled] = useState(false);

	return (
		<View style={tournament.container}>
			<Text style={{ color: "white" }} >Torneio</Text>
			<ToggleSwitch style={{ marginVertical: 10 }} value={isEnabled} onValueChange={setIsEnabled} />

			<Button text="Abrir BottomSheet" onPress={() => openSheet(
				<View style={tournament.bottomSheet} >
					<Text>treino</Text>
				</View>
			)} />

			<Button text="Abrir spinner" onPress={() => openModal({ spinner: true })} />
			<Button text="Abrir load" onPress={() => openModal({ load: true })} />
			<Button text="Abrir Modal" onPress={() => openModal({ icon: "android", text: "Aviso: Voçê foi avisado", button: "ok" })} />
			<SideModal />
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