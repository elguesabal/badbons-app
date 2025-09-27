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
			<Pressable style={StyleSheet.absoluteFill} onPress={(data.exit) ? null : closeModal} />
			<View style={boxModal.box}>
				<View style={boxModal.header} >
					<TouchableOpacity onPress={(data.exit) ? () => data.exit(closeModal) : closeModal} >
						<MaterialIcons name="close" size={30} color={theme.secondaryTextColor} />
					</TouchableOpacity>
				</View>
				<View style={boxModal.body} >									
					{(data.icon) ? <MaterialIcons name={data.icon} size={100} color={theme.secondaryTextColor} /> : null}
					{(data.text) ? <Text style={boxModal.text}>{data.text}</Text> : null}
					{(data.status) ? <Text style={boxModal.status}>Status {data.status}</Text> : null}
					{/* {(data.button) ? (
						<TouchableOpacity style={boxModal.button} onPress={(data.handleButton) ? () => data.handleButton(closeModal) : closeModal} >
							<Text style={boxModal.textButton}>{data.button}</Text>
						</TouchableOpacity>
					) : null} */}
					{(data.yes && data.no) ? (
						<View style={boxModal.containerBoolean} >
							<TouchableOpacity style={boxModal.buttonBoolean} onPress={() => data.yes(closeModal)} >
								<Text style={boxModal.textButton}>Sim</Text>
							</TouchableOpacity>
							<TouchableOpacity style={boxModal.buttonBoolean} onPress={() => data.no(closeModal)} >
								<Text style={boxModal.textButton}>Não</Text>
							</TouchableOpacity>
						</View>
					) : (
						<TouchableOpacity style={boxModal.button} onPress={(data.handleButton) ? () => data.handleButton(closeModal) : closeModal} >
							<Text style={boxModal.textButton}>{(data.button) ? data.button : "Ok"}</Text>
						</TouchableOpacity>
					)}
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
		textAlign: "center"
	},
	status: {
		fontSize: 16
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
	},
	containerBoolean: {
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-evenly"
	},
	buttonBoolean: {
		backgroundColor: theme.primaryBackgroundColor,
		borderRadius: 20,
		width: 100,
		height: 40,
		alignItems: "center",
		justifyContent: "center"
	}
});