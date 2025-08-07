import { StyleSheet, View } from "react-native";

import Button from "./Button.js";

import { theme } from "../styles/theme.js";

/**
 * @author VAMPETA
 * @brief GRUPO DE BOTAO QUE CONTROLA QUAL COMPONENTE VAI SER RENDEIZADO
 * @param buttonSelected VARIAVEL QUE INFORMA QUAL BOTAO ESTA SELECIONADO
 * @param setButtonSelected HOOK QUE PERMITE MODIFICAR buttonSelected
 * @param buttons ARRAY DE STRINGS (CADA STRING VAI CRIAR UM BOTAO E SER O TEXTO DELE)
*/
export default function SelectionButtun({ style, buttonSelected, setButtonSelected, buttons }) {
	return (
		<View style={[selectionButtun.container, style]} >
			{buttons.map((text, i) => (<Button key={i} text={text} style={{ width: `${(100 + 8 * (buttons.length - 1)) / buttons.length}%`, backgroundColor: (buttonSelected === text) ? theme.primaryBackgroundColor : "transparent", marginLeft: (i === 0) ? 0 : "-4%", marginRight: (i === buttons.length) ? 0 : "-4%", zIndex: (buttonSelected === text) ? 1 : 0 }} activeOpacity={1} onPress={() => setButtonSelected(text)} />))}
		</View>
	);
}

const selectionButtun = StyleSheet.create({
	container: {
		backgroundColor: theme.secondaryBackgroundColor,
		flexDirection: "row",
		borderRadius: 20
	}
});