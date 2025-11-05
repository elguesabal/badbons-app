import { StyleSheet, Platform, StatusBar, TouchableOpacity, View, Image, ScrollView, Pressable, Text, Linking } from "react-native";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";

import { useSafeAreaInsets } from "react-native-safe-area-context"
;
import { useLogin } from "../../app/isLogin.js";
import { logout } from "../../functions/logout.js";

import { theme } from "../../styles/theme.js";

const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 20;

/**
 * @author VAMPETA
 * @brief COMPONENTE COM MENU DE OPCOES DA ABA PERFIL
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
*/
export default function MenuProfile({ navigation }) {
	const [visible, setVisible] = useState(false);
	const { setIsLogin } = useLogin();
	const navigationBar = useSafeAreaInsets();

	return (
		<>
			<TouchableOpacity onPress={() => setVisible(true)} >
				<MaterialIcons name="menu" size={50} color={theme.primaryTextColor} />
			</TouchableOpacity>
			<Modal isVisible={visible} onBackdropPress={() => setVisible(false)} onRequestClose={() => setVisible(false)} style={menuProfile.modal} animationIn="slideInLeft" animationOut="slideOutLeft" backdropTransitionOutTiming={1} >
				<View style={[menuProfile.containerModal, { paddingBottom: navigationBar.bottom }]}>
					<View style={menuProfile.header} >
						<TouchableOpacity onPress={() => setVisible(false)} >
							<MaterialIcons name="close" size={50} color={theme.primaryTextColor} />
						</TouchableOpacity>
						<Image source={require("../../../assets/img/logo-badbons.png")} style={menuProfile.logo} />
					</View>
					<ScrollView>
						<Text style={menuProfile.section} >Conta</Text>
						<View style={menuProfile.containerOptions} >
							<Pressable style={({ pressed }) => [menuProfile.buttonOption, { backgroundColor: (pressed) ? "rgba(0, 0, 0, 0.5)" : "transparent" }]} onPress={() => { setVisible(false); navigation.navigate("notifications"); }} >
								<Text style={menuProfile.option}>Notificações</Text>
							</Pressable>
							<Pressable style={({ pressed }) => [menuProfile.buttonOption, { backgroundColor: (pressed) ? "rgba(0, 0, 0, 0.5)" : "transparent" }]} onPress={() => { setVisible(false); navigation.navigate("plans"); }} >
								<Text style={menuProfile.option}>Planos BadBons</Text>
							</Pressable>
							<Pressable style={({ pressed }) => [menuProfile.buttonOption, { backgroundColor: (pressed) ? "rgba(0, 0, 0, 0.5)" : "transparent" }]} onPress={() => { setVisible(false); navigation.navigate("editCredentials"); }} >
								<Text style={menuProfile.option}>Editar Informações Pessoais</Text>
							</Pressable>
							<Pressable style={({ pressed }) => [menuProfile.buttonOption, { backgroundColor: (pressed) ? "rgba(0, 0, 0, 0.5)" : "transparent" }]} onPress={() => { setVisible(false); navigation.navigate("swapEmail"); }} >
								<Text style={menuProfile.option}>Alterar Email</Text>
							</Pressable>
							<Pressable style={({ pressed }) => [menuProfile.buttonOption, { backgroundColor: (pressed) ? "rgba(0, 0, 0, 0.5)" : "transparent" }]} onPress={() => { setVisible(false); navigation.navigate("swapPassword"); }} >
								<Text style={menuProfile.option}>Alterar Senha</Text>
							</Pressable>
						</View>
						<Text style={menuProfile.section} >Informações</Text>
						<View style={menuProfile.containerOptions} >
							<Pressable style={({ pressed }) => [menuProfile.buttonOption, { backgroundColor: (pressed) ? "rgba(0, 0, 0, 0.5)" : "transparent" }]} onPress={() => { setVisible(false); navigation.navigate("support"); }} >
								<Text style={menuProfile.option}>Suporte</Text>
							</Pressable>
							<Pressable style={({ pressed }) => [menuProfile.buttonOption, { backgroundColor: (pressed) ? "rgba(0, 0, 0, 0.5)" : "transparent" }]} onPress={() => { setVisible(false); navigation.navigate("about"); }} >
								<Text style={menuProfile.option}>Sobre nós</Text>
							</Pressable>
							<Pressable style={({ pressed }) => [menuProfile.buttonOption, { backgroundColor: (pressed) ? "rgba(0, 0, 0, 0.5)" : "transparent" }]} onPress={() => { setVisible(false); navigation.navigate("about"); }} >
								<Text style={menuProfile.option}>Sobre nós</Text>
							</Pressable>
							<Pressable style={({ pressed }) => [menuProfile.buttonOption, { backgroundColor: (pressed) ? "rgba(0, 0, 0, 0.5)" : "transparent" }]} onPress={() => { setVisible(false); navigation.navigate("about"); }} >
								<Text style={menuProfile.option}>Sobre nós</Text>
							</Pressable>
							<Pressable style={({ pressed }) => [menuProfile.buttonOption, { backgroundColor: (pressed) ? "rgba(0, 0, 0, 0.5)" : "transparent" }]} onPress={() => { setVisible(false); navigation.navigate("about"); }} >
								<Text style={menuProfile.option}>Sobre nós</Text>
							</Pressable>
							<Pressable style={({ pressed }) => [menuProfile.buttonOption, { backgroundColor: (pressed) ? "rgba(0, 0, 0, 0.5)" : "transparent" }]} onPress={() => { setVisible(false); navigation.navigate("about"); }} >
								<Text style={menuProfile.option}>Sobre nós</Text>
							</Pressable>
							<Pressable style={({ pressed }) => [menuProfile.buttonOption, { backgroundColor: (pressed) ? "rgba(0, 0, 0, 0.5)" : "transparent" }]} onPress={() => { setVisible(false); navigation.navigate("about"); }} >
								<Text style={menuProfile.option}>Sobre nós</Text>
							</Pressable>
							<Pressable style={({ pressed }) => [menuProfile.buttonOption, { backgroundColor: (pressed) ? "rgba(0, 0, 0, 0.5)" : "transparent" }]} onPress={() => { setVisible(false); navigation.navigate("about"); }} >
								<Text style={menuProfile.option}>Sobre nós</Text>
							</Pressable>
						</View>
						<View style={menuProfile.line} />
						<View style={menuProfile.socialMedia} >
							<TouchableOpacity onPress={async () => { if (await Linking.canOpenURL("https://www.google.com")) await Linking.openURL("https://www.google.com") }} >
								<MaterialIcons name="egg" size={40} color={theme.primaryTextColor} />
							</TouchableOpacity>
							<TouchableOpacity onPress={async () => { if (await Linking.canOpenURL("https://www.google.com")) await Linking.openURL("https://www.google.com") }} >
								<MaterialIcons name="egg-alt" size={40} color={theme.primaryTextColor} />
							</TouchableOpacity>
						</View>
						<Pressable style={({ pressed }) => [menuProfile.buttonOption, { backgroundColor: (pressed) ? "rgba(0, 0, 0, 0.5)" : "transparent" }]} onPress={() => logout(setIsLogin)} >
							<Text style={menuProfile.exit}>Sair da Minha conta</Text>
						</Pressable>
					</ScrollView>
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
		width: "70%",
		paddingTop: statusBarHeight
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
		marginHorizontal: 10,
		fontSize: 15
	},
	containerOptions: {
		marginBottom: 15
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
	socialMedia: {
		flexDirection: "row",
		justifyContent: "space-evenly"
	},
	exit: {
		color: "red",
		fontSize: 20,
		padding: 10
	}
});