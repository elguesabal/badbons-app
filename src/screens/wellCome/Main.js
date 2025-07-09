import { StyleSheet, View, Image, Text } from "react-native";
// import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Button.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA PRINCIPAL COM AS OPCOES DE LOGIN E CADASTRO
 * @param navigation OBJETO DE NAVEGACAO DE TELA DO COMPONENTE Stack
*/
export default function Main({ navigation }) {
	// const navigationTab = useNavigation();
	return (
		<View style={styles.container} >
			<Image source={require("../../../assets/img/Design_sem_nome__1_-removebg-preview.png")} style={main.img} />
			<Text style={styles.title}>Olá</Text>
			<Text style={styles.text}>Bem-Vindo ao Seu App de Treinamento</Text>
			<View>
				<Button text="login" style={main.button} onPress={() => navigation.navigate("login")} />
				<Button text="cadastrar" style={main.button} onPress={() => navigation.navigate("cadastrar1")} />
				{/* <Button text="home" style={main.button} onPress={() => navigationTab.navigate("Home")} />
				<Button text="teste" style={main.button} onPress={() => navigation.navigate("Teste")} /> */}
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