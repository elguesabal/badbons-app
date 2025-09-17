import { StyleSheet, ScrollView, Text } from "react-native";
import { useState, useEffect } from "react";

import { useLogin } from "../../app/isLogin.js";
import { useModal } from "../ModalGlobal/ModalGlobal.js";

import { requestNotification } from "../../functions/profile/notification.js";

import Load from "../load/Load.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief TELA DE NOTIFICACAO
 * @param route OBJETO COM PARAMETROS DA SCREEN ANTERIOR
*/
export default function Notification({ route }) {
	const { setIsLogin } = useLogin();
	const [load, setLoad] = useState(true);
	const { openModal } = useModal();
	const [data, setData] = useState({});

	useEffect(() => { requestNotification(route.params.id, setData, setIsLogin, setLoad, openModal) }, []);
	if (load) return (<Load />);
	return (
		<ScrollView contentContainerStyle={notification.container} >
			<Text style={notification.title} >{data.title}</Text>
			<Text style={notification.text} >{data.text}</Text>
		</ScrollView>
	);
}

const notification = StyleSheet.create({
	container: {
		alignItems: "center"
	},
	title: {
		textAlign: "center",
		fontSize: 40,
		color: theme.primaryTextColor,
		marginTop: 50,
		paddingHorizontal: "15%"
	},
	text: {
		textAlign: "center",
		fontSize: 20,
		color: theme.primaryTextColor,
		marginTop: 50,
		paddingHorizontal: "10%"
	}
});