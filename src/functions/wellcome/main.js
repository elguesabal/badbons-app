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
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
*/
async function login(navigation, setLoad) {
	const login = await SecureStore.getItemAsync("login");
	const password = await SecureStore.getItemAsync("password");

	if (!login || !password) {
		setLoad(false);
		return ;
	}
	try {
		const res = await axios.post(`${API_URL}/login`, { login: login, password: password });
		if (res.status === 200) {
			navigation.reset({
				index: 0,
				routes: [
					{ name: "Home" }
				]
			});
		}
	} catch (error) {

	} finally {
		setLoad(false);
	}
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE GERENCIA ping E login
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
 * @param setError FUNCAO QUE MUDA O STATUS DE ERROR
*/
export async function apiConnection(navigation, setLoad, setError) {
SecureStore.deleteItemAsync("login");
SecureStore.deleteItemAsync("password");

	const isOnline = await ping(setError);

	if (!isOnline) return ;
	await login(navigation, setLoad);
}



								// PROXIMA COISA PRA FAZER

// 			navigation.reset({
// 				index: 0,
// 				routes: [
// 					{ name: "Home" }
// 				]
// 			});

// nesse exemplo acima estou dentro de uma Stack.screen e quero fazer o reset indo para uma Tab.screen chamado "Home" porem ao usar o botao de voltar do android ele ainda mostra ter algum historico. eu estou fazendo algo de errado?