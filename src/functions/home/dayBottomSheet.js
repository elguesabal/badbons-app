import axios from "axios";
import * as SecureStore from "expo-secure-store";

import { logout } from "../logout.js";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief FAZ A REQUISICAO DA LISTA DE ALUNOS CONFIRMADOS PARA O TREINO
 * @param date DATA DO TREINO
 * @param setPresenceList FUNCAO QUE SALVA A LISTA DE CONFIRMADOS PARA O TREINO
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
 * @param closeSheet FUNCAO QUE FECHA O BottomSheet
 * @param openModal FUNCAO QUE ABRE O MODAL
*/
export async function getPresenceList(date, setPresenceList, setIsLogin, closeSheet, openModal) {
	try {
		const res = await axios.get(`${API_URL}/presence-list?date=${date}`, { headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}` } });
		if (res.status !== 200) throw (new Error(`${res.status}\n${res.data}`));
		setPresenceList(res.data);
	} catch (error) {
		if (error.message === "Network Error") {
			openModal({ icon: "wifi-off", text: "Sem conexão com o servidor.\nTentar novamente?", yes: (closeModal) => { closeModal(); getPresenceList(date, setPresenceList, setIsLogin, openModal, closeSheet); }, no: (closeModal) => { closeModal(); closeSheet(); }, exit: (closeModal) => { closeModal(); closeSheet(); } });
		} else if (error.response && error.response.status === 401) {
			closeSheet();
			logout(setIsLogin);
		} else {
			openModal({ icon: "error-outline", text: error.message, button: "Sair", handleButton: (closeModal) => { closeModal(); closeSheet(); }, exit: (closeModal) => { closeModal(); closeSheet(); } });
		}
	}
}