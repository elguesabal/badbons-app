import { StyleSheet, TouchableOpacity, Text } from "react-native";

/**
 * @author VAMPETA
 * @brief CRIA UM BOTAO JA COM UMA ESTILIZACAO PADRAO
 * @param text TEXTO Q APARECERA DENTRO DO BOTAO
 * @param style ESTILIZACAO ESTRA Q PODE SER APLICADA A TouchableOpacity
 * @param onPress ESPERA UMA FUNCAO PARA SER REPASSADA PARA TouchableOpacity
 * @return RETORNA UM TouchableOpacity COM UM BOTAO JA PRONTO
*/
export default function Button({ text, style, onPress }) {
	return (
		<TouchableOpacity style={[styles.button, style]} onPress={onPress}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "blue",
		borderRadius: 20,
		// paddingHorizontal: 50,
		// paddingVertical: 10,
		width: 150,
		height: 40,
		// margin: 10,
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		color: "white",
		fontSize: 15
	}
});