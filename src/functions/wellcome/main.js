import axios from "axios";
import * as SecureStore from "expo-secure-store";
import Constants from "expo-constants";

import API_URL from "../../Api.js";

// /**
//  * @author VAMPETA
//  * @brief FAZ UMA CONSULTA DE PING PARA A API PARA VER SE O SERVIDOR ESTA ACESSIVEL
//  * @param setError FUNCAO QUE MUDA O STATUS DE ERROR
//  * @return RETORNA TRUE SE A API ESTIVER ACESSIVEL E FALSE CASO NAO
// */
// export async function ping(setError) {
// 	const version = Constants.expoConfig?.version ?? "";

// 	try {
// 		const res = await axios.get(`${API_URL}/ping`, { params: { version: version } });
// 		if (res.status != 200) {
// 			setError({ message: `Status ${res.status}` });
// 			return (false);
// 		}
// 		return (true);
// 	} catch (error) {
// 		if (error.message === "Network Error") {
// 			setError({ icon: "wifi-off", message: "Sem conexão com a internet" });
// 			return (false);
// 		}
// 		if (error.response.status === 426) {
// 			setError({ icon: "update", message: "Seu app está desatualizado", button: "Atualizar" });
// 			return (false);
// 		}
// 		setError({ message: error.message });
// 		return (false);
// 	}
// }

// /**
//  * @author VAMPETA
//  * @brief FUNCAO QUE VERIFICA SE EXISTE UM LOGIN E SENHA SALVO E LOGA AUTOMATICAMENTE
//  * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
//  * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
// */
// async function login(setIsLogin, setLoad) {
// 	const token = await SecureStore.getItemAsync("token");

// 	if (!token) {
// 		setLoad(false);
// 		return ;
// 	}
// 	try {
// 		const res = await axios.post(`${API_URL}/login-token`, { token: token });
// 		if (res.status === 200) setIsLogin(true);
// 	} catch (error) {

// 	} finally {
// 		setLoad(false);
// 	}
// }

// /**
//  * @author VAMPETA
//  * @brief FUNCAO QUE GERENCIA ping E login
//  * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
//  * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
//  * @param setError FUNCAO QUE MUDA O STATUS DE ERROR
//  * @param openModal FUNCAO QUE ABRE O MODAL
// */
// export async function apiConnection(setIsLogin, setLoad, setError, openModal) {
// 	const isOnline = await ping(setError);

// 	if (!isOnline) return ;
// 	await login(setIsLogin, setLoad);
// }



/**
 * @author VAMPETA
 * @brief FAZ UMA CONSULTA DE PING PARA A API PARA VER SE O SERVIDOR ESTA ACESSIVEL E VERIFICA SE O APP E COMPATIVEL COM A API
*/
export async function ping() {
	const version = Constants.expoConfig?.version ?? "";

	try {
		const res = await axios.get(`${API_URL}/ping`, { params: { version: version } });
		if (res.status !== 200) throw (new Error(res));
	} catch (error) {
		throw (error);
	}
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE VERIFICA SE EXISTE UM LOGIN E SENHA SALVO E LOGA AUTOMATICAMENTE
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
async function login(setIsLogin) {
	const token = await SecureStore.getItemAsync("token");

	if (!token) return ;
	try {
		const res = await axios.post(`${API_URL}/login-token`, { token: token });
		if (res.status === 200) setIsLogin(true);
	} catch (error) {
		throw (error);
	}
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
		if (error.message === "Network Error") {
			openModal({ icon: "wifi-off", text: "Sem conexão com o servidor.\nTentar novamente?", yes: (closeModal) => { closeModal(); apiConnection(setIsLogin, setLoad, setError, openModal); }, no: (closeModal) => closeModal() });
			setError({ icon: "wifi-off", message: "Sem conexão com o servidor" });
		} else if (error.response && error.response.status === 426) {
			setError({ icon: "update", message: "Seu app está desatualizado", button: "Atualizar" });
		} else {
			setError({ message: error.message });
		}
	} finally {
		setLoad(false);
	}
}