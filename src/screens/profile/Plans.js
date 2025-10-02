import { StyleSheet, View, Text } from "react-native";
import { useReducer } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import Checkbox from "../../components/Checkbox.js";
import Button from "../../components/Button.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief SCREEN DE ESCOLHA DE FORMA DE PAGAMENTO
*/
export default function Plans() {
	const [payment, setPayment] = useReducer((_, newPayment) => (newPayment), { pix: null, creditCard: null });

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
							<Checkbox setCheckbox={() => setPayment({ pix: true })} inputCheckbox={payment.pix} circle />
							<Text style={plans.textPayment} >PIX</Text>
						</View>
						<View style={plans.paymentMethod} >
							<Checkbox setCheckbox={() => setPayment({ creditCard: true })} inputCheckbox={payment.creditCard} circle />
							<Text style={plans.textPayment} >Cartão de Crédito</Text>
						</View>
					</View>
				</View>
				<View style={plans.footer} >
					<Button text="Assinar Plano Premium" style={plans.button} onPress={() => {
						if (payment.pix) {
							alert("Pagamento via PIX");
						} else if (payment.creditCard) {
							alert("Pagamento via cartão de crédito");
						} else {
							alert("Escolha uma forma de pagamento!");
						}
					}} />
				</View>
			</View>
		</View>
	);
}

const plans = StyleSheet.create({
	container: {
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
		height: "30%",
		justifyContent: "center",
		alignItems: "center",
	},
	titleHeader: {
		color: "white",
		fontSize: 25
	},
	body: {
		height: "50%",
		borderTopWidth: 2,
		borderBottomWidth: 2,
		borderColor: theme.tertiaryBackgroundColor
	},
	titleBody: {
		color: "white",
		height: "20%",
		fontSize: 15,
		textAlign: "center",
		textAlignVertical: "center"
	},
	containerOptionsBody: {
		flex: 1,
		justifyContent: "space-evenly",
		marginHorizontal: "25%",
		marginBottom: 50
	},
	paymentMethod: {
		flexDirection: "row",
		alignItems: "center"
	},
	textPayment: {
		color: "white"
	},
	footer: {
		height: "20%",
		justifyContent: "center",
		alignItems: "center",
		padding: 20
	},
	button: {
		backgroundColor: "black",
		width: "100%",
		opacity: 0.6
	}
});