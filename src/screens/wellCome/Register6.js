import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Button from "../../components/Button.js";

import { backLogin } from "../../functions/wellcome/register6.js";

import styles from "../../styles/styles";

export default function Register6({ navigation }) {
	return (
		<View style={styles.containerCenter} >
			<View style={register6.containerIcon} >
				<MaterialIcons name="check" size={70} color="white" />
			</View>
			<View style={register6.containerText} >
				<Text style={styles.title} >Matrícula Confirmada!</Text>
				<Text style={styles.text} >Bem-Vindo a Equipe Badbons,</Text>
				<Text style={styles.text} >Tenha Ótimos Treinos!</Text>
			</View>
			<Button text="Fazer Login" onPress={() => backLogin(navigation)} />
		</View>
	);
}

const register6 = StyleSheet.create({
	containerIcon: {
		backgroundColor: "green",
		alignItems: "center",
		borderRadius: 100,
		padding: 20
	},
	containerText: {
		alignItems: "center",
		marginVertical: "25%"
	}
});