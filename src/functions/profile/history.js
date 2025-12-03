import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { logout } from "../logout.js";

import api from "../../config_axios.js";

/**
 * @author VAMPETA
 * @brief FAZ A REQUISICAO DE HISTORICO DE PARTIDAS PARA A API E SALVA O ULTIMO JOGO NA MEMORIA DO CELULAR
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
 * @param openModal FUNCAO QUE ABRE O MODAL
 * @param scroll INFORMACOES DA PAGINA ATUAL (CONTEM DADOS EXIBIDOS EM TELA E INFORMACOES DE PAGINACAO COMO ESTADO DE LOAD)
 * @param setScroll FUNCAO QUE SALVA ALTERACOES NAS INFORMACOES DA PAGINA ATUAL
*/
export async function requestGameHistory(navigation, setLoad, setIsLogin, openModal, scroll, setScroll) {
	const { events, loadingMore, hasMore, page } = scroll;

	if (loadingMore || !hasMore) return ;
	(page === 1) ? setLoad(true) : setScroll({ loadingMore: true });
	const res = await api({
		method: "GET",
		url: "/game-history",
		headers: {
			Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}`
		},
		params: {
			page: page
		}
	});

	if (res.status === 200) {
		if (!res.data.pagination.nextPage) setScroll({ hasMore: false });
		(page === 1) ? await AsyncStorage.setItem("lastGame", (res.data.data.length) ? JSON.stringify(res.data.data[0].games[0]) : "") : null;
		(page === 1) ? setScroll({ events: res.data.data  }) : setScroll({ events: [...events, ...res.data.data] });
		setScroll({ page: page + 1 });
	}
	if (res.status === 0) openModal({ icon: "wifi-off", text: "Sem conexão com o servidor.\nTentar novamente?", yes: (closeModal) => { closeModal(); requestGameHistory(navigation, setLoad, setIsLogin, openModal, scroll, setScroll); }, no: (closeModal) => { closeModal(); navigation.goBack(); }, exit: (closeModal) => { closeModal(); navigation.goBack(); } });
	if (res.status === 401) logout(setIsLogin);
	if (![0, 200, 401].includes(res.status)) openModal({ icon: "error-outline", status: res.status, text: res.data });
	(page === 1) ? setLoad(false) : setScroll({ loadingMore: false });
}