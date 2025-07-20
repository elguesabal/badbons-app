import { KeyboardAvoidingView, ScrollView, Platform, StyleSheet, View, Image } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Load from "../load/Load.js";
import Error from "../error/Error.js";
import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import { hundleLogin } from "../../functions/wellcome/login.js";

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
						<Button text="proximo" onPress={() => hundleLogin(inputLogin, inputPassword, navigation, setLoad, setError)} />
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