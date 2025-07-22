import { StyleSheet, Platform, StatusBar, View, TouchableOpacity, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const statusBarHeight = Platform.OS == "android" ? StatusBar.currentHeight : 0;

/**
 * @author VAMPETA
 * @brief CRIA UM HEADER TOTALMENTE PERSONALIZAVEL PARA USAR NA Stack
 * @param navigation OBJETO COM METODO DE VOLTAR PARA A PAGINA ANTERIOR
 * @param options CONTEM CONFIGURACOES ADICIONAIS (EXEMPLO: TITULO DO HEADER)
 * @return RETORNA UM HEADER PERSONALZIADO
*/
export default function HeaderStack({ navigation, options }) {
	return (
		<View style={headerStack.conteiner}>
			<View style={headerStack.header}>
				<TouchableOpacity style={headerStack.button} onPress={() => navigation.goBack()}>
					<Ionicons name="arrow-back" size={24} color="black" />
				</TouchableOpacity>
				<Text style={headerStack.titleHeader}>{options.title}</Text>
				<Image source={require("../../assets/img/logo badbons.png")} style={headerStack.img} />
			</View>
		</View>
	);
}

const headerStack = StyleSheet.create({
	conteiner: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		marginTop: statusBarHeight,
		height: 55
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
	titleHeader: {
		color: "white",
		fontSize: 25
	},
	img: {
		width: 70,
		height: 70
	}
});