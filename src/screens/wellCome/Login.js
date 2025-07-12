import { StyleSheet, View, Image } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
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

	async function hundleLogin() {
		if (!inputLogin || !inputPassword) {
			alert("Preencha todos os campos!");
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
				setError("Login ou senha errada!");
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