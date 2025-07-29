import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { enableScreens } from "react-native-screens";
import { StatusBar, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useLogin } from "./isLogin.js";
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
 * @brief FUNCAO QUE GERENCIA AS ABAS PRINCIPAIS Perfil Treino Home Torneio E Desafio
*/
function Sections() {
	return (
		<Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false,  tabBarStyle: { backgroundColor: "transparent", elevation: 0 } }} >
			<Tab.Screen name="Perfil" component={Profile} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="person" color={color} size={size} />) }} />
			<Tab.Screen name="Treino" component={Training} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="fitness-center" color={color} size={size} />) }} />
			<Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="home" color={color} size={size} />) }} />
			<Tab.Screen name="Torneio" component={Tournament} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="emoji-events" color={color} size={size} />) }} />
			<Tab.Screen name="Desafio" component={Challenge} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="handshake" color={color} size={size} />) }} />
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