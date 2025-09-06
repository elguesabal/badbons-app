import { StyleSheet, View, Text, TextInput } from "react-native";

import { theme } from "../styles/theme.js";

/**
 * @author VAMPETA
 * @brief CRIA UM INPUT JA COM UM PLACEHOLDER E ESTILIZACAO PADRAO
 * @param style ESTILIZACAO EXTRA Q PODE SER APLICADA A View
 * @param placeholder TEXTO DESCRITIVO DO INPUT
 * @param value VALOR ATUAL QUE FICARA ARMAZENADA DENTRO DE TextInput
 * @param onChangeText FUNCAO QUE SALVA O TEXTO DIGITADO EM UM HOOK EXTERNO
 * @param secureTextEntry BOOLEANO QUE DEFINE SE O CONTEUDO DO INPUT SERA OCULTO OU NAO
*/
export default function Input({ style, placeholder, value, onChangeText, secureTextEntry = false }) {
	return (
		<View style={[input.container, style]} >
			<Text style={input.text} >{placeholder}</Text>
			<TextInput style={input.input} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} />
		</View>
	);
}

const input = StyleSheet.create({
	container: {
		alignSelf: "stretch"
	},
	text: {
		color: theme.primaryTextColor,
		marginLeft: "15%",
		marginBottom: 5
	},
	input: {
		color: theme.primaryTextColor,
		height: 30,
		width: "80%",
		marginLeft: "10%",
		borderColor: theme.primaryTextColor,
		borderWidth: 0.1,
		paddingHorizontal: 10,
		borderRadius: 8,
		backgroundColor: "transparent",
		padding: 0
	}
});