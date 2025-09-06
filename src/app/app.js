import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { enableScreens } from "react-native-screens";
import { StyleSheet, StatusBar, ImageBackground } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { useLogin } from "./isLogin.js";
import ButtonTabBar from "../components/ButtonTabBar.js";
import Wellcome from "../screens/wellcome/Wellcome.js";
import Profile from "../screens/profile/Profile.js";
import Training from "../screens/training/Training.js";
import Home from "../screens/home/Home.js";
import Tournament from "../screens/tournament/Tournament.js";
import Challenge from "../screens/challenge/Challenge.js";

import styles from "../styles/styles.js";

enableScreens();
const Tab = createBottomTabNavigator();

/**
 * @author VAMPETA
 * @brief FUNCAO CRIADA PARA FACILITAR A CONFIGURACAO DO options DO Tab.Screen
 * @param name NOME DA ROTA
 * @param icon NOME DO ICONE QUE VAI APARECER TabBar
*/
function tabOptions(name, icon) {
	return (({ route }) => {
		const routeName = getFocusedRouteNameFromRoute(route) ?? "main";

		return ({
			tabBarButton: (props) => (<ButtonTabBar {...props} name={name} icon={icon} />),
			tabBarStyle: { display: (routeName === "main") ? "flex" : "none" }
		});
	});
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE GERENCIA AS ABAS PRINCIPAIS Perfil Treino Home Torneio E Desafio
*/
function Sections() {
	return (
		<Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, tabBarStyle: sections.tabBar }} >
			<Tab.Screen name="Perfil" component={Profile} options={tabOptions("Perfil", "person")} />
			<Tab.Screen name="Treino" component={Training} options={tabOptions("Treino", "fitness-center")} />
			<Tab.Screen name="Home" component={Home} options={tabOptions("Home", "home")} />
			<Tab.Screen name="Torneio" component={Tournament} options={tabOptions("Torneio", "emoji-events")} />
			<Tab.Screen name="Desafio" component={Challenge} options={tabOptions("Desafio", "handshake")} />
		</Tab.Navigator>
	);
}

/**
 * @author VAMPETA
 * @brief CONTROLA O FLUXO ENTRE LOGADO CRIA FUNDO COM A IMAGEM CONFIGURA BARRA DE NOTIFICACAO E EXPORTA PARA SER USANDO EM ./App.js
*/
export function MainApp() {
	const { isLogin } = useLogin();

	useEffect(() => {
		NavigationBar.setButtonStyleAsync("light");
		NavigationBar.setVisibilityAsync("immersive");
	}, []);

	return (
		<NavigationContainer theme={MyTheme}>
			<StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
			<ImageBackground source={require("../../assets/img/background.png")} style={styles.backgorund}>
				{isLogin ? <Sections /> : <Wellcome />}
			</ImageBackground>
		</NavigationContainer>
	);
}

const sections = StyleSheet.create({
	tabBar: {
		backgroundColor: "rgba(0, 0, 0, 0)",
		elevation: 0
	}
});

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: "transparent",
		card: "transparent",
		text: "white",
		border: "transparent",
		notification: "transparent",
		primary: "white",
	}
};