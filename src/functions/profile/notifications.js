import * as SecureStore from "expo-secure-store";

import { logout } from "../logout.js";

import api from "../../config_axios.js";

/**
 * @author VAMPETA
 * @brief FAZ A REQUISICAO DE HISTORICO DE NOTIFICACOES
 * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
 * @param openModal FUNCAO QUE ABRE O MODAL
 * @param scroll INFORMACOES DA PAGINA ATUAL (CONTEM DADOS EXIBIDOS EM TELA E INFORMACOES DE PAGINACAO COMO ESTADO DE LOAD)
 * @param setScroll FUNCAO QUE SALVA ALTERACOES NAS INFORMACOES DA PAGINA ATUAL
*/
export async function requestNotifications(setLoad, setIsLogin, openModal, scroll, setScroll) {
	const { notifications, loadingMore, hasMore, page } = scroll;

	if (loadingMore || !hasMore) return ;
	(page === 1) ? setLoad(true) : setScroll({ loadingMore: true });
	const res = await api({
		method: "GET",
		url: "/notifications",
		headers: {
			Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}`
		},
		params: {
			page: page
		}
	});

	if (res.status === 200) {
		if (!res.data.pagination.nextPage) setScroll({ hasMore: false });
		(page === 1) ? setScroll({ notifications: res.data.data }) : setScroll({ notifications: [...notifications, ...res.data.data] });
		setScroll({ page: page + 1 });
	}
	if (res.status === 0) openModal({ icon: "wifi-off", text: "Sem conexão com o servidor.\nTentar novamente?", yes: (closeModal) => { closeModal(); requestNotifications(setLoad, setIsLogin, openModal, scroll, setScroll); }, no: (closeModal) => closeModal() });
	if (res.status === 401) logout(setIsLogin);
	if (![0, 200, 401].includes(res.status)) openModal({ icon: "error-outline", status: res.status, text: res.data });
	(page === 1) ? setLoad(false) : setScroll({ loadingMore: false });
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE CONTROLA O CLICK NA NOTIFICACAO
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param listNotifications LISTA DE NOTIFICACOES
 * @param setListNotifications FUNCAO QUE MODIFICA A LISTA DE NOTIFICACOES
 * @param index INDICE DO FLATLIST
*/
export async function handleNotification(navigation, scroll, setScroll, index) {
	setScroll({ notifications: scroll.notifications.map((element, i) => i === index ? { ...element, viewed: true } : element) });
	navigation.navigate("notification", { id: scroll.notifications[index].id });
}