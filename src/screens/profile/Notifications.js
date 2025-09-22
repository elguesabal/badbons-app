import { StyleSheet, View, FlatList, ActivityIndicator, TouchableOpacity, Text } from "react-native";
import { useState, useEffect } from "react";

import { useLogin } from "../../app/isLogin.js";
import { useModal } from "../ModalGlobal/ModalGlobal.js";

import { requestNotifications, handleNotification } from "../../functions/profile/notifications.js";

import Load from "../load/Load.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief TELA DE NOTIFICACOES
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
*/
export default function Notifications({ navigation }) {
	const { setIsLogin } = useLogin();
	const [load, setLoad] = useState(true);
	const { openModal } = useModal();
	const [listNotifications, setListNotifications] = useState([]);
	const [page, setPage] = useState(1);
	const [loadingMore, setLoadingMore] = useState(false);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => { requestNotifications(setListNotifications, setLoad, setIsLogin, openModal, loadingMore, setLoadingMore, hasMore, setHasMore, page, setPage) }, []);
	if (load) return (<Load />);
	if (!listNotifications.length) {
		return (
			<View style={notifications.containerNoNotifications} >
				<Text style={notifications.textNoNotifications} >Sem notificações</Text>
			</View>
		);
	}
	return (
		<FlatList data={listNotifications} keyExtractor={(_, i) => i.toString()} onEndReachedThreshold={0.2} ListFooterComponent={(loadingMore) ? <ActivityIndicator size="large" color="white" /> : null } onEndReached={() => requestNotifications(setListNotifications, setLoad, setIsLogin, openModal, loadingMore, setLoadingMore, hasMore, setHasMore, page, setPage)}
			renderItem={({ item, index }) => (
				<TouchableOpacity style={[notifications.notification, (item.viewed) ? { backgroundColor: "rgba(0, 0, 0, 0.2)" } : null]} onPress={() => handleNotification(navigation, listNotifications, setListNotifications, index)} >
					<View style={[notifications.dotNotification, (item.viewed) ? null : { backgroundColor: theme.primaryBackgroundColor }]} />
					<View style={notifications.containerNotification} >
						<View style={notifications.headerNotification} >
							<Text style={notifications.title} >{index + 1} {item.title}</Text>
							<Text style={notifications.time} >{item.time}</Text>
						</View>
						<Text style={notifications.text} >{item.message}</Text>
					</View>
				</TouchableOpacity>
			)
		} />
	);
}

const notifications = StyleSheet.create({
	notification: {
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		flexDirection: "row",
		alignItems: "center",
		height: 70,
		padding: 15,
		marginVertical: 5
	},
	dotNotification: {
		height: 15,
		width: 15,
		borderRadius: "100%"
	},
	containerNotification: {
		height: "100%",
		justifyContent: "space-between",
		marginLeft: 20
	},
	headerNotification: {
		flexDirection: "row"
	},
	title: {
		color: theme.primaryTextColor,
		marginRight: 10
	},
	time: {
		color: theme.secondaryTextColor
	},
	text: {
		color: theme.secondaryTextColor
	},
	containerNoNotifications: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	textNoNotifications: {
		color: theme.primaryTextColor,
		fontSize: 25
	}
});