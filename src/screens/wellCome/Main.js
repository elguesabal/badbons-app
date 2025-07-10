import { StyleSheet, View, Image, Text } from "react-native";

import HeaderLogo from "../../components/HeaderLogo.js";
import Button from "../../components/Button.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA PRINCIPAL COM AS OPCOES DE LOGIN E CADASTRO
 * @param navigation OBJETO DE NAVEGACAO DE TELA DO COMPONENTE Stack
*/
export default function Main({ navigation }) {
	return (
		<View style={styles.container} >
			<HeaderLogo />
			<View style={styles.container} >
				<Image source={require("../../../assets/img/Design_sem_nome__1_-removebg-preview.png")} style={main.img} />
				<Text style={styles.title}>Olá</Text>
				<Text style={styles.text}>Bem-Vindo ao Seu App de Treinamento</Text>
				<View>
					<Button text="login" style={main.button} onPress={() => navigation.navigate("login")} />
					<Button text="cadastrar" style={main.button} onPress={() => navigation.navigate("cadastrar1")} />
				</View>
			</View>
		</View>
	);
}

const main = StyleSheet.create({
	img: {
		width: 200,
		height: 200
	},
	button: {
		marginVertical: 10
	}
});