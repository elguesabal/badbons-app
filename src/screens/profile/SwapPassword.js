import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView, View, Text } from "react-native";
import { useState } from "react";

import { useModal } from "../ModalGlobal/ModalGlobal.js";
import { useLogin } from "../../app/isLogin.js";

import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import { handleSwapPassword } from "../../functions/profile/swapPassword.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief TELA DE TROCA DE SENHA
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
*/
export default function SwapPassword({ navigation }) {
	const [newPassword, setNewPassword] = useState("");
	const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("");
	const [password, setPassword] = useState("");
	const { openModal } = useModal();
	const { setIsLogin } = useLogin();

	return (
		<KeyboardAvoidingView style={swapPassword.backgorund} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} >
			<ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
				<View style={swapPassword.container} >
					<Text style={swapPassword.section} >Conta</Text>
					<Input style={swapPassword.input} placeholder="Nova Senha" value={newPassword} onChangeText={setNewPassword} />
					<Input style={swapPassword.input} placeholder="Confirmar Nova Senha" value={newPasswordConfirmation} onChangeText={setNewPasswordConfirmation} />
					<Input style={swapPassword.input} placeholder="Senha atual" value={password} onChangeText={setPassword} />
					<View style={swapPassword.line} />
					<Button text="Trocar Senha" onPress={() => handleSwapPassword(newPassword, newPasswordConfirmation, password, navigation, openModal, setIsLogin)} load />
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const swapPassword = StyleSheet.create({
	backgorund: {
		flex: 1
	},
	container: {
		flex: 1,
		alignItems: "center"
	},
	section: {
		color: theme.secondaryTextColor,
		alignSelf: "stretch",
		margin: 30,
		fontSize: 15
	},
	input: {
		marginVertical: 10
	},
	line: {
		backgroundColor: theme.primaryBackgroundColor,
		alignSelf: "stretch",
		height: 2,
		marginVertical: 20
	},
});