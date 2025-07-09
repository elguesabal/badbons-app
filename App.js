import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Load from "./src/screens/load/Load.js";
import Error from "./src/screens/error/Error.js";
import WellCome from "./src/screens/wellCome/WellCome.js";

import WithBackground from "./src/components/BackgroundWrapper.js";

const Tab = createBottomTabNavigator();

/**
 * @author VAMPETA
 * @brief FUNCAO PRINCIPAL Q GERENCIA AS SECOES DO APP (HOME PERFIL FAVORITOS E ETC)
*/
export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }} >
				<Tab.Screen name="Load" component={WithBackground(Load)} />
				<Tab.Screen name="Error" component={WithBackground(Error)} />
				<Tab.Screen name="WellCome" component={WellCome} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}















/**
 * @deprecated ESTE CODIGO ABAIXO FOI REORGANIZADO E LIMPO ACIMA
 * @warning ELE SERA EXCLUIDO EM VERSOES FUTURAS
*/



// // import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, ImageBackground, Image, Button } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import WellCome from "./src/screens/wellCome/WellCome.js";
// // import LoginRegister from "./src/screens/WellCome.js";
// import Home from "./src/screens/Home.js";

// // import styles from "./src/styles/styles.js";
// // import header from "./src/styles/header.js"; // DESATIVADO NO MOMENTO

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// /**
//  * @author VAMPETA
//  * @brief FUNCAO PRINCIPAL Q GERENCIA AS 
// */
// export default function App() {
// 	return (
// 		// <ImageBackground style={{ flex: 1 }} source={require("./assets/img/Design sem nome (3).png")} >
// 		// <View style={{ backgroundColor: "red" }}>
// 		 	<NavigationContainer>
// 				<Tab.Navigator
// 					screenOptions={{
// 						headerShown: true,
// 						// tabBarStyle: { display: "none" },
// 						tabBarStyle: { borderTopWidth: 0, elevation: 0 },
// 						// sceneContainerStyle: { backgroundColor: "pink" }
// 					}}
// 				>
// 					{/* <Tab.Screen name="WellCome" component={LoginRegister} options={{ headerShown: false, tabBarStyle: { display: "none" } }} /> */}
// 					<Tab.Screen name="WellCome" component={WellCome} options={{ headerShown: false, tabBarStyle: { display: "none" } }} />
// 					<Tab.Screen name="Home" component={Home} options={{ headerShown: false, }} />
// 					<Tab.Screen name="Teste" component={Teste1} options={{ headerShown: false }} />
// 				</Tab.Navigator>
// 			</NavigationContainer>
// 		// </View>
// 		// </ImageBackground>
// 	);
// }

// /**
//  * @author VAMPETA
//  * @brief APENAS TESTES
// */
// function Teste1() {
// 	return (
// 		// <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
// 		// 	<Text>aaaaaaa</Text>
// 		// </View>

// 		<Stack.Navigator>
// 			<Stack.Screen
// 				name="Teste2"
// 				component={Teste2}
// 				options={{ title: "teste2", headerStyle: { backgroundColor: "red" } }}
// 			/>
// 			<Stack.Screen
// 				name="Teste3"
// 				component={Teste3}
// 				options={{ title: "teste3", headerStyle: { backgroundColor: "red" } }}
// 			/>
// 		</Stack.Navigator>
// 	);
// }

// /**
//  * @author VAMPETA
//  * @brief APENAS TESTES
// */
// function Teste2({ navigation }) {
// 	return (
// 		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
// 			<Text>aaaaa</Text>
// 			<Button title="Ir para Teste2" onPress={() => navigation.navigate("Teste3")} />
// 		</View>
// 	);
// }

// /**
//  * @author VAMPETA
//  * @brief APENAS TESTES
// */
// function Teste3({ navigation }) {
// 	return (
// 		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
// 			<Text>bbbbb</Text>
// 			<Button title="Ir para Teste3" onPress={() => navigation.navigate("Teste2")} />
// 		</View>
// 	);
// }