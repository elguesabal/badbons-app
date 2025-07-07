import { StyleSheet, Platform, StatusBar, View, TouchableOpacity, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const statusBarHeight = Platform.OS == "android" ? StatusBar.currentHeight : 0;

export default function Header({ text, navigation }) {
	return (
		<View style={styles.conteiner}>
			<View style={styles.header}>
				<TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
					<Ionicons name="arrow-back" size={24} color="black" />
				</TouchableOpacity>
				<Text style={styles.text}>{text}</Text>
				<Image source={require("../../assets/img/logo badbons.png")} style={styles.img} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	conteiner: {
		backgroundColor: "#191b1f",
		alignSelf: "stretch",
		paddingTop: statusBarHeight,
		width: "100%",
		height: 90
	},
	header: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 15
	},
	button: {
		backgroundColor: "blue",
		borderRadius: 50,
		padding: 5
	},
	text: {
		color: "white"
	},
	img: {
		width: 70,
		height: 70
	}
});