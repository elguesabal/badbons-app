import { StyleSheet, View, Text } from "react-native";

/**
 * @author VAMPETA
 * @brief COMPONENTE DE ANUNCIO
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
		backgroundColor: "blue",
		alignItems: "center",
		justifyContent: "center",
		height: 100,
		borderRadius: 10
	},
	text: {
		color: "white"
	}
});