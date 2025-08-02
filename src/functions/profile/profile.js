import * as SecureStore from "expo-secure-store";

/**
 * @author VAMPETA
 * @brief DESLOGA O USUARIO DO APP
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
export async function logout(setIsLogin) {
	await SecureStore.deleteItemAsync("token");
	setIsLogin(false);
}