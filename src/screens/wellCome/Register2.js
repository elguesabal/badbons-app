import { KeyboardAvoidingView, ScrollView, Platform, StyleSheet, Alert, View, Image } from "react-native";
import { useState } from "react";

import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import { validation } from "../../functions/wellcome/register2.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE CADASTRO
*/
export default function Cadastrar2({ navigation, route }) {
	const { inputName, inputEmail, inputPassword } = route.params;
	const [inputCpf, setInputCpf] = useState("");
	const [inputDate, setInputDate] = useState("");
	const [inputPhone, setInputPhone] = useState("");

	return (
		<KeyboardAvoidingView style={styles.backgorund} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} >
			<ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
				<View style={styles.containerBetween} >
					<Image style={register2.img} source={require("../../../assets/img/athlete1.png")} />
					<View style={register2.containerInputs} >
						<Input placeholder="CPF" value={inputCpf} onChangeText={setInputCpf} />
						<Input placeholder="Data de nascimento" value={inputDate} onChangeText={setInputDate} />
						<Input placeholder="Celular" value={inputPhone} onChangeText={setInputPhone} />
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
	img: {
		width: 200,
		height: 200,
	},
	containerInputs: {
		flex: 1,
		alignSelf: "stretch",
		justifyContent: "center"
	},
	containerButton: {
		alignSelf: "stretch",
		alignItems: "flex-end",
		marginRight: "10%"
	}
});