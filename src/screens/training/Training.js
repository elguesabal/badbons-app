import { StyleSheet, View, Text } from "react-native";
import { useState, useEffect } from "react";

import SelectionButtun from "../../components/SelectionButton";

/**
 * @author VAMPETA
 * @brief TELA DE TREINO
*/
export default function Training() {
	const [buttonSelected, setButtonSelected] = useState("teste1");

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<SelectionButtun style={training.button} buttonSelected={buttonSelected} setButtonSelected={setButtonSelected} buttons={["teste1", "teste2", "teste3"]} />
			{buttonSelected === "teste1" && <Text style={{ color: "white" }} >Treino1</Text>}
			{buttonSelected === "teste2" && <Text style={{ color: "white" }} >Treino2</Text>}
			{buttonSelected === "teste3" && <Text style={{ color: "white" }} >Treino3</Text>}
		</View>
	);
}

const training = StyleSheet.create({
	button: {
		width: "90%",
		marginBottom: 20
	}
});