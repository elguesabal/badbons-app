import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import WellCome from "./src/screens/wellCome/WellCome.js";
import Home from "./src/screens/home/Home.js";

const Tab = createBottomTabNavigator();

/**
 * @author VAMPETA
 * @brief FUNCAO PRINCIPAL Q GERENCIA AS SECOES DO APP (HOME PERFIL FAVORITOS E ETC)
*/
export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={{ headerShown: false }} >
				<Tab.Screen name="WellCome" component={WellCome} options={{ tabBarStyle: { display: "none" }, tabBarButton: () => null }} />
				<Tab.Screen name="Home" component={Home} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}