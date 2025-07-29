import { StyleSheet, View, Image, Text } from "react-native";
import { useState, useEffect } from "react";

import Load from "../load/Load.js";
import Error from "../error/Error.js";
import Button from "../../components/Button.js";

import { useLogin } from "../../app/isLogin.js";
import { apiConnection } from "../../functions/wellcome/main.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA PRINCIPAL COM AS OPCOES DE LOGIN E CADASTRO
*/
export default function Main({ navigation }) {
	const [load, setLoad] = useState(true);
	const [error, setError] = useState(false);
	const { setIsLogin } = useLogin();

	useEffect(() => { apiConnection(setIsLogin, setLoad, setError) }, []);

	if (error) return (<Error error={error} />);
	if (load) return (<Load />);

	return (
		<View style={styles.containerCenter} >
			<Image source={require("../../../assets/img/athlete1.png")} style={main.img} />
			<Text style={styles.title}>Olá</Text>
			<Text style={styles.text}>Bem-Vindo ao Seu App de Treinamento</Text>
			<View>
				<Button text="Login" style={main.button} onPress={() => navigation.navigate("login")} />
				<Button text="Cadastrar" style={main.button} onPress={() => navigation.navigate("register1")} />
			</View>
		</View>
	);
}

const main = StyleSheet.create({
	img: {
		width: 200,
		height: 200
	},
	button: {
		marginVertical: 10
	}
});