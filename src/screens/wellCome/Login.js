import { KeyboardAvoidingView, ScrollView, Platform, StyleSheet, View, Image } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import axios from "axios";

import API_URL from "../../Api.js";

import Load from "../load/Load.js";
import Error from "../error/Error.js";
import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE LOGIN
*/
export default function Login() {
	const navigation = useNavigation();
	const [load, setLoad] = useState(false);
	const [error, setError] = useState("");
	const [inputLogin, setInputLogin] = useState("");
	const [inputPassword, setInputPassword] = useState("");

	/**
	 * @author VAMPETA
	 * @brief FUNCAO Q VALIDA OS CAMPOS, CONTROLA O O HEADER, TELA DE LOAD E ERRO FAZENDO REQUISICAO NA API
	*/
	async function hundleLogin() {
		if (!inputLogin || !inputPassword) {
			Alert.alert("Atenção", "Preencha todos os campos!");
			return ;
		}

		navigation.setOptions({ headerShown: false });
		setLoad(true);
		setError("");

		try {
			const res = await axios.post(`${API_URL}/login`, { login: inputLogin, password: inputPassword });
			if (res.status === 200) navigation.navigate("Home");
		} catch (error) {
			if (error.response && error.response.status === 401) {
				Alert.alert("Login", "Login ou senha errada!");
			} else {
				setError(error.message);
			}
		} finally {
			setLoad(false);
			navigation.setOptions({ headerShown: true });
		}
	}

	if (error) return (<Error error={error} />);
	if (load) return (<Load />);

	return (
		<KeyboardAvoidingView style={styles.backgorund} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} >
			<ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
				<View style={styles.containerBetween} >
					<View style={styles.center} >
						<Image source={require("../../../assets/img/4-removebg-preview.png")} style={login.img} />
					</View>
					<View style={login.containerInputs} >
						<Input placeholder="Login" value={inputLogin} onChangeText={setInputLogin} />
						<Input placeholder="Senha" value={inputPassword} onChangeText={setInputPassword} secureTextEntry />
					</View>
					<View style={login.containerButton} >
						<Button text="proximo" onPress={hundleLogin} />
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const login = StyleSheet.create({
	img: {
		width: 200,
		height: 200,
		marginTop: 150,
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