import { KeyboardAvoidingView, ScrollView, Platform, StyleSheet, View, Image } from "react-native";
import { useReducer } from "react";

import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import { validation } from "../../functions/wellcome/register1.js";

/**
 * @author VAMPETA
 * @brief TELA DE CADASTRO
 * @param navigation FUNCAO QUE CONTROLA A NAVEGACAO ENTRE AS SCREENS
*/
export default function Register1({ navigation }) {
	const [form, setForm] = useReducer((form, value) => ({ ...form, ...value }), { name: "", email: "", password: "" });

	return (
		<KeyboardAvoidingView style={register1.background} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} >
			<ScrollView contentContainerStyle={{ flexGrow: 1}} keyboardShouldPersistTaps="handled">
				<View style={register1.container} >
					<Image style={register1.img} source={require("../../../assets/img/athlete2.png")} />
					<View style={register1.containerInputs} >
						<Input style={register1.input} placeholder="Nome" value={form.name} onChangeText={(name) => setForm({ name })} />
						<Input style={register1.input} placeholder="Email" value={form.email} onChangeText={(email) => setForm({ email })} />
						<Input style={register1.input} placeholder="Senha" value={form.password} onChangeText={(password) => setForm({ password })} secureTextEntry />
					</View>
					<View style={register1.containerButton} >
						<Button text="Próximo" onPress={() => validation(navigation, form)} />
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const register1 = StyleSheet.create({
	background: {
		flex: 1
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-between",
		paddingBottom: "20%"
	},
	img: {
		width: 200,
		height: 200,
	},
	containerInputs: {
		flex: 1,
		alignSelf: "stretch",
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