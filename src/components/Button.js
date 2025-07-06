import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Button({ text, onPress }) {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "blue",
		borderRadius: 20,
		paddingHorizontal: 50,
		paddingVertical: 10,
		margin: 10,
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		color: "white",
		fontSize: 15
	}
});