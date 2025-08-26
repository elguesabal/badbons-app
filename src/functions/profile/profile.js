import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";

/**
 * @author VAMPETA
 * @brief CONSULTA AS INFORMACOES DO CLIENTES SALVAS
 * @param setCredentials DEFINE O VALOR DA VARIAVEL credentials
*/
export async function getCredentials(setCredentials) {
	const photo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + "user.jpg");
	setCredentials({
		photo: (photo.exists) ? photo.uri : null,
		name: await AsyncStorage.getItem("name"),
		email: await AsyncStorage.getItem("email"),
		cpf: await SecureStore.getItemAsync("cpf"),
		date: await SecureStore.getItemAsync("date"),
		phone: await SecureStore.getItemAsync("phone"),
		units: JSON.parse(await AsyncStorage.getItem("units") || "[]")
	});
}