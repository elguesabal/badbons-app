import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";

import Button from "../../components/Button.js";
import ToggleSwitch from "../../components/ToggleSwitch.js";

import { useBottomSheet } from "../../app/BottomSheetGlobal.js";
import { useModal } from "../../app/ModalGlobal.js";

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
					<Text style={{ color: "white" }} >treino</Text>
				</View>
			)} />

			<Button text="Abrir Modal" onPress={openModal} />
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