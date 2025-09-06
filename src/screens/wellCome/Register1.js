import { KeyboardAvoidingView, ScrollView, Platform, StyleSheet, View, Image } from "react-native";
import { useState } from "react";

import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import { validation } from "../../functions/wellcome/register1.js";

/**
 * @author VAMPETA
 * @brief TELA DE CADASTRO
 * @param navigation FUNCAO QUE CONTROLA A NAVEGACAO ENTRE AS SCREENS
*/
export default function Register1({ navigation }) {
	const [inputName, setInputNome] = useState("");
	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");

	return (
		<KeyboardAvoidingView style={register1.background} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} >
			<ScrollView contentContainerStyle={{ flexGrow: 1}} keyboardShouldPersistTaps="handled">
				<View style={register1.container} >
					<Image style={register1.img} source={require("../../../assets/img/athlete2.png")} />
					<View style={register1.containerInputs} >
						<Input style={register1.input} placeholder="Nome" value={inputName} onChangeText={setInputNome} />
						<Input style={register1.input} placeholder="Email" value={inputEmail} onChangeText={setInputEmail} />
						<Input style={register1.input} placeholder="Senha" value={inputPassword} onChangeText={setInputPassword} secureTextEntry />
					</View>
					<View style={register1.containerButton} >
						<Button text="Próximo" onPress={() => validation(navigation, inputName, inputEmail, inputPassword)} />
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const register1 = StyleSheet.create({
	background: {
		flex: 1
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-between",
		paddingBottom: "20%"
	},
	img: {
		width: 200,
		height: 200,
	},
	containerInputs: {
		flex: 1,
		alignSelf: "stretch",
		justifyContent: "center"
	},
	input: {
		marginVertical: 10
	},
	containerButton: {
		alignSelf: "stretch",
		alignItems: "flex-end",
		marginRight: "10%"
	}
});