import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { enableScreens } from "react-native-screens";
import { StatusBar, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Wellcome from "./src/screens/wellcome/Wellcome.js";
import Home from "./src/screens/home/Home.js";

// import { navigationRef } from "./src/functions/navigation.js";

import styles from "./src/styles/styles.js";

enableScreens();
const Tab = createBottomTabNavigator();


/**
 * @author VAMPETA
 * @brief FUNCAO PRINCIPAL Q GERENCIA AS SECOES DO APP (HOME PERFIL FAVORITOS E ETC)
*/
export default function App() {

	useEffect(() => {
		NavigationBar.setButtonStyleAsync("light");
		NavigationBar.setVisibilityAsync("immersive");
	}, []);

	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
			{/* <NavigationContainer theme={MyTheme} ref={navigationRef}> */}
			<NavigationContainer theme={MyTheme} >
				<ImageBackground source={require("./assets/img/background.png")} style={styles.backgorund} >
					<Tab.Navigator screenOptions={{ headerShown: false,  tabBarStyle: { backgroundColor: "transparent", elevation: 0 } }} >
						<Tab.Screen name="Wellcome" component={Wellcome} options={{ tabBarStyle: { display: "none" }, tabBarButton: () => null }} />
						<Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="home" color={color} size={size} />) }} />
					</Tab.Navigator>
				</ImageBackground>
			</NavigationContainer>
		</>
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