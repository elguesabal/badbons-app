import { StyleSheet, View, Text } from "react-native";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE DE ANUNCIO
 * @param style ESTILIZACAO EXTRA DO COMPONENTE
*/
export default function Publicity({ style }) {
	return (
		<View style={[publicity.container, style]} >
			<Text style={publicity.text} >anuncio loja badbons</Text>
		</View>
	);
}

const publicity = StyleSheet.create({
	container: {
		backgroundColor: theme.primaryBackgroundColor,
		alignItems: "center",
		justifyContent: "center",
		height: 100,
		borderRadius: 10
	},
	text: {
		color: theme.primaryTextColor
	}
});