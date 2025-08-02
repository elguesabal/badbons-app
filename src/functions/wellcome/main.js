import axios from "axios";
import * as SecureStore from "expo-secure-store";
import Constants from "expo-constants";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief FAZ UMA CONSULTA DE PING PARA A API PARA VER SE O SERVIDOR ESTA ACESSIVEL
 * @param setError FUNCAO QUE MUDA O STATUS DE ERROR
 * @param setUpdate FUNCAO QUE MUDA O STATUS DE UPDATE
 * @return RETORNA TRUE SE A API ESTIVER ACESSIVEL E FALSE CASO NAO
*/
export async function ping(setError, setUpdate) {
	const version = Constants.expoConfig?.version ?? "";

	try {
		const res = await axios.get(`${API_URL}/ping`);
		if (res.status !== 200) {
			setError("error");
			return (false);
		}
		if (!res.data.versions.includes(version)) {
			setUpdate(true);
			return (false);
		}
		return (true);
	} catch (error) {
		setError(error.message);
		return (false);
	}
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE VERIFICA SE EXISTE UM LOGIN E SENHA SALVO E LOGA AUTOMATICAMENTE
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
 * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
*/
async function login(setIsLogin, setLoad) {
	const token = await SecureStore.getItemAsync("token");

	if (!token) {
		setLoad(false);
		return ;
	}
	try {
		const res = await axios.post(`${API_URL}/login-token`, { token: token });
		if (res.status === 200) setIsLogin(true);
	} catch (error) {

	} finally {
		setLoad(false);
	}
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE GERENCIA ping E login
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
 * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
 * @param setError FUNCAO QUE MUDA O STATUS DE ERROR
 * @param setUpdate FUNCAO QUE MUDA O STATUS DE UPDATE
*/
export async function apiConnection(setIsLogin, setLoad, setError, setUpdate) {
	const isOnline = await ping(setError, setUpdate);

	if (!isOnline) return ;
	await login(setIsLogin, setLoad);
}