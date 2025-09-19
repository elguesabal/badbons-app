import * as SecureStore from "expo-secure-store";
import axios from "axios";

import { logout } from "../logout.js";

import API_URL from "../../Api.js";

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
	try {
		setLoad(true);
		const res = await axios.get(`${API_URL}/notification?id=${id}`, { headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}` }
		});
		if (res.status !== 200) throw (new Error(`${res.status}\n${res.data}`));
		setData(res.data);
	} catch (error) {
		if (error.message === "Network Error") {
			openModal({ icon: "wifi-off", text: "Sem conexão com o servidor.\nTentar novamente?", yes: (closeModal) => { closeModal(); requestNotification(navigation, id, setData, setIsLogin, setLoad, openModal); }, no: (closeModal) => { closeModal(); navigation.goBack(); }, exit: (closeModal) => { closeModal(); navigation.goBack(); } });
		} else if (error.response && error.response.status === 401) {
			logout(setIsLogin);
		} else {
			openModal({ icon: "error-outline", text: error.message, button: "Sair", handleButton: (closeModal) => { closeModal(); navigation.goBack(); }, exit: (closeModal) => { closeModal(); navigation.goBack(); } });
		}
	} finally {
		setLoad(false);
	}
}