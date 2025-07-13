import { StyleSheet, TouchableOpacity, Text } from "react-native";

/**
 * @author VAMPETA
 * @brief CRIA UM BOTAO JA COM UMA ESTILIZACAO PADRAO
 * @param text TEXTO Q APARECERA DENTRO DO BOTAO
 * @param style ESTILIZACAO EXTRA Q PODE SER APLICADA A TouchableOpacity
 * @param onPress ESPERA UMA FUNCAO PARA SER REPASSADA PARA TouchableOpacity
*/
export default function Button({ text, style, onPress }) {
	return (
		<TouchableOpacity style={[button.container, style]} onPress={onPress}>
			<Text style={button.text}>{text}</Text>
		</TouchableOpacity>
	);
}

const button = StyleSheet.create({
	container: {
		backgroundColor: "blue",
		borderRadius: 20,
		width: 150,
		height: 40,
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		color: "white",
		fontSize: 15
	}
});