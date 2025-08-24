import { KeyboardAvoidingView, ScrollView, Platform, StyleSheet, View, Image } from "react-native";
import { useState } from "react";

import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import { useLogin } from "../../app/isLogin.js";
import { hundleLogin } from "../../functions/wellcome/login.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE LOGIN
*/
export default function Login() {
	const [inputLogin, setInputLogin] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	const { setIsLogin } = useLogin();

	return (
		<KeyboardAvoidingView style={styles.backgorund} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} >
			<ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
				<View style={styles.containerBetween} >
					<Image source={require("../../../assets/img/athlete2.png")} style={login.img} />
					<View style={login.containerInputs} >
						<Input placeholder="Login" value={inputLogin} onChangeText={setInputLogin} />
						<Input placeholder="Senha" value={inputPassword} onChangeText={setInputPassword} secureTextEntry />
					</View>
					<View style={login.containerButton} >
						<Button text="proximo" onPress={() => hundleLogin(inputLogin, inputPassword, setIsLogin)} load={true} />
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const login = StyleSheet.create({
	img: {
		width: 200,
		height: 200
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