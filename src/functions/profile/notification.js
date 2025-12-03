import * as SecureStore from "expo-secure-store";

import { logout } from "../logout.js";

import api from "../../config_axios.js";

/**
 * @author VAMPETA
 * @brief BUSCA DETALHES DE UMA NOTIFICACAO ESPECIFICA
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param id IDENTIFICADOR UNICO DA NOTIFICACAO
 * @param setData FUNCAO QUE SALVA OS DADOS DA NOTIFICACAO
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
 * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
 * @param openModal FUNCAO QUE ABRE O MODAL
*/
export async function requestNotification(navigation, id, setData, setIsLogin, setLoad, openModal) {
	setLoad(true);
	const res = await api({
		method: "GET",
		url: "/notification",
		headers: {
			Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}`
		},
		params: {
			id: id
		}
	});

	if (res.status === 200) {
		setData(res.data);
	}
	if (res.status === 0) openModal({ icon: "wifi-off", text: "Sem conexão com o servidor.\nTentar novamente?", yes: (closeModal) => { closeModal(); requestNotification(navigation, id, setData, setIsLogin, setLoad, openModal); }, no: (closeModal) => { closeModal(); navigation.goBack(); }, exit: (closeModal) => { closeModal(); navigation.goBack(); } });
	if (res.status === 401) logout(setIsLogin);
	if (![0, 200, 401].includes(res.status)) openModal({ icon: "error-outline", status: res.status, text: res.data, button: "Sair", handleButton: (closeModal) => { closeModal(); navigation.goBack(); }, exit: (closeModal) => { closeModal(); navigation.goBack(); } });
	setLoad(false);
}