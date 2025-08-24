import { StyleSheet, View, Pressable, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Button from "../../components/Button.js";

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
					{(data.button) ? <Button text={data.button} onPress={closeModal} /> : null}
				</View>
			</View>
		</>
	);
}					// ACHO QUE EU DEVERIA PARAR DE USAR Button DENTRO DE ModalGlobal PRA EVITAR O AVISO "Require cycle" DO RIECT

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
	}
});