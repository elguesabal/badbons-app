import axios from "axios";
import * as SecureStore from "expo-secure-store";

import { logout } from "../logout.js";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief 
 * @param day
 * @param setPresenceList
 * @param setError FUNCAO QUE MUDA O STATUS DE ERROR
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
export async function getPresenceList(day, setPresenceList, setError, setIsLogin) {
	try {
		const res = await axios.get(`${API_URL}/presence-list`, {
			headers: {
				Authorization: `Bearer ${await SecureStore.getItemAsync("token")}`
			},
			params: { day: day }
		});
		if (res.status === 200) {
			setPresenceList(res.data);
		} else {
			setError({ message: `Status ${res.status}` });
		}
	} catch (error) {
		if (error.message === "Network Error") {
			setError({ icon: "wifi-off", message: "Sem conexão com a internet" });
		} else if (error.response && error.response.status === 401) {
			logout(setIsLogin);
		} else {
			setError({ message: error.message });
		}
	} finally {

	}
}