import { StyleSheet, View, Text } from "react-native";

/**
 * @author VAMPETA
 * @brief SCREEN DE SUPORTE AO USUARIO
*/
export default function Support() {
	return(
		<View>
			<Text style={support.text} >Support</Text>
		</View>
	);
}

const support = StyleSheet.create({
	text: {
		color: "white"
	}
});