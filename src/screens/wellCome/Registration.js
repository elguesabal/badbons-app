import { View, Text } from "react-native";

import HeaderLogo from "../../components/HeaderLogo.js";

import styles from "../../styles/styles.js";

export default function Registration() {
	return (
		<View style={styles.container}>
			<HeaderLogo />
			<View style={styles.container}>
				<Text style={styles.title}>Requisição de Matricula Enviada!</Text>
				<Text style={styles.text}>Aguarde Confirmação de sua Matricula Para Acessar o App!</Text>
			</View>
		</View>
	);
}