import axios from "axios";
import * as SecureStore from "expo-secure-store";

import { logout } from "../logout.js";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief FAZ UMA REQUISICAO ENVIANDO A INFORMACAO QUE O ALUNO CONFIRMOU PRESENCA OU DESMACOU A PRESENCA NO TREINO
 * @param newPresence true OU false INDICANDO SE O ALUNO VAI AO TREINO OU NAO
 * @param setPresence FUNCAO QUE SALVA newPresence E MODIFICA O BOTAO SWITCH
 * @param setSpinner FUNCAO QUE CONTROLA O SPINNER
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
 * @param closeSheet FUNCAO QUE FECHA O BottomSheet
*/
export async function confirmPresence(newPresence, setPresence, setSpinner, setIsLogin, closeSheet) {
	setSpinner(true);
	try {
		const res = await axios.post(`${API_URL}/presence-student`, { presence: newPresence }, { headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("token")}` }});
		if (res.status === 200) {
			setPresence(newPresence);
		} else {
// console.log(`Status ${res.status}`)
		}
	} catch (error) {
		if (error.message === "Network Error") {
// console.log("Sem conexão com a internet")
		} else if (error.response && error.response.status === 401) {
			closeSheet();
			logout(setIsLogin);
		} else {
// console.log(error.message)
		}
	} finally {
		setSpinner(false);
	}
}