import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import Checkbox from "../../components/Checkbox.js";
import Button from "../../components/Button.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief 
*/
export default function Plans() {
	const [payment, setPayment] = useState(null);

	return (
		<View style={plans.container} >
			<View style={plans.box} >
				<View style={plans.header} >
					<MaterialIcons name="star" size={50} color={theme.tertiaryBackgroundColor} />
					<Text style={plans.titleHeader} >Plano BadBons</Text>
				</View>
				<View style={plans.body} >
					<Text style={plans.titleBody} >Escolha a Forma de Pagamento</Text>
					<View style={plans.containerOptionsBody} >
						<View style={plans.paymentMethod} >
							<Checkbox setCheckbox={setPayment} inputCheckbox={payment} circle />
							<Text style={plans.text} >PIX</Text>
						</View>
						<View style={plans.paymentMethod} >
							<Checkbox setCheckbox={setPayment} inputCheckbox={payment} circle />
							<Text style={plans.text} >Cartão de Crédito</Text>
						</View>
					</View>
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
		borderRadius: 20
	},
	header: {
		// backgroundColor: "red",
		height: "30%",
		justifyContent: "center",
		alignItems: "center",
	},
	titleHeader: {
		color: "white",
		fontSize: 25
	},
	body: {
		// backgroundColor: "green",
		height: "50%",
		borderTopWidth: 2,
		borderBottomWidth: 2,
		borderColor: theme.tertiaryBackgroundColor
	},
	titleBody: {
		// backgroundColor: "blue",
		color: "white",
		height: "20%",
		textAlign: "center",
		textAlignVertical: "center"
	},
	containerOptionsBody: {
		// backgroundColor: "red",
		flex: 1,
		justifyContent: "space-evenly",
		marginHorizontal: "25%",
		marginBottom: 50
	},
	paymentMethod: {
		// backgroundColor: "red",
		// alignSelf: "stretch",
		flexDirection: "row",
		// justifyContent: "center"
	},
	footer: {
		// backgroundColor: "blue",
		height: "20%",
		justifyContent: "center",
		alignItems: "center",
		padding: 20
	},
	button: {
		backgroundColor: "black",
		width: "100%",
		opacity: 0.6
	},

	text: {
		color: "white"
	}
});