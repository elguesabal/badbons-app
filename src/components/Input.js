import { StyleSheet, View, Text, TextInput } from "react-native";

/**
 * @author VAMPETA
 * @brief CRIA UM INPUT JA COM UM PLACEHOLDER E ESTILIZACAO PADRAO
 * @param placeholder TEXTO DESCRITIVO DO INPUT
 * @return RETORNA UMA View COM INPUT E TEXTO DESCRITIVO
*/
export default function Input({ placeholder, value, onChangeText, secureTextEntry = false }) {
	return (
		<View style={input.container} >
			<Text style={input.text} >{placeholder}</Text>
			<TextInput style={input.input} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} />
		</View>
	);
}

const input = StyleSheet.create({
	container: {
		alignSelf: "stretch",
		marginVertical: 10
	},
	text: {
		color: "white",
		marginLeft: "15%",
		marginBottom: 5
	},
	input: {
		color: "white",
		height: 30,
		width: "80%",
		marginLeft: "10%",
		borderColor: "white",
		borderWidth: 0.1,
		paddingHorizontal: 10,
		borderRadius: 8,
		backgroundColor: "transparent",
		padding: 0
	}
});