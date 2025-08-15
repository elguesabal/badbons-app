import { StyleSheet, View, Image, Text } from "react-native";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief HEADER USADO NO BottomSheet
 * @param style ESTILIZACAO EXTRA DO COMPONENTE
*/
export default function HeaderBottomSheet({ style }) {
	return (
		<View style={[headerBottomSheet.container, style]} >
			<Image source={require("../../../assets/img/shuttlecock.png")} style={headerBottomSheet.shuttlecockLeft} />
			<Text style={headerBottomSheet.text} >Detalhes da Aula</Text>
			<Image source={require("../../../assets/img/shuttlecock.png")} style={headerBottomSheet.shuttlecockRight} />
		</View>
	);
}

const headerBottomSheet = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		borderBottomWidth: 10,
		borderBottomColor: theme.secondaryBackgroundColor,
		paddingBottom: 10
	},
	shuttlecockLeft: {
		width: 40,
		height: 35
	},
	text: {
		color: theme.primaryTextColor,
		fontSize: 20
	},
	shuttlecockRight: {
		width: 40,
		height: 35,
		transform: [{ scaleX: -1 }]
	}
});