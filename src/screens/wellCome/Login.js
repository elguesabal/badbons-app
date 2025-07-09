import { StyleSheet, View, Image } from "react-native";

import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE LOGIN
*/
export default function Login() {
	return (
		<View style={styles.container} >
			<Image source={require("../../../assets/img/4-removebg-preview.png")} style={login.img} />
			<Input placeholder="Login" />
			<Input placeholder="Senha" />
			<View style={login.containerButton} >
				<Button text="proximo" onPress={() => alert("logado")} />
			</View>
		</View>
	);
}

const login = StyleSheet.create({
	img: {
		width: 200,
		height: 200
	},
	containerButton: {
		alignSelf: "stretch",
		alignItems: "flex-end",
		marginRight: "10%"
	}
});