import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { theme } from "../../styles/theme.js";

import Button from "../../components/Button.js";

/**
 * @author VAMPETA
 * @brief TELA DE ERRO (USADA QUANDO O SERVIDOR RESPONDE COM OUTRO STATUS ALEM DO 200)
 * @param icon ICONE A SER MOSTRADO NA TELA
 * @param error MENSAGEM DE ERRO A SER MOSTRADA NA TELA
*/
export default function Error({ icon, message, button }) {
	return (
		<View style={error.container} >
			{(icon) ? <MaterialIcons style={error.icon} name={icon} size={100} color={theme.primaryTextColor} /> : null}
			<Text style={error.text} >{message}</Text>
			{(button) ? <Button style={error.button} text={button} onPress={() => alert("leva para a playstore")} /> : null}
		</View>
	);
}

const error = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	icon: {
		marginBottom: 50
	},
	text: {
		color: theme.primaryTextColor,
		fontSize: 20
	},
	button: {
		marginTop: 30
	}
});