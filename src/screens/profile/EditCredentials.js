import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView, View, Text } from "react-native";
import { useReducer, useEffect } from "react";

import { useModal } from "../ModalGlobal/ModalGlobal.js";
import { useLogin } from "../../app/isLogin.js";

import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import { getCredentials, handleEditCredentials } from "../../functions/profile/editCredentials.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief EDITA INFORMACOES DO USUARIO
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
*/
export default function EditCredentials({ navigation }) {
	const { openModal } = useModal();
	const { setIsLogin } = useLogin();
	const [form, setForm] = useReducer((form, value) => ({ ...form, ...value }), { name: "", phone: "", cpf: "", date: "", nationality: "", sex: "" });

	useEffect(() => { getCredentials(setForm) }, []);
	return (
		<KeyboardAvoidingView style={editCredentials.backgorund} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} >
			<ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
				<View style={editCredentials.container} >
					<Text style={editCredentials.section} >Conta</Text>
					<Input style={editCredentials.input} placeholder="Nome" value={form.name} onChangeText={(name) => setForm({ name })} />
					<Input style={editCredentials.input} placeholder="Telefone" value={form.phone} onChangeText={(phone) => setForm({ phone })} />
					<Input style={editCredentials.input} placeholder="CPF" value={form.cpf} onChangeText={(cpf) => setForm({ cpf })} />
					<Input style={editCredentials.input} placeholder="Data de Nascimento" value={form.date} onChangeText={(date) => setForm({ date })} />
					<Input style={editCredentials.input} placeholder="Nacionalidade" value={form.nationality} onChangeText={(nationality) => setForm({ nationality })} />
					<Input style={editCredentials.input} placeholder="Sexo" value={form.sex} onChangeText={(sex) => setForm({ sex })} />
					<View style={editCredentials.line} />
					<Button text="Confirmar Troca" onPress={() => handleEditCredentials(form, navigation, openModal, setIsLogin)} load />
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const editCredentials = StyleSheet.create({
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