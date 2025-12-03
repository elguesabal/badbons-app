import * as SecureStore from "expo-secure-store";

import { logout } from "../logout.js";

import api from "../../config_axios.js";

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
	const res = await api({
		method: "GET",
		url: "/presence-list",
		headers: {
			Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}`
		},
		params: {
			date: date
		}
	});

	if (res.status === 200) {
		setPresenceList(res.data);
		return ;
	}
	if (res.status === 0) return (openModal({ icon: "wifi-off", text: "Sem conexão com o servidor.\nTentar novamente?", yes: (closeModal) => { closeModal(); getPresenceList(date, setPresenceList, setIsLogin, openModal, closeSheet); }, no: (closeModal) => { closeModal(); closeSheet(); }, exit: (closeModal) => { closeModal(); closeSheet(); } }));
	if (res.status === 401) return (closeSheet(), logout(setIsLogin));
	if (res.status !== 200) return (openModal({ icon: "error-outline", status: res.status, text: res.data, handleButton: (closeModal) => { closeSheet(); closeModal(); } }));
}