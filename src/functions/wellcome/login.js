import axios from "axios";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief FUNCAO QUE FAZ A VALIDACAO DOS CAMPOS LOGIN E SENHA
 * @login LOGIN REVIDO PELO INPUT
 * @password SENHA RECEBIDO NO INPUT
*/
function validation(login, password) {
	if (!login || !password) {
		const err = new Error("Preencha todos os campos!");
		err.icon = "edit-document";
		err.button = "Ok";
		throw (err);
	}
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE CONTROLA O HEADER, TELA DE LOAD E ERRO FAZENDO REQUISICAO NA API, ALEM DE SALVAR OS DADOS CASO O USUARIO EXISTA
 * @param login LOGIN DO USUARIO
 * @param password SENHA DO USUARIO
 * @param setIsLogin FUNCAO QUE CONTROLA SE O USUARIO ESTA LOGADO OU NAO
*/
async function requestLogin(login, password, setIsLogin) {
	try {
		const res = await axios.post(`${API_URL}/login`, { login: login, password: password });
		if (res.status === 200) {
			await SecureStore.setItemAsync("token", res.data.token);
			try {
				const infoDoc = await FileSystem.downloadAsync(res.data.photo, `${FileSystem.documentDirectory}user.${res.data.photo.split(".").pop().toLowerCase()}`, { headers: { Authorization: `Bearer ${res.data.token}` }});
				if (infoDoc.status !== 200) await FileSystem.deleteAsync(infoDoc.uri, { idempotent: true });
			} catch (error) {

			}
			await AsyncStorage.setItem("name", res.data.name);
			await AsyncStorage.setItem("email", res.data.email);
			await SecureStore.setItemAsync("cpf", res.data.cpf);
			await SecureStore.setItemAsync("date", res.data.date);
			await SecureStore.setItemAsync("phone", res.data.phone);
			await AsyncStorage.setItem("units", JSON.stringify(res.data.units));
			await AsyncStorage.setItem("times", JSON.stringify(res.data.times));
			setIsLogin(true);
		} else {
			throw (new Error(`Status ${res.status}`));
		}
	} catch (error) {
		if (error.response && error.response.status === 401) {
			const err = new Error("Login ou senha errada!");
			err.icon = "person-off";
			err.button = "Ok";
			throw (err);
		} else {
			const err = new Error(error.message);
			err.status = error.status;
			throw (err);
		}
	}
}
// async function requestLogin(login, password, setIsLogin) {
// 	try {
// 		const res = await axios.post(`${API_URL}/auth/login`, { email: login, password: password });
// 		if (res.status === 200) {
// 			await SecureStore.setItemAsync("token", res.data.accesstoken);
// 			try {
// 				const infoDoc = await FileSystem.downloadAsync(res.data.user.foto, `${FileSystem.documentDirectory}user.${res.data.user.foto.split(".").pop().toLowerCase()}`, { headers: { Authorization: `Bearer ${res.data.accesstoken}` }});
// 				if (infoDoc.status !== 200) await FileSystem.deleteAsync(infoDoc.uri, { idempotent: true });
// 			} catch (error) {

// 			}
// 			await AsyncStorage.setItem("name", res.data.user.nome);
// 			await AsyncStorage.setItem("email", res.data.user.email);
// 			// await SecureStore.setItemAsync("cpf", res.data.user.cpf); // undefined
// 			// await SecureStore.setItemAsync("date", res.data.user.dataNascimento); // undefined
// 			await SecureStore.setItemAsync("phone", res.data.user.telefone);
// 			// await AsyncStorage.setItem("units", JSON.stringify(res.data.user.units));
// 			// await AsyncStorage.setItem("times", JSON.stringify(res.data.user.times));
// 			setIsLogin(true);
// 		} else {
// 			throw (new Error(`Status ${res.status}`));
// 		}
// 	} catch (error) {
// 		if (error.response && error.response.status === 401) {
// 			const err = new Error("Login ou senha errada!");
// 			err.icon = "person-off";
// 			err.button = "Ok";
// 			throw (err);
// 		} else {
// 			const err = new Error(error.message);
// 			err.status = error.status;
// 			throw (err);
// 		}
// 	}
// }

/**
 * @author VAMPETA
 * @brief FUNCAO QUE CONTROLA O HEADER, TELA DE LOAD E ERRO FAZENDO REQUISICAO NA API
 * @param login LOGIN REVIDO PELO INPUT
 * @param password SENHA RECEBIDO NO INPUT
 * @param setIsLogin FUNCAO QUE CONTROLA SE O USUARIO ESTA LOGADO OU NAO
*/
export async function hundleLogin(login, password, setIsLogin) {
	try {
		validation(login, password);
		await requestLogin(login, password, setIsLogin);
	} catch (error) {
		throw (error);
	}
}