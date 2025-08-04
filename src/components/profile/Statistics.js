import { StyleSheet, View, Text } from "react-native";

/**
 * @author VAMPETA
 * @brief 
*/
export default function Statistics() {
	return (
		<View style={statistics.container} >
			<Text style={{ color: "white" }} >ainda nao tem nada aki</Text>
		</View>
	);
}

const statistics = StyleSheet.create({
	container: {
		backgroundColor: "green",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "stretch",
		height: 100,
		marginHorizontal: "10%",
		marginTop: 25
	}
});