import { StyleSheet, View, Text } from "react-native";

/**
 * @author VAMPETA
 * @brief COMPONENTE DE ANUNCIO
*/
export default function Publicity() {
	return (
		<View style={publicity.container} >
			<Text style={publicity.text} >anuncio loja badbons</Text>
		</View>
	);
}

const publicity = StyleSheet.create({
	container: {
		backgroundColor: "blue",
		alignSelf: "stretch",
		height: 100,
		marginTop: 35,
		marginBottom: 50,
		marginHorizontal: "5%",
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		color: "white"
	}
});