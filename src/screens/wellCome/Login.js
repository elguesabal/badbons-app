import { StyleSheet, KeyboardAvoidingView, ScrollView, Platform, View, Image } from "react-native";
import { useReducer } from "react";

import { useLogin } from "../../app/isLogin.js";

import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import { handleLogin } from "../../functions/wellcome/login.js";

/**
 * @author VAMPETA
 * @brief TELA DE LOGIN
*/
export default function Login() {
	const { setIsLogin } = useLogin();
	const [form, setForm] = useReducer((form, value) => ({ ...form, ...value }), { login: "", password: "" });

	return (
		<KeyboardAvoidingView style={login.background} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} >
			<ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
				<View style={login.container} >
					<Image source={require("../../../assets/img/athlete2.png")} style={login.img} />
					<View style={login.containerInputs} >
						<Input style={login.input} placeholder="Login" value={form.login} onChangeText={(login) => setForm({ login })} />
						<Input style={login.input} placeholder="Senha" value={form.password} onChangeText={(password) => setForm({ password })} secureTextEntry />
					</View>
					<View style={login.containerButton} >
						<Button text="proximo" onPress={() => handleLogin(form, setIsLogin)} load={true} />
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const login = StyleSheet.create({
	background: {
		flex: 1,
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-between",
		paddingBottom: "20%"
	},
	img: {
		width: 200,
		height: 200
	},
	containerInputs: {
		alignSelf: "stretch",
		alignItems: "center",
		justifyContent: "center"
	},
	input: {
		marginVertical: 10
	},
	containerButton: {
		alignSelf: "stretch",
		alignItems: "flex-end",
		marginRight: "10%"
	}
});