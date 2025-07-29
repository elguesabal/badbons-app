import { View, Text } from "react-native";

import Button from "../../components/Button.js";

async function logout(navigation) {
	console.log("aaaa")
	await SecureStore.deleteItemAsync("password");
	await SecureStore.deleteItemAsync("login");
	navigation.reset({
		index: 0,
		routes: [
			{ name: "Wellcome" }
		]
	});
}

/**
 * @author VAMPETA
 * @brief TELA DE PERFIL
*/
export default function Profile({ navigation }) {

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text style={{ color: "white" }} >Perfil</Text>
			<Button text="Sair" onPress={() => logout(navigation)} />
		</View>
	);
}