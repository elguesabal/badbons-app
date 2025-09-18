import * as SecureStore from "expo-secure-store";
import axios from "axios";

import { logout } from "../logout.js";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief FAZ A REQUISICAO DE HISTORICO DE NOTIFICACOES
 * @param setListNotifications FUNCAO QUE SALVARA QUE VAI ARMAZENAR O HISTORICO DE NOTIFICAÇOES
 * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
 * @param openModal FUNCAO QUE ABRE O MODAL
 * @param loadingMore VARIAVEL QUE INDICA SE UMA REQUISICAO DE MAIS HISTORICO ESTA EM ANDAMENTO
 * @param setLoadingMore FUNCAO QUE CONTROLA O LOAD DO FLATLIST
 * @param hasMore VARIAVEL QUE INDICA SE TEM MAIS NOTIFICACOES A SEREM CARREGADAS
 * @param setHasMore FUNCAO DE CONTROLE DE hasMore
 * @param page ULTIMO CONJUTO DE NOTIFICACAO REQUERIDO
 * @param setPage FUNCAO DE CONTROL DE page
*/
export async function requestNotifications(setListNotifications, setLoad, setIsLogin, openModal, loadingMore, setLoadingMore, hasMore, setHasMore, page = 1, setPage) {
	if (loadingMore || !hasMore) return ;
	(page === 1) ? setLoad(true) : setLoadingMore(true);
	try {
		const res = await axios.get(`${API_URL}/notifications?page=${page}`, { headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}` } });
		if (res.status !== 200) throw (new Error(`${res.status}\n${res.data}`));
		if (!res.data.length) setHasMore(false);
		(page === 1) ? setListNotifications(res.data) : setListNotifications(prev => [...prev, ...res.data]);
		setPage(page + 1);
	} catch (error) {
		if (error.message === "Network Error") {
			openModal({ icon: "storage", text: "Não foi possivel consultar o servidor.\nTentar novamente?", yes: (closeModal) => { closeModal(); requestNotifications(setListNotifications, setLoad, setIsLogin, openModal, loadingMore, setLoadingMore, hasMore, setHasMore, page, setPage); }, no: (closeModal) => closeModal() });
		} else if (error.response && error.response.status === 401) {
			logout(setIsLogin);
		} else {
			openModal({ icon: "error-outline", text: error.message, button: "Ok" });
		}
	} finally {
		(page === 1) ? setLoad(false) : setLoadingMore(false);
	}
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE CONTROLA O CLICK NA NOTIFICACAO
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param listNotifications LISTA DE NOTIFICACOES
 * @param setListNotifications FUNCAO QUE MODIFICA A LISTA DE NOTIFICACOES
 * @param index INDICE DO FLATLIST
*/
export async function handleNotification(navigation, listNotifications, setListNotifications, index) {
	setListNotifications((prev) => prev.map((element, i) => i === index ? { ...element, viewed: true } : element));
	navigation.navigate("notification", { id: listNotifications[index].id });
}