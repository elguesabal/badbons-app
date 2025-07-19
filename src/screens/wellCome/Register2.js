import { KeyboardAvoidingView, ScrollView, Platform, StyleSheet, Alert, View, Image } from "react-native";
import { useState } from "react";

import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import validation from "../../functions/wellcome/register2.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE CADASTRO
*/
export default function Cadastrar2({ navigation, route }) {
	const { inputNome, inputEmail, inputPassword } = route.params;
	const [inputCpf, setInputCpf] = useState("");
	const [inputDate, setInputDate] = useState("");
	const [inputPhone, setInputPhone] = useState("");

	return (
		<KeyboardAvoidingView style={styles.backgorund} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} >
			<ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
				<View style={styles.containerBetween} >
					<View style={styles.center} >
						<Image style={register2.img} source={require("../../../assets/img/Design_sem_nome__1_-removebg-preview.png")} />
					</View>
					<View style={register2.containerInputs} >
						<Input placeholder="CPF" value={inputCpf} onChangeText={setInputCpf} />
						<Input placeholder="Data de nascimento" value={inputDate} onChangeText={setInputDate} />
						<Input placeholder="Celular" value={inputPhone} onChangeText={setInputPhone} />
					</View>
					<View style={register2.containerButton} >
						<Button text="Próximo" onPress={() => validation(navigation, inputNome, inputEmail, inputPassword, inputCpf, inputDate, inputPhone)} />
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
		marginTop: 100,
		marginBottom: -50
	},
	containerInputs: {
		alignSelf: "stretch",
		alignItems: "center",
		justifyContent: "center"
	},
	containerButton: {
		alignSelf: "stretch",
		alignItems: "flex-end",
		marginRight: "10%"
	}
});