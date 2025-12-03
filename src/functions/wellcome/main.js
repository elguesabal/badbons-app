import * as SecureStore from "expo-secure-store";
import Constants from "expo-constants";

import { logout } from "../logout.js";

import api from "../../config_axios.js";

/**
 * @author VAMPETA
 * @brief FAZ UMA CONSULTA DE PING PARA A API PARA VER SE O SERVIDOR ESTA ACESSIVEL E VERIFICA SE O APP E COMPATIVEL COM A API
*/
export async function ping() {
	const res = await api({
		method: "GET",
		url: "/ping",
		params: {
			version: Constants.expoConfig?.version ?? ""
		}
	});

	if (res.status !== 204) throw (res);
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE VERIFICA SE EXISTE UM LOGIN E SENHA SALVO E LOGA AUTOMATICAMENTE
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
async function login(setIsLogin) {
	const res = await api({
		method: "POST",
		url: "/auth/login-token",
		headers: {
			Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}`
		}
	});

	if (res.status !== 204) throw (res);
	setIsLogin(true);
}


/**
 * @author VAMPETA
 * @brief FUNCAO QUE GERENCIA ping E login
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
 * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
 * @param setError FUNCAO QUE MUDA O STATUS DE ERROR
 * @param openModal FUNCAO QUE ABRE O MODAL
*/
export async function apiConnection(setIsLogin, setLoad, setError, openModal) {
	try {
		setLoad(true);
		await ping();
		await login(setIsLogin);
	} catch(error) {
		if (error.status === 0) {
			openModal({ icon: "wifi-off", text: "Sem conexão com o servidor.\nTentar novamente?", button: "Recarregar", handleButton: (closeModal) => { closeModal(); apiConnection(setIsLogin, setLoad, setError, openModal); }, exit: () => null });
			setError({ icon: "wifi-off", message: "Sem conexão com o servidor" });
			return ;
		}
		if (error.status === 426) return (setError({ icon: "update", message: "Seu app está desatualizado", button: "Atualizar" }));
		if (error.status === 401) return (logout(setIsLogin));
		setError({ message: `${error.data}\nStatus: ${error.status}` });
	} finally {
		setLoad(false);
	}
}