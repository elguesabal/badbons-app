import axios from "axios";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { logout } from "../logout.js";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief FAZ UMA REQUISICAO ENVIANDO A INFORMACAO QUE O ALUNO CONFIRMOU PRESENCA OU DESMACOU A PRESENCA NO TREINO
 * @param newPresence true OU false INDICANDO SE O ALUNO VAI AO TREINO OU NAO
 * @param setPresenceList FUNCAO QUE CONTROLA O O ESTADO DE presenceList
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
 * @param closeSheet FUNCAO QUE FECHA O BottomSheet
*/
export async function confirmPresence(newPresence, setPresenceList, setIsLogin, closeSheet) {
	try {
		const res = await axios.post(`${API_URL}/presence-student`, { presence: newPresence }, { headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("token")}` }});
		if (res.status === 200) {
			const name = await AsyncStorage.getItem("name");
			setPresenceList((prev) => ({ ...prev, confirmedPresence: newPresence, confirmedStudents: (newPresence) ? [...prev.confirmedStudents, name] : prev.confirmedStudents.filter((student) => student !== name) }));
		} else {
// console.log(`Status ${res.status}`)
		}
	} catch (error) {
		if (error.message === "Network Error") {
// console.log("Sem conexão com a internet")		// NAO SEI COMO INFORMAR O CLIENTE DESSE ERRO
		} else if (error.response && error.response.status === 401) {
			closeSheet();
			logout(setIsLogin);
		} else {
// console.log(error.message)		// NAO SEI COMO INFORMAR O CLIENTE DESSE ERRO
		}
	}
}