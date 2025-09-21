import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";

import { compatibleProfilePictures } from "../compatibleImages.js";

/**
 * @author VAMPETA
 * @brief DESLOGA O USUARIO DO APP
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
export async function logout(setIsLogin) {
	await SecureStore.deleteItemAsync("accessToken");
	await SecureStore.deleteItemAsync("refreshToken");
	compatibleProfilePictures.map(async (format) => await FileSystem.deleteAsync(`${FileSystem.documentDirectory}user.${format}`, { idempotent: true }));
	await AsyncStorage.removeItem("name");
	await AsyncStorage.removeItem("email");
	await SecureStore.deleteItemAsync("cpf");
	await SecureStore.deleteItemAsync("date");
	await SecureStore.deleteItemAsync("phone");
	// await AsyncStorage.removeItem("units");
	// await AsyncStorage.removeItem("times");
	await AsyncStorage.removeItem("exercises");
	setIsLogin(false);
}