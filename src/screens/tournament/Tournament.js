import { StyleSheet, View, Text, Switch } from "react-native";
import { useState } from "react";

import Button from "../../components/Button.js";

import { useBottomSheet } from "../../app/BottomSheetGlobal.js";

/**
 * @author VAMPETA
 * @brief TELA DE TORNEIO
*/
export default function Tournament() {
	const { openSheet } = useBottomSheet();
	const [isEnabled, setIsEnabled] = useState(false);

	return (
		<View style={tournament.container}>
			<Text style={{ color: "white" }} >Torneio</Text>
			<Switch value={isEnabled} onValueChange={setIsEnabled} />
			<Button text="Abrir Bottom Sheet" onPress={() => openSheet(
				<View style={tournament.bottomSheet} >
					<Text style={{ color: "white" }} >treino</Text>
				</View>
			)} />
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