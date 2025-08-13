import { View, Text } from "react-native";

import Button from "../../components/Button.js";

import { useBottomSheet } from "../../app/BottomSheetGlobal.js";

/**
 * @author VAMPETA
 * @brief TELA DE TORNEIO
*/
export default function Tournament() {
	const { openSheet } = useBottomSheet();

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text style={{ color: "white" }} >Torneio</Text>
			<Button text="Abrir Bottom Sheet" onPress={() => openSheet(
				<View style={{ backgroundColor: "red", flex: 1, height: 100 }} >
					<Text>aksdnasdkj</Text>
				</View>
			)} />
		</View>
	);
}