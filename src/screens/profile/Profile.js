import { View, Text } from "react-native";

import { useLogin } from "../../app/isLogin.js";
import { logout } from "../../functions/profile/profile.js";

import Button from "../../components/Button.js";

/**
 * @author VAMPETA
 * @brief TELA DE PERFIL
*/
export default function Profile() {
	const { setIsLogin } = useLogin();

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text style={{ color: "white" }} >Perfil</Text>
			<Button text="Sair" onPress={() => logout(setIsLogin)} />
		</View>
	);
}