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
 * @param route OBJETO RECEBIDO QUE FORNECE INFORMACOES DA ROTA ATUAL
*/
function tabOptions({ route }) {
	const routeName = getFocusedRouteNameFromRoute(route) ?? "main";
	const icons = {
		Perfil: "person",
		Treino: "fitness-center",
		Home: "home",
		Torneio: "emoji-events",
		Desafio: "handshake"
	};

	return ({
		headerShown: false,
		tabBarButton: (props) => (<ButtonTabBar {...props} name={route.name} icon={icons[route.name]} />),
		tabBarStyle: {
			...sections.tabBar,
			display: (routeName === "main") ? "flex" : "none"
		}
	});
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE GERENCIA AS ABAS PRINCIPAIS Perfil Treino Home Torneio E Desafio
*/
function Sections() {
	return (
		<Tab.Navigator initialRouteName="Home" screenOptions={tabOptions} >
			<Tab.Screen name="Perfil" component={Profile} />
			<Tab.Screen name="Treino" component={Training} />
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Torneio" component={Tournament} />
			<Tab.Screen name="Desafio" component={Challenge} />
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