import { Alert } from "react-native";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief FUNCAO QUE FAZ A VALIDACAO DOS CAMPOS LOGIN E SENHA
 * @login LOGIN REVIDO PELO INPUT
 * @password SENHA RECEBIDO NO INPUT
*/
function validation(login, password) {
	if (!login || !password) {
		Alert.alert("Atenção", "Preencha todos os campos!");
		return (true);
	}
	return (false);
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE CONTROLA O HEADER, TELA DE LOAD E ERRO FAZENDO REQUISICAO NA API, ALEM DE SALVAR OS DADOS CASO O USUARIO EXISTA
 * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
 * @param setError FUNCAO QUE MUDA O STATUS DE ERROR
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
 * @param setError FUNCAO QUE MUDA O STATUS DE ERROR
 * @param setIsLogin FUNCAO Q CONTROLA SE O USUARIO ESTA LOGADO OU NAO
*/
async function requestLogin(login, password, navigation, setLoad, setError, setIsLogin) {
	try {
		const res = await axios.post(`${API_URL}/login`, { login: login, password: password });
		if (res.status === 200) {
			await SecureStore.setItemAsync("login", login);
			await SecureStore.setItemAsync("password", password);
			setIsLogin(true);
		}
	} catch (error) {
		if (error.response && error.response.status === 401) {
			Alert.alert("Login", "Login ou senha errada!");
		} else {
			setError(error.message);
		}
	} finally {
		setLoad(false);
		navigation.setOptions({ headerShown: true });
	}
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE CONTROLA O HEADER, TELA DE LOAD E ERRO FAZENDO REQUISICAO NA API
 * @param login LOGIN REVIDO PELO INPUT
 * @param password SENHA RECEBIDO NO INPUT
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
 * @param setError FUNCAO QUE MUDA O STATUS DE ERROR
 * @param setIsLogin FUNCAO Q CONTROLA SE O USUARIO ESTA LOGADO OU NAO
*/
export async function hundleLogin(login, password, navigation, setLoad, setError, setIsLogin) {
	if (validation(login, password)) return ;
	navigation.setOptions({ headerShown: false });
	setLoad(true);
	setError("");
	requestLogin(login, password, navigation, setLoad, setError, setIsLogin);
}