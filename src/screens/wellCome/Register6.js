import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Button from "../../components/Button.js";

import { backLogin } from "../../functions/wellcome/register6.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief TELA DE CADASTRO
*/
export default function Register6({ navigation }) {
	return (
		<View style={register6.container} >
			<View style={register6.containerIcon} >
				<MaterialIcons name="check" size={70} color={theme.primaryTextColor} />
			</View>
			<View style={register6.containerText} >
				<Text style={register6.title} >Matrícula Confirmada!</Text>
				<Text style={register6.text} >Bem-Vindo a Equipe Badbons,</Text>
				<Text style={register6.text} >Tenha Ótimos Treinos!</Text>
			</View>
			<Button text="Fazer Login" onPress={() => backLogin(navigation)} />
		</View>
	);
}

const register6 = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	containerIcon: {
		backgroundColor: "green",
		alignItems: "center",
		borderRadius: 100,
		padding: 20
	},
	containerText: {
		alignItems: theme.primaryTextColor,
		marginVertical: "25%"
	},
	title: {
		color: theme.primaryTextColor,
		fontSize: 25,
		marginHorizontal: "10%"
	},
	text: {
		color: theme.primaryTextColor,
		fontSize: 15
	}
});