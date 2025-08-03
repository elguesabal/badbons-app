import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * @author VAMPETA
 * @brief CONSULTA AS INFORMACOES DO CLIENTES SALVAS
 * @param setCredentials DEFINE O VALOR DA VARIAVEL credentials
*/
export async function getCredentials(setCredentials) {
	const photo = await AsyncStorage.getItem("photo");
	const name = await AsyncStorage.getItem("name");
	const email = await AsyncStorage.getItem("email");
	const cpf = await SecureStore.getItemAsync("cpf");
	const date = await SecureStore.getItemAsync("date");
	const phone = await SecureStore.getItemAsync("phone");

	setCredentials({
		photo: photo,
		name: name,
		email: email,
		cpf: cpf,
		date: date,
		phone: phone
	});
}

/**
 * @author VAMPETA
 * @brief DESLOGA O USUARIO DO APP
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
export async function logout(setIsLogin) {
	await SecureStore.deleteItemAsync("token");
	setIsLogin(false);
}