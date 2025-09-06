import { KeyboardAvoidingView, ScrollView, Platform, StyleSheet, View, Image } from "react-native";
import { useState } from "react";

import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import { validation } from "../../functions/wellcome/register2.js";

/**
 * @author VAMPETA
 * @brief TELA DE CADASTRO
 * @param navigation FUNCAO QUE CONTROLA A NAVEGACAO ENTRE AS SCREENS
 * @param route OBJETO COM PARAMETROS DA SCREEN ANTERIOR
*/
export default function Cadastrar2({ navigation, route }) {
	const { inputName, inputEmail, inputPassword } = route.params;
	const [inputCpf, setInputCpf] = useState("");
	const [inputDate, setInputDate] = useState("");
	const [inputPhone, setInputPhone] = useState("");

	return (
		<KeyboardAvoidingView style={register2.background} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} >
			<ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
				<View style={register2.container} >
					<Image style={register2.img} source={require("../../../assets/img/athlete1.png")} />
					<View style={register2.containerInputs} >
						<Input style={register2.input} placeholder="CPF" value={inputCpf} onChangeText={setInputCpf} />
						<Input style={register2.input} placeholder="Data de nascimento" value={inputDate} onChangeText={setInputDate} />
						<Input style={register2.input} placeholder="Celular" value={inputPhone} onChangeText={setInputPhone} />
					</View>
					<View style={register2.containerButton} >
						<Button text="Próximo" onPress={() => validation(navigation, inputName, inputEmail, inputPassword, inputCpf, inputDate, inputPhone)} />
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const register2 = StyleSheet.create({
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