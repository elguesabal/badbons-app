import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Button from "../../components/Button.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief 
*/
export default function Plans() {
	return (
		<View style={plans.container} >
			<View style={plans.box} >
				<View style={plans.header} >
					<MaterialIcons name="star" size={50} color={theme.tertiaryBackgroundColor} />
					<Text>Plano BadBons</Text>
				</View>
				<View style={plans.body} >
					<Text>Escolha a Forma de Pagamento</Text>
					<Text>PIX</Text>
					<Text>Cartão de Crédito</Text>
				</View>
				<View style={plans.footer} >
					<Button text="Assinar Plano Premium" style={plans.button} />
				</View>
			</View>
		</View>
	);
}

const plans = StyleSheet.create({
	container: {
		// backgroundColor: "blue",
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	box: {
		backgroundColor: theme.primaryBackgroundColor,
		width: "80%",
		height: "70%",
	},
	header: {
		flex: 1,
		// justifyContent: "center",
		alignItems: "center",
		paddingBottom: 30
	},
	body: {
		flex: 1,
		alignItems: "center",
	},
	footer: {
		flex: 1,
		alignItems: "center",
		padding: 20
	},
	button: {
		backgroundColor: "black",
		width: "100%",
		opacity: 0.6
	}
});