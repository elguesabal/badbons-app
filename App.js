import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginRegister from "./src/components/WellCome.js";
import Home from "./src/components/Home.js";

import styles from "./src/styles/styles.js";
// import header from "./src/styles/header.js"; // DESATIVADO NO MOMENTO

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
	return (
		// <ImageBackground style={{ flex: 1 }} source={require("./assets/img/Design sem nome (3).png")} >
		 	<NavigationContainer>
				<Tab.Navigator
					screenOptions={{
						headerShown: true,
						// tabBarStyle: { display: "none" },
						tabBarStyle: { borderTopWidth: 0, elevation: 0 },
						// sceneContainerStyle: { backgroundColor: "pink" }
					}}
				>
					<Tab.Screen name="WellCome" component={LoginRegister} options={{ headerShown: false, tabBarStyle: { display: "none" } }} />
					<Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarStyle: { display: "none" } }} />
					<Tab.Screen name="Teste" component={Teste1} options={{ headerShown: false }} />
				</Tab.Navigator>
			</NavigationContainer>
		// </ImageBackground>
	);
}

function Teste1() {
	return (
		// <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
		// 	<Text>aaaaaaa</Text>
		// </View>

		<Stack.Navigator>
			<Stack.Screen
				name="Teste2"
				component={Teste2}
				options={{ title: "teste2", headerStyle: { backgroundColor: "red" } }}
			/>
			<Stack.Screen
				name="Teste3"
				component={Teste3}
				options={{ title: "teste3", headerStyle: { backgroundColor: "red" } }}
			/>
		</Stack.Navigator>
	);
}

function Teste2({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>aaaaa</Text>
			<Button title="Ir para Teste2" onPress={() => navigation.navigate("Teste3")} />
		</View>
	);
}

function Teste3({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>bbbbb</Text>
			<Button title="Ir para Teste3" onPress={() => navigation.navigate("Teste2")} />
		</View>
	);
}