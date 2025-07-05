import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WellCome from "./src/components/WellCome.js";
import Home from "./src/components/Home.js";

import styles from "./src/styles/styles.js";
// import header from "./src/styles/header.js"; // DESATIVADO NO MOMENTO

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

export default function App() {
	return (
		// <ImageBackground source={require("./assets/img/Design sem nome (3).png")} style={{ flex: 1 }} >
		 	<NavigationContainer>
				<Tab.Navigator
					screenOptions={{
						headerShown: true,
						// tabBarStyle: { display: "none" },
						tabBarStyle: { borderTopWidth: 0, elevation: 0 },
						// sceneContainerStyle: { backgroundColor: "pink" },
					}}
				>
					<Tab.Screen name="WellCome" component={WellCome} options={{ headerShown: false, tabBarStyle: { display: "none" } }} />
					<Tab.Screen name="Home" component={Home} />
					<Tab.Screen name="Teste" component={Teste} />
				</Tab.Navigator>
			</NavigationContainer>
		// </ImageBackground>
	);
}

function Teste() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>aaaaaaa</Text>
		</View>
	);
}