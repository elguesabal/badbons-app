import { useRef, useMemo, useCallback } from "react";
import { View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";

import Button from "../../components/Button.js";

/**
 * @author VAMPETA
 * @brief TELA DE TORNEIO
*/
export default function Tournament() {
	const bottomSheetRef = useRef(null);

	// Tamanhos possíveis (em % da tela ou px)
	const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text style={{ color: "white" }} >Torneio</Text>
				<Button text="Abrir Bottom Sheet" onPress={() => bottomSheetRef.current?.snapToIndex(0)} />

				<BottomSheet ref={bottomSheetRef} index={-1} snapPoints={snapPoints} enablePanDownToClose={true} backgroundStyle={{ backgroundColor: "white" }} >
					<View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
					<Text style={{ color: "white", fontSize: 18 }}>Conteúdo do Bottom Sheet</Text>
					</View>
				</BottomSheet>
			</View>
		</GestureHandlerRootView>
	);
}