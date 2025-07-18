import { StyleSheet, TouchableOpacity, Text } from "react-native";

/**
 * @author VAMPETA
 * @brief CRIA UM CHECKBOX JA COM UMA ESTILIZACAO PADRAO
 * @param text TEXTO Q APARECERA DENTRO DO BOTAO
 * @param style ESTILIZACAO EXTRA Q PODE SER APLICADA A Checkbox
 * @param setCheckbox FUNCAO Q MUDA O VALOR DE inputCheckbox 
 * @param inputCheckbox VARIAVEL Q DIZ SE O Checkbox ESTA SELECIONADO
*/
export default function Checkbox({ text, style, setCheckbox, inputCheckbox }) {
	return (
		<TouchableOpacity style={[ checkbox.button, style, { backgroundColor: (inputCheckbox) ? "blue" : "transparent", borderWidth: 0.3, borderColor: "blue" } ]} onPress={() => setCheckbox(!inputCheckbox)} >
			<Text style={checkbox.text} >{text}</Text>
		</TouchableOpacity>
	);
}

const checkbox = StyleSheet.create({
	button: {
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