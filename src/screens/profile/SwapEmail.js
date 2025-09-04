import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView, View, Text } from "react-native";
import { useState } from "react";

import { useModal } from "../ModalGlobal/ModalGlobal.js";
import { useLogin } from "../../app/isLogin.js";

import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import { handleSwapEmail } from "../../functions/profile/swapEmail.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief TELA DE TROCA DE SENHA
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
*/
export default function SwapEmail({ navigation }) {
	const [newEmail, setNewEmail] = useState("");
	const [newEmailConfirmation, setNewEmailConfirmation] = useState("");
	const [password, setPassword] = useState("");
	const { openModal, closeModal } = useModal();
	const { setIsLogin } = useLogin();

	return (
		<KeyboardAvoidingView style={setNewEmail.backgorund} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} >
			<ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
				<View style={swapEmail.container} >
					<Text style={swapEmail.section} >Conta</Text>
					<Input placeholder="Novo Email" value={newEmail} onChangeText={setNewEmail} />
					<Input placeholder="Confirmar Novo Email" value={newEmailConfirmation} onChangeText={setNewEmailConfirmation} />
					<Input placeholder="Senha" value={password} onChangeText={setPassword} />
					<View style={swapEmail.line} />
					<Button text="Trocar Email" onPress={() => handleSwapEmail(newEmail, newEmailConfirmation, password, navigation, openModal, closeModal, setIsLogin)} load />
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const swapEmail = StyleSheet.create({
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
	line: {
		backgroundColor: theme.primaryBackgroundColor,
		alignSelf: "stretch",
		height: 2,
		marginVertical: 20
	},
});