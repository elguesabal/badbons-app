import * as SecureStore from "expo-secure-store";
import axios from "axios";

import { logout } from "../logout.js";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief FAZ A REQUISICAO DE HISTORICO DE NOTIFICACOES
 * @param setEvents FUNCAO QUE SALVARA QUE VAI ARMAZENAR O HISTORICO DE NOTIFICAÇOES
 * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
 * @param openModal FUNCAO QUE ABRE O MODAL
*/
export async function requestNotifications(setListNotifications, setLoad, setIsLogin, openModal) {
	try {
		setLoad(true);
		const res = await axios.get(`${API_URL}/notifications`, {
			headers: {
				Authorization: `Bearer ${await SecureStore.getItemAsync("token")}`
			}
		});
		if (res.status === 200) {
			setListNotifications(res.data);
		} else {
			throw (new Error(res));
		}
	} catch (error) {
		if (error.message === "Network Error") {
			openModal({ icon: "storage", text: "Não foi possivel consultar o servidor.\nTentar novamente?", yes: (closeModal) => { closeModal(); requestNotifications(setListNotifications, setLoad, setIsLogin, openModal); }, no: (closeModal) => closeModal() });
		} else if (error.response && error.response.status === 401) {
			logout(setIsLogin);
		} else {
			openModal({ text: error.message });
		}
	} finally {
		setLoad(false);
	}
}