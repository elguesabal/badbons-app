import { StyleSheet, View, Image } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import loginRequest from "../../services/login.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE LOGIN
*/
export default function Login() {
	const navigation = useNavigation();
	const [inputLogin, setInputLogin] = useState("");
	const [inputPassword, setInputPassword] = useState("");

	function hundleLogin() {
		if (!inputLogin || !inputPassword) {
			alert("Preencha todos os campos!");
			return ;
		}
		loginRequest(navigation, { login: inputLogin, password: inputPassword }); 				// PAREI AKI
		// navigation.navigate("Load", { serverRequest: loginRequest, inputs: { login: inputLogin, password: inputPassword } });
		// ATE CONSIGO SAIR DA PAGINA DE LOGIN E IR PRA HOME POREM NAO PASSA PELA TELA DE LOAD (OQ POSSIBILITA O USUARIO FAZER VARIAS REQUISICOES)
		// A PAGINA DE LOAD ESTA FUNCIONANDO COM O PING INICIAL POREM HA ALGUNS COMENTARIOS UTILS NO ARQUIVO
	}

	return (
		<View style={styles.container} >
			<Image source={require("../../../assets/img/4-removebg-preview.png")} style={login.img} />
			<Input placeholder="Login" value={inputLogin} onChangeText={setInputLogin} />
			<Input placeholder="Senha" value={inputPassword} onChangeText={setInputPassword} />
			<View style={login.containerButton} >
				<Button text="proximo" onPress={hundleLogin} />
			</View>
		</View>
	);
}

const login = StyleSheet.create({
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
		height: 30,
		width: "80%",
		marginLeft: "10%",
		borderColor: "white",
		borderWidth: 0.1,
		paddingHorizontal: 10,
		borderRadius: 8,
		backgroundColor: "transparent"
	}
});