// import { StyleSheet, View } from "react-native";

// import Button from "../Button.js";

// import { theme } from "../../styles/theme.js";

// /**
//  * @author VAMPETA
//  * @brief GRUPO DE BOTAO QUE CONTROLA QUAL COMPONENTE VAI SER RENDEIZADO
//  * @param buttonSelected VARIAVEL QUE INFORMA QUAL BOTAO ESTA SELECIONADO
//  * @param setButtonSelected HOOK QUE PERMITE MODIFICAR buttonSelected
// */
// export default function SelectionButtun({ buttonSelected, setButtonSelected }) {
// 	const general = { backgroundColor: (buttonSelected === "general") ? theme.primaryBackgroundColor : theme.secondaryBackgroundColor, zIndex: (buttonSelected === "general") ? 1 : 0 };
// 	const statistics = { backgroundColor: (buttonSelected === "statistics") ? theme.primaryBackgroundColor : theme.secondaryBackgroundColor, zIndex: (buttonSelected === "statistics") ? 1 : 0 };

// 	return (
// 		<View style={selectionButtun.container} >
// 			<Button text="Geral" style={[selectionButtun.button1, general]} activeOpacity={1} onPress={() => setButtonSelected("general")} />
// 			<Button text="Estatísticas" style={[selectionButtun.button2, statistics]} activeOpacity={1} onPress={() => setButtonSelected("statistics")} />
// 		</View>
// 	);
// }

// const selectionButtun = StyleSheet.create({
// 	container: {
// 		flexDirection: "row",
// 		justifyContent: "center",
// 		marginTop: 15
// 	},
// 	button1: {
// 		marginRight: -15,
// 	},
// 	button2: {
// 		marginLeft: -15
// 	}
// });