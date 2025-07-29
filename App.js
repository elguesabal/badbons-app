// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import { useEffect, useState } from "react";
// import * as NavigationBar from "expo-navigation-bar";
// import { enableScreens } from "react-native-screens";
// import { StatusBar, ImageBackground } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";

// import Wellcome from "./src/screens/wellcome/Wellcome.js";
// import Profile from "./src/screens/profile/Profile.js"
// import Training from "./src/screens/training/Training.js";
// import Home from "./src/screens/home/Home.js";
// import Tournament from "./src/screens/tournament/Tournament.js";
// import Challenge from "./src/screens/challenge/Challenge.js";

// import styles from "./src/styles/styles.js";

// enableScreens();
// const Tab = createBottomTabNavigator();

// function Sections() {
// 	return (
// 		<Tab.Navigator screenOptions={{ headerShown: false,  tabBarStyle: { backgroundColor: "transparent", elevation: 0 } }} >
// 			<Tab.Screen name="Perfil" component={Profile} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="person" color={color} size={size} />) }} />
// 			<Tab.Screen name="Treino" component={Training} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="fitness-center" color={color} size={size} />) }} />
// 			<Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="home" color={color} size={size} />) }} />
// 			<Tab.Screen name="Torneio" component={Tournament} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="emoji-events" color={color} size={size} />) }} />
// 			<Tab.Screen name="Desafio" component={Challenge} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="handshake" color={color} size={size} />) }} />
// 		</Tab.Navigator>
// 	);
// }

// /**
//  * @author VAMPETA
//  * @brief FUNCAO PRINCIPAL QUE GERENCIA AS SECOES DO APP (HOME PERFIL FAVORITOS E ETC)
// */
// export default function App() {
// 	const [isLogin, setIsLogin] = useState(false);

// 	useEffect(() => {
// 		NavigationBar.setButtonStyleAsync("light");
// 		NavigationBar.setVisibilityAsync("immersive");
// 	}, []);

// 	return (
// 		<NavigationContainer theme={MyTheme} >
// 			<ImageBackground source={require("./assets/img/background.png")} style={styles.backgorund} >
// 				{(isLogin) ? <Sections/> : <Wellcome/>}
// 			</ImageBackground>
// 		</NavigationContainer>
// 	);
// }

// const MyTheme = {
// 	...DefaultTheme,
// 	colors: {
// 		...DefaultTheme.colors,
// 		background: "transparent",
// 		card: "transparent",
// 		text: "white",
// 		border: "transparent",
// 		notification: "transparent",
// 		primary: "white",
// 	}
// };











	// return (
	// 	<>
	// 		<StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
	// 		<NavigationContainer theme={MyTheme} >
	// 			<ImageBackground source={require("./assets/img/background.png")} style={styles.backgorund} >
	// 				<Tab.Navigator screenOptions={{ headerShown: false,  tabBarStyle: { backgroundColor: "transparent", elevation: 0 } }} >
	// 					{/* <Tab.Screen name="Wellcome" component={Wellcome} options={{ tabBarStyle: { display: "none" }, tabBarButton: () => null }} /> */}
	// 					<Tab.Screen name="Perfil" component={Profile} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="person" color={color} size={size} />) }} />
	// 					<Tab.Screen name="Treino" component={Training} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="fitness-center" color={color} size={size} />) }} />
	// 					<Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="home" color={color} size={size} />) }} />
	// 					<Tab.Screen name="Torneio" component={Tournament} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="emoji-events" color={color} size={size} />) }} />
	// 					<Tab.Screen name="Desafio" component={Challenge} options={{ tabBarIcon: ({ color, size }) => (<MaterialIcons name="handshake" color={color} size={size} />) }} />
	// 				</Tab.Navigator>
	// 			</ImageBackground>
	// 		</NavigationContainer>
	// 	</>
	// );











import { LoginProvider } from "./src/app/isLogin.js";
import { MainApp } from "./src/app/app.js";


export default function App() {
  return (
    <LoginProvider>
      <MainApp />
    </LoginProvider>
  );
}