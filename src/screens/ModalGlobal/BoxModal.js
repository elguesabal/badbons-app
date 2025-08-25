import { StyleSheet, View, Pressable, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE DE CAIXA DE MENSAGEM DO ModalGlobal
 * @param data INFORMACOES A SEREM RENDERIZADAS NO MODAL
 * @param closeModal FUNCAO PARA FECHAR O MODAL
*/
export default function BoxModal({ data, closeModal }) {
	return (
		<>
			<Pressable style={StyleSheet.absoluteFill} onPress={closeModal} />
			<View style={boxModal.box}>
				<View style={boxModal.header} >
					<TouchableOpacity onPress={closeModal} >
						<MaterialIcons name="close" size={30} color={theme.secondaryTextColor} />
					</TouchableOpacity>
				</View>
				<View style={boxModal.body} >									
					{(data.icon) ? <MaterialIcons name={data.icon} size={100} color={theme.secondaryTextColor} /> : null}
					{(data.text) ? <Text style={boxModal.text}>{data.text}</Text> : null}
					{(data.status) ? <Text style={boxModal.status}>Status {data.status}</Text> : null}
					{(data.button) ? (
						<TouchableOpacity style={boxModal.button} onPress={closeModal} >
							<Text style={boxModal.textButton}>{data.button}</Text>
						</TouchableOpacity>
					) : null}
				</View>
			</View>
		</>
	);
}

const boxModal = StyleSheet.create({
	box: {
		backgroundColor: "white",
		height: "40%",
		width: "80%",
		padding: 20,
		borderRadius: 10
	},
	header: {
		alignItems: "flex-end"
	},
	body: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-evenly"
	},
	text: {
		fontSize: 18,
	},
	status: {
		fontSize: 16,
	},
	button: {
		backgroundColor: theme.primaryBackgroundColor,
		borderRadius: 20,
		width: 150,
		height: 40,
		alignItems: "center",
		justifyContent: "center"
	},
	textButton: {
		color: theme.primaryTextColor,
		fontSize: 15
	}
});