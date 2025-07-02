import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WellCome from "./src/components/WellCome.js";
import Home from "./src/components/Home.js";

import styles from "./src/styles/styles.js";
import header from "./src/styles/header.js";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<View style={header.container}>
				<Image source={require("./assets/img/logo badbons.png")} style={header.logo} />
			</View>
			<Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }} >
				<Tab.Screen name="WellCome" component={WellCome} />
				<Tab.Screen name="Home" component={Home} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}