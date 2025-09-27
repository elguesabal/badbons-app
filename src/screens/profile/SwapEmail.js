import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView, View, Text } from "react-native";
import { useReducer } from "react";

import { useModal } from "../ModalGlobal/ModalGlobal.js";
import { useLogin } from "../../app/isLogin.js";

import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import { handleSwapEmail } from "../../functions/profile/swapEmail.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief TELA DE TROCA DE EMAIL
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
*/
export default function SwapEmail({ navigation }) {
	const { openModal } = useModal();
	const { setIsLogin } = useLogin();
	const [form, setForm] = useReducer((form, value) => ({ ...form, ...value }), { newEmail: "", newEmailConfirmation: "", password: "" })

	return (
		<KeyboardAvoidingView style={swapEmail.backgorund} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} >
			<ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
				<View style={swapEmail.container} >
					<Text style={swapEmail.section} >Conta</Text>
					<Input style={swapEmail.input} placeholder="Novo Email" value={form.newEmail} onChangeText={(newEmail) => setForm({ newEmail })} />
					<Input style={swapEmail.input} placeholder="Confirmar Novo Email" value={form.newEmailConfirmation} onChangeText={(newEmailConfirmation) => setForm({ newEmailConfirmation })} />
					<Input style={swapEmail.input} placeholder="Senha" value={form.password} onChangeText={(password) => setForm({ password })} />
					<View style={swapEmail.line} />
					<Button text="Trocar Email" onPress={() => handleSwapEmail(form, navigation, openModal, setIsLogin)} load />
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
	input: {
		marginVertical: 10
	},
	line: {
		backgroundColor: theme.primaryBackgroundColor,
		alignSelf: "stretch",
		height: 2,
		marginVertical: 20
	}
});