import { StyleSheet, View, Image, Text } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

import API_URL from "../../Api.js";

import Load from "../load/Load.js";
import Error from "../error/Error.js";
import HeaderLogo from "../../components/HeaderLogo.js";
import Button from "../../components/Button.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA PRINCIPAL COM AS OPCOES DE LOGIN E CADASTRO
 * @param navigation OBJETO DE NAVEGACAO DE TELA DO COMPONENTE Stack
*/
export default function Main({ navigation }) {
	const [load, setLoad] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function ping() {
			try {
				const res = await axios.get(`${API_URL}/ping`);
				if (res.status !== 200) setError("error");
			} catch (error) {
				setError(error.message);
			} finally {
				setLoad(false);
			}
		}
		ping();
	}, []);

	if (error) return (<Error error={error} />);
	if (load) return (<Load />);

	return (
		<View style={styles.container} >
			<HeaderLogo />
			<View style={styles.container} >
				<Image source={require("../../../assets/img/Design_sem_nome__1_-removebg-preview.png")} style={main.img} />
				<Text style={styles.title}>Olá</Text>
				<Text style={styles.text}>Bem-Vindo ao Seu App de Treinamento</Text>
				<View>
					<Button text="Login" style={main.button} onPress={() => navigation.navigate("login")} />
					<Button text="Cadastrar" style={main.button} onPress={() => navigation.navigate("register1")} />
				</View>
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