import { StyleSheet, View, Image, Text } from "react-native";
import { useState, useEffect } from "react";

import { useLogin } from "../../app/isLogin.js";
import { useModal } from "../ModalGlobal/ModalGlobal.js";

import Load from "../load/Load.js";
import Error from "../error/Error.js";
import Button from "../../components/Button.js";

import { apiConnection } from "../../functions/wellcome/main.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief TELA PRINCIPAL COM AS OPCOES DE LOGIN E CADASTRO
 * @param navigation FUNCAO QUE CONTROLA A NAVEGACAO ENTRE AS SCREENS
*/
export default function Main({ navigation }) {
	const [load, setLoad] = useState(true);
	const [error, setError] = useState(false);
	const { setIsLogin } = useLogin();
	const { openModal } = useModal();

	useEffect(() => { apiConnection(setIsLogin, setLoad, setError, openModal) }, []);

	if (load) return (<Load />);
	if (error) return (<Error {...error} />);

	return (
		<View style={main.container} >
			<Image source={require("../../../assets/img/athlete1.png")} style={main.img} />
			<Text style={main.title}>Olá</Text>
			<Text style={main.text}>Bem-Vindo ao Seu App de Treinamento</Text>
			<View>
				<Button text="Login" style={main.button} onPress={() => navigation.navigate("login")} />
				<Button text="Cadastrar" style={main.button} onPress={() => navigation.navigate("register1")} />
			</View>
		</View>
	);
}

const main = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	img: {
		width: 200,
		height: 200
	},
	title: {
		color: theme.primaryTextColor,
		fontSize: 25,
	},
	text: {
		color: theme.secondaryTextColor,
		fontSize: 15
	},
	button: {
		marginVertical: 10
	}
});