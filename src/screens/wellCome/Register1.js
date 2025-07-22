import { KeyboardAvoidingView, ScrollView, Platform, StyleSheet, View, Image } from "react-native";
import { useState } from "react";

import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import { validation } from "../../functions/wellcome/register1.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE CADASTRO
*/
export default function Register1({ navigation }) {
	const [inputNome, setInputNome] = useState("");
	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");

	return (
		<KeyboardAvoidingView style={styles.backgorund} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} >
			<ScrollView contentContainerStyle={{ flexGrow: 1}} keyboardShouldPersistTaps="handled">
				<View style={styles.containerBetween} >
					<View style={styles.center} >
						<Image style={register1.img} source={require("../../../assets/img/4-removebg-preview.png")} />
					</View>
					<View style={register1.containerInputs} >
						<Input placeholder="Nome" value={inputNome} onChangeText={setInputNome} />
						<Input placeholder="Email" value={inputEmail} onChangeText={setInputEmail} />
						<Input placeholder="Senha" value={inputPassword} onChangeText={setInputPassword} secureTextEntry />
					</View>
					<View style={register1.containerButton} >
						<Button text="Próximo" onPress={() => validation(navigation, inputNome, inputEmail, inputPassword)} />
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const register1 = StyleSheet.create({
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