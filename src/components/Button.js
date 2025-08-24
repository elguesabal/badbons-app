import { StyleSheet, TouchableOpacity, Text } from "react-native";

import { useModal } from "../screens/ModalGlobal/ModalGlobal.js";

import { handleButton } from "../functions/button.js";

import { theme } from "../styles/theme.js";

/**
 * @author VAMPETA
 * @brief CRIA UM BOTAO JA COM UMA ESTILIZACAO PADRAO
 * @param text TEXTO Q APARECERA DENTRO DO BOTAO
 * @param style ESTILIZACAO EXTRA Q PODE SER APLICADA A TouchableOpacity
 * @param onPress ESPERA UMA FUNCAO PARA SER REPASSADA PARA TouchableOpacity
*/
export default function Button({ text, style, onPress, activeOpacity = 0.7, load = false }) {
	const { openModal, closeModal } = useModal();

	return (
		<TouchableOpacity style={[button.container, style]} onPress={() => handleButton(openModal, closeModal, onPress, load)} activeOpacity={activeOpacity}>
			<Text style={button.text}>{text}</Text>
		</TouchableOpacity>
	);
}

const button = StyleSheet.create({
	container: {
		backgroundColor: theme.primaryBackgroundColor,
		borderRadius: 20,
		width: 150,
		height: 40,
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		color: theme.primaryTextColor,
		fontSize: 15
	}
});