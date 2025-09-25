import axios from "axios";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief VALIDA O LOGIN
 * @param login LOGIN DO USUARIO
*/
function validationLogin(login) {
	if (!login || login.trim() === "") throw (Object.assign(new Error("Informe o login!"), { icon: "person", button: "Ok" }));
}

/**
 * @author VAMPETA
 * @brief VALIDA A SENHA
 * @param password SENHA DO USUARIO
*/
function validationPassword(password) {
	if (!password) throw (Object.assign(new Error("Informe a senha!"), { icon: "password", button: "Ok" }));
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE CONTROLA O HEADER, TELA DE LOAD E ERRO FAZENDO REQUISICAO NA API, ALEM DE SALVAR OS DADOS CASO O USUARIO EXISTA
 * @param login LOGIN DO USUARIO
 * @param password SENHA DO USUARIO
 * @param setIsLogin FUNCAO QUE CONTROLA SE O USUARIO ESTA LOGADO OU NAO
*/
async function requestLogin(login, password) {
	try {
		const res = await axios.post(`${API_URL}/auth/login`, { email: login, password: password });
		if (res.status !== 200) throw (new Error(`${res.status}\n${res.data}`));
		await SecureStore.setItemAsync("accessToken", res.data.accesstoken);
		await SecureStore.setItemAsync("refreshToken", res.data.RefreshToken);
	} catch (error) {
		if (error.response && error.response.status === 401) throw (Object.assign(new Error("Login ou senha errada!"), { icon: "person-off", button: "Ok" }));
		throw (Object.assign(new Error(error.message), { icon: "error-outline", button: "Ok" }));
	}
}

/**
 * @author VAMPETA
 * @brief FAZ A REQUISICAO PEDINDO AS CREDENCIAIS DO USUARIO
*/
async function requestCredentials() {
	try {
		const res = await axios.get(`${API_URL}/auth/credentials`, { headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}` } });
		if (res.status !== 200) throw (new Error(`${res.status}\n${res.data}`));
		try {
			const infoDoc = await FileSystem.downloadAsync(res.data.photo, `${FileSystem.documentDirectory}user.${res.data.photo.split(".").pop().toLowerCase()}`, { headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}` }});
			if (infoDoc.status !== 200) await FileSystem.deleteAsync(infoDoc.uri, { idempotent: true });
		} catch (error) {

		}
		await AsyncStorage.setItem("name", res.data.name);
		await AsyncStorage.setItem("email", res.data.email);
		await SecureStore.setItemAsync("cpf", res.data.cpf);
		await SecureStore.setItemAsync("date", res.data.date);
		await SecureStore.setItemAsync("phone", res.data.phone);
		// await AsyncStorage.setItem("units", JSON.stringify(res.data.units));
		// await AsyncStorage.setItem("times", JSON.stringify(res.data.times));
	} catch (error) {
		throw (Object.assign(new Error(error.message), { icon: "error-outline", button: "Ok" }));
	}
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE CONTROLA O HEADER, TELA DE LOAD E ERRO FAZENDO REQUISICAO NA API
 * @param login LOGIN REVIDO PELO INPUT
 * @param password SENHA RECEBIDO NO INPUT
 * @param setIsLogin FUNCAO QUE CONTROLA SE O USUARIO ESTA LOGADO OU NAO
*/
export async function hundleLogin(login, password, setIsLogin) {
	try {
		validationLogin(login);
		validationPassword(password);
		await requestLogin(login, password);
		await requestCredentials(); // AINDA NAO EXISTE NA API OFICIAL
		// await requestTraining(); // DEVO ATUALIZAR OS DIAS DE TREINO EM TODO LOGIN?
		setIsLogin(true);
	} catch (error) {
		throw (error);
	}
}