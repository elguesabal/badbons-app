import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import WellCome from "./src/screens/wellCome/WellCome.js";
import Home from "./src/screens/home/Home.js";

import { ImageBackground } from "react-native";
import styles from "./src/styles/styles.js";

const Tab = createBottomTabNavigator();

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

/**
 * @author VAMPETA
 * @brief FUNCAO PRINCIPAL Q GERENCIA AS SECOES DO APP (HOME PERFIL FAVORITOS E ETC)
*/
export default function App() {
	return (
		<NavigationContainer theme={MyTheme}>
			<ImageBackground source={require("./assets/img/Design sem nome (3).png")} style={styles.backgorund} >
				<Tab.Navigator screenOptions={{ headerShown: false,  tabBarStyle: { backgroundColor: "transparent", elevation: 0 } }} >
					<Tab.Screen name="WellCome" component={WellCome} options={{ tabBarStyle: { display: "none" }, tabBarButton: () => null }} />
					<Tab.Screen name="Home" component={Home} />
				</Tab.Navigator>
			</ImageBackground>
		</NavigationContainer>
	);
}