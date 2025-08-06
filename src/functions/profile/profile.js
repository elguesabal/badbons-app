import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * @author VAMPETA
 * @brief CONSULTA AS INFORMACOES DO CLIENTES SALVAS
 * @param setCredentials DEFINE O VALOR DA VARIAVEL credentials
*/
export async function getCredentials(setCredentials) {
	setCredentials({
		photo: await AsyncStorage.getItem("photo"),
		name: await AsyncStorage.getItem("name"),
		email: await AsyncStorage.getItem("email"),
		cpf: await SecureStore.getItemAsync("cpf"),
		date: await SecureStore.getItemAsync("date"),
		phone: await SecureStore.getItemAsync("phone"),
		units: JSON.parse(await AsyncStorage.getItem("units"))
	});
}

/**
 * @author VAMPETA
 * @brief DESLOGA O USUARIO DO APP
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
export async function logout(setIsLogin) {
	await SecureStore.deleteItemAsync("token");
	await SecureStore.deleteItemAsync("token");
	await AsyncStorage.removeItem("photo");
	await AsyncStorage.removeItem("name");
	await AsyncStorage.removeItem("email");
	await SecureStore.deleteItemAsync("cpf");
	await SecureStore.deleteItemAsync("date");
	await SecureStore.deleteItemAsync("phone");
	await AsyncStorage.removeItem("units");
	await AsyncStorage.removeItem("times");
	setIsLogin(false);
}