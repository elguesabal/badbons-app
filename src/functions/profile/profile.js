import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";

import { compatibleProfilePictures } from "../../compatibleImages.js";

/**
 * @author VAMPETA
 * @brief CONSULTA AS INFORMACOES DO CLIENTES SALVAS
 * @param setCredentials DEFINE O VALOR DA VARIAVEL credentials
*/
export async function getCredentials(setCredentials) {
	let photo;

	for (let format of compatibleProfilePictures) {
		photo = await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}user.${format}`);
		if (photo.exists) break ;
	}
	setCredentials({
		email: await AsyncStorage.getItem("email"),
		cpf: await SecureStore.getItemAsync("cpf"),
		date: await SecureStore.getItemAsync("date"),
		phone: await SecureStore.getItemAsync("phone")
	});
}