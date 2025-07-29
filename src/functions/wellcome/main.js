import axios from "axios";
import * as SecureStore from "expo-secure-store";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief FAZ UMA CONSULTA DE PING PARA A API PARA VER SE O SERVIDOR ESTA ACESSIVEL
 * @param setError FUNCAO QUE MUDA O STATUS DE ERROR
 * @return RETORNA TRUE SE A API ESTIVER ACESSIVEL E FALSE CASO NAO
*/
export async function ping(setError) {
	let ret;

	try {
		const res = await axios.get(`${API_URL}/ping`);
		if (res.status !== 200) setError("error");
		ret = true;
	} catch (error) {
		setError(error.message);
		ret = false;
	}
	return (ret);
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE VERIFICA SE EXISTE UM LOGIN E SENHA SALVO E LOGA AUTOMATICAMENTE
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
 * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
*/
async function login(setIsLogin, setLoad) {
	const login = await SecureStore.getItemAsync("login");
	const password = await SecureStore.getItemAsync("password");

	if (!login || !password) {
		setLoad(false);
		return ;
	}
	try {
		const res = await axios.post(`${API_URL}/login`, { login: login, password: password });
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
*/
export async function apiConnection(setIsLogin, setLoad, setError) {
	const isOnline = await ping(setError);

	if (!isOnline) return ;
	await login(setIsLogin, setLoad);
}