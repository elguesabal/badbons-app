import { StyleSheet, View, Text } from "react-native";

import Button from "../../components/Button.js";

import { useBottomSheet } from "../../app/BottomSheetGlobal.js";

/**
 * @author VAMPETA
 * @brief TELA DE TORNEIO
*/
export default function Tournament() {
	const { openSheet } = useBottomSheet();

	return (
		<View style={tournament.container}>
			<Text style={{ color: "white" }} >Torneio</Text>
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