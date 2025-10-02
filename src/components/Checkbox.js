import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import { theme } from "../styles/theme.js";

/**
 * @author VAMPETA
 * @brief CRIA UM CHECKBOX JA COM UMA ESTILIZACAO PADRAO
 * @param text TEXTO QUE APARECERA DENTRO DO BOTAO
 * @param style ESTILIZACAO EXTRA QUE PODE SER APLICADA A Checkbox
 * @param setCheckbox FUNCAO QUE MUDA O VALOR DE inputCheckbox 
 * @param inputCheckbox VARIAVEL QUE DIZ SE O Checkbox ESTA SELECIONADO
 * @param circle INDICA SE O COMPONENTE SERA UM CIRCULO DE MARCAR
*/
export default function Checkbox({ text, style, setCheckbox, inputCheckbox, circle = false }) {
	const button = {
		backgroundColor: (inputCheckbox) ? theme.primaryBackgroundColor : "transparent"
	};
	const checkCircle = {
		backgroundColor: theme.tertiaryBackgroundColor,
		borderWidth: 4,
		borderColor: "rgba(0, 0, 0, 0.3)"
	};

	if (circle) {
		return (
			<TouchableOpacity style={checkbox.containerCircle} onPress={() => setCheckbox(!inputCheckbox)} >
				<View style={[checkbox.circle, (inputCheckbox) ? checkCircle : null, style]} >
				</View>
			</TouchableOpacity>
		);
	}
	return (
		<TouchableOpacity style={[checkbox.button, button, style]} onPress={() => setCheckbox(!inputCheckbox)} >
			<Text style={checkbox.text} >{text}</Text>
		</TouchableOpacity>
	);
}

const checkbox = StyleSheet.create({
	button: {
		borderRadius: 20,
		width: 150,
		height: 40,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 0.3,
		borderColor: theme.primaryBackgroundColor
	},
	text: {
		color: theme.primaryTextColor,
		fontSize: 15
	},
	containerCircle: {
		padding: 10
	},
	circle: {
		width: 20,
		height: 20,
		borderRadius: "100%",
		borderWidth: 1,
		borderColor: theme.tertiaryBackgroundColor
	}
});