import { StyleSheet, View, Text } from "react-native";

/**
 * @author VAMPETA
 * @brief COMPONENTE COM DIAS DE TREINO
*/
export default function Days() {
	return (
		<View style={days.container} >
			<View style={days.day} >
				<Text style={days.text} >Seg</Text>
				<Text style={days.text} >1</Text>
			</View>
			<View style={[days.day, { backgroundColor: "blue" }]} >
				<Text style={days.text} >Ter</Text>
				<Text style={days.text} >2</Text>
			</View>
			<View style={days.day} >
				<Text style={days.text} >Qua</Text>
				<Text style={days.text} >3</Text>
			</View>
			<View style={days.day} >
				<Text style={days.text} >Qui</Text>
				<Text style={days.text} >4</Text>
			</View>
			<View style={[days.day, { backgroundColor: "blue" }]} >
				<Text style={days.text} >Sex</Text>
				<Text style={days.text} >5</Text>
			</View>
			<View style={days.day} >
				<Text style={days.text} >Sab</Text>
				<Text style={days.text} >6</Text>
			</View>
			<View style={days.day} >
				<Text style={days.text} >Dom</Text>
				<Text style={days.text} >7</Text>
			</View>
		</View>
	);
}

const days = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-evenly",
		marginTop: "5%"
	},
	day: {
		backgroundColor: "grey",
		width: "10%",
		paddingVertical: 5,
		borderRadius: 5
	},
	text: {
		color: "white",
		fontSize: 15,
		textAlign: "center"
	}
});