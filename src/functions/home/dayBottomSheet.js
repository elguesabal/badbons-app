import axios from "axios";
import * as SecureStore from "expo-secure-store";

import { logout } from "../logout.js";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief FAZ A REQUISICAO DA LISTA DE ALUNOS CONFIRMADOS PARA O TREINO
 * @param date DATA DO TREINO
 * @param setPresenceList FUNCAO QUE SALVA A LISTA DE CONFIRMADOS PARA O TREINO
 * @param setError FUNCAO QUE MUDA O STATUS DE ERROR
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
 * @param closeSheet FUNCAO QUE FECHA O BottomSheet
*/
export async function getPresenceList(date, setPresenceList, setError, setIsLogin, closeSheet) {
	try {
		const res = await axios.get(`${API_URL}/presence-list?date=${date}`, { headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}` } });
		// if (res.status !== 200) throw (new Error(`${res.status}\n${res.data}`)); // PADRONIZAR AKI
																console.log("veio aki")
		if (res.status === 200) {
			setPresenceList(res.data);
		} else {
			setError({ message: `Status ${res.status}` });
		}
	} catch (error) {
		if (error.message === "Network Error") {
			setError({ icon: "wifi-off", message: "Sem conexão com a internet" });
		} else if (error.response && error.response.status === 401) {
			closeSheet();
			logout(setIsLogin);
		} else {
			setError({ message: error.message });
		}
	}
}