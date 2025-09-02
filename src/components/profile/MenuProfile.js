import { StyleSheet, TouchableOpacity, View, Image, Pressable, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import Modal from "react-native-modal";

import { useLogin } from "../../app/isLogin.js";
import { logout } from "../../functions/logout.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE COM MENU DE OPCOES DA ABA PERFIL
*/
export default function MenuProfile() {
	const [isVisible, setIsVisible] = useState(false);
	const { setIsLogin } = useLogin();

	return (
		<>
			<TouchableOpacity onPress={() => setIsVisible(true)} >
				<MaterialIcons name="menu" size={50} color={theme.primaryTextColor} />
			</TouchableOpacity>
			<Modal isVisible={isVisible} onBackdropPress={() => setIsVisible(false)} style={menuProfile.modal} animationIn="slideInLeft" animationOut="slideOutLeft" backdropTransitionOutTiming={1} >
				<View style={menuProfile.containerModal}>
					<View style={menuProfile.header} >
						<TouchableOpacity onPress={() => setIsVisible(false)} >
							<MaterialIcons name="close" size={50} color={theme.primaryTextColor} />
						</TouchableOpacity>
						<Image source={require("../../../assets/img/logo-badbons.png")} style={menuProfile.logo} />
					</View>
					<Text style={menuProfile.section} >Conta</Text>
					<View style={menuProfile.containerOptions} >
						<Pressable style={({ pressed }) => [menuProfile.buttonOption, { backgroundColor: (pressed) ? "rgba(0, 0, 0, 0.5)" : "transparent" }]} >
							<Text style={menuProfile.option}>Alterar Email</Text>
						</Pressable>
						<Pressable style={({ pressed }) => [menuProfile.buttonOption, { backgroundColor: (pressed) ? "rgba(0, 0, 0, 0.5)" : "transparent" }]} >
							<Text style={menuProfile.option}>Alterar Senha</Text>
						</Pressable>
					</View>
					<View style={menuProfile.line} />
					<Pressable style={({ pressed }) => [menuProfile.buttonOption, { backgroundColor: (pressed) ? "rgba(0, 0, 0, 0.5)" : "transparent" }]} onPress={() => logout(setIsLogin)} >
						<Text style={menuProfile.exit}>Sair da Minha conta</Text>
					</Pressable>
				</View>
			</Modal>
		</>
	);
}

const menuProfile = StyleSheet.create({
	modal: {
		margin: 0
	},
	containerModal: {
		backgroundColor: "rgb(25, 27, 31)",
		height: "100%",
		width: "70%"
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10
	},
	logo: {
		width: 70,
		height: 70
	},
	section: {
		color: theme.secondaryTextColor,
		paddingHorizontal: 10,
		fontSize: 15
	},
	containerOptions: {

	},
	buttonOption: {
		marginVertical: 5
	},
	option: {
		color: theme.secondaryTextColor,
		fontSize: 20,
		padding: 10,
	},
	line: {
		backgroundColor: theme.primaryBackgroundColor,
		alignSelf: "stretch",
		height: 2,
		marginVertical: 20
	},
	exit: {
		color: "red",
		fontSize: 20,
		padding: 10
	}
});