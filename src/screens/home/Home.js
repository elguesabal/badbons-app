import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect } from "react";
import * as SecureStore from "expo-secure-store";

/**
 * @author VAMPETA
 * @brief TELA HOME
*/
export default function Home() {

	useEffect(() => {
		async function teste() {
			const login = await SecureStore.getItemAsync("login");
			const password = await SecureStore.getItemAsync("password");

			// console.log("teste:");
			// console.log(login);
			// console.log(password);
		}
		teste()
	}, []);

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<MaterialIcons name="home" size={70} color="white" />
			<Text style={{ color: "white" }} >HOME</Text>
		</View>
	);
}