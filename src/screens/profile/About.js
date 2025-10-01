import { StyleSheet, View, Text } from "react-native";

/**
 * @author VAMPETA
 * @brief SCREEN SOBRE NOS
*/
export default function About() {
	return(
		<View>
			<Text style={about.text} >about</Text>
		</View>
	);
}

const about = StyleSheet.create({
	text: {
		color: "white"
	}
});