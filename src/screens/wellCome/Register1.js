import { KeyboardAvoidingView, ScrollView, Platform, StyleSheet, Alert, View, Image } from "react-native";
import { useState } from "react";

import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE CADASTRO
*/
export default function Register1({ navigation }) {
	const [inputNome, setInputNome] = useState("");
	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");

	/**
	 * @author VAMPETA
	 * @brief FUNCAO RESPONSAVEL POR VALIDAR INFORMACOES E PASSAR ELAS PARA A Register2
	*/
	function validation() {
		// if (!inputNome || !inputEmail || !inputPassword) { // ATIVADO POR ENQUANTO PQ E MUITO CHATO TESTA COM ISSO ATIVO
		// 	Alert.alert("Atenção", "Preencha todos os campos!");
		// 	return ;
		// }
		// if (!/\S+@\S+\.\S+/.test(inputEmail)) { // ATIVADO POR ENQUANTO PQ E MUITO CHATO TESTA COM ISSO ATIVO
		// 	Alert.alert("Atenção", "Email inválido!");
		// 	return ;
		// }

		navigation.navigate("register2", {
			inputNome: inputNome,
			inputEmail: inputEmail,
			inputPassword: inputPassword
		});
	}

	return (
		<KeyboardAvoidingView style={styles.backgorund} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} >
			<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 20 }} keyboardShouldPersistTaps="handled">
				<View style={styles.container} >
					<Image style={register1.img} source={require("../../../assets/img/4-removebg-preview.png")} />
					<Input placeholder="Nome" value={inputNome} onChangeText={setInputNome} />
					<Input placeholder="Email" value={inputEmail} onChangeText={setInputEmail} />
					<Input placeholder="Senha" value={inputPassword} onChangeText={setInputPassword} secureTextEntry />
					<View style={register1.containerButton} >
						<Button text="proximo" onPress={validation} />
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const register1 = StyleSheet.create({
	img: {
		width: 200,
		height: 200
	},
	containerButton: {
		alignSelf: "stretch",
		alignItems: "flex-end",
		marginRight: "10%"
	}
});