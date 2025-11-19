import axios from "axios";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system/legacy";

import { getTokenNotifications, scheduleNotification } from "../notifications.js";

import API_URL from "../../Api.js";
import api from "../../config_axios.js";

/**
 * @author VAMPETA
 * @brief VALIDA O LOGIN
 * @param login LOGIN DO USUARIO
*/
function validationLogin(login) {
	if (!login || login.trim() === "") throw ({ icon: "person", text: "Informe o login!" });
}

/**
 * @author VAMPETA
 * @brief VALIDA A SENHA
 * @param password SENHA DO USUARIO
*/
function validationPassword(password) {
	if (!password) throw ({ icon: "password", text: "Informe a senha!" });
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE CONTROLA O HEADER, TELA DE LOAD E ERRO FAZENDO REQUISICAO NA API, ALEM DE SALVAR OS DADOS CASO O USUARIO EXISTA
 * @param login LOGIN DO USUARIO
 * @param password SENHA DO USUARIO
 * @param setIsLogin FUNCAO QUE CONTROLA SE O USUARIO ESTA LOGADO OU NAO
 * @param tokenNotifications TOKEN USADO PARA ENVIAR NOTIFICACAO REMOTAMENTE AO APP
*/
async function requestLogin(login, password, tokenNotifications) {
	// try {
	// 	const res = await axios.post(`${API_URL}/auth/login`, { email: login, password: password, tokenNotifications: tokenNotifications });
	// 	if (res.status !== 200 && res.status !== 207) throw (new Error(`${res.status}\n${res.data}`));
	// 	await SecureStore.setItemAsync("accessToken", res.data.accesstoken);
	// 	await SecureStore.setItemAsync("refreshToken", res.data.RefreshToken);
	// } catch (error) {
	// 	if (error.response && error.response.status === 401) throw (Object.assign(new Error("Login ou senha errada!"), { icon: "person-off" }));
	// 	throw (Object.assign(new Error(error.message), { icon: "error-outline" }));
	// }



	const res = await api({
		method: "POST",
		url: "/auth/login",
		data: {
			email: login,
			password: password,
			tokenNotifications: tokenNotifications
		}
	});

	if (res.status === 200) {	// TOKEN NOTIFICATIONS EXPO VALIDO
		await SecureStore.setItemAsync("accessToken", res.data.accesstoken);
		await SecureStore.setItemAsync("refreshToken", res.data.RefreshToken);
		return ;
	}
	if (res.status === 207) {	// TOKEN NOTIFICATIONS EXPO INVALIDO
		await SecureStore.setItemAsync("accessToken", res.data.accesstoken);
		await SecureStore.setItemAsync("refreshToken", res.data.RefreshToken);
		return ;
	}
	if (res.status === 401) throw ({ icon: "person-off", text: "Login ou senha errada!" });
	if (res.status !== 200 && res.status !== 207) throw ({ icon: "error-outline", text: `${res.status}\n${res.data}` });
}

/**
 * @author VAMPETA
 * @brief FAZ A REQUISICAO PEDINDO AS CREDENCIAIS DO USUARIO
*/
async function requestCredentials() {
	try {
		const res = await axios.get(`${API_URL}/credentials`, { headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}` } });
		if (res.status !== 200) throw (new Error(`${res.status}\n${res.data}`));
		try {
			const infoDoc = await FileSystem.downloadAsync(res.data.foto, `${FileSystem.documentDirectory}user.${res.data.foto.split(".").pop().toLowerCase()}`, { headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}` } });
			if (infoDoc.status !== 200) await FileSystem.deleteAsync(infoDoc.uri, { idempotent: true });
		} catch (error) {

		}
		await SecureStore.setItemAsync("id", res.data._id);
		await AsyncStorage.setItem("name", res.data.nome);
		await SecureStore.setItemAsync("cpf", res.data.cpf);
		await AsyncStorage.setItem("email", res.data.email);
		await SecureStore.setItemAsync("date", res.data.dataNascimento);
		await SecureStore.setItemAsync("phone", res.data.telefone);
		// await AsyncStorage.setItem("times", JSON.stringify(res.data.times)); // NAO TEM NA API PRINCIPAL (TALVEZ EU CRIE UMA ROTA APENAS PARA ISSO E ATUALIZAR)
		// await AsyncStorage.setItem("nivel", res.data.nivel); // POR ENQUANTO NAO USO
		// await AsyncStorage.setItem("unit", JSON.stringify(res.data.unidade)); FALTA SER UM ARRAY DE UNIDADES
		// await AsyncStorage.setItem("class", JSON.stringify(res.data.turma)); FALTA SER UM ARRAY DE TURMAS
		// ACREDITO QUE SERIA MELHOR RECEBER "times" EM VEZ DE "unidade" E "turma" PQ A FUNCAO setNotifications JA FOI CRIADA COM BASE EM "times"
	} catch (error) {
		throw (Object.assign(new Error(error.message), { icon: "error-outline" }));
	}
}

/**
 * @author VAMPETA
 * @brief CRIA AS NOTIFICACOES SEMANAIS DE TREINO NO DISPOSITIVO DO USUARIO
*/
async function setNotifications() {
	const weekMap = { "Domingo": 1, "Segunda": 2, "Terça": 3, "Quarta": 4, "Quinta": 5, "Sexta": 6, "Sabado": 7 };
	const days = JSON.parse(await AsyncStorage.getItem("times"));

	if (!days) return;
	for (const location in days) {
		const sessions = days[location];

		sessions.forEach((session)=> {
			let weekday = weekMap[session.day];
			const [hourStr, minuteStr] = session.start.split(":");
			let hour = parseInt(hourStr, 10) - 3;
			let minute = parseInt(minuteStr, 10);

			if (hour < 0) {
				hour += 24;
				weekday = (weekday !== 0) ? weekday - 1 : 7;
			}
			scheduleNotification({
				title: `Treino em ${location}`,
				body: `Treino começa às ${session.start}, confirme o treino`,
				type: "WEEKLY",
				weekday: weekday,
				hour: hour,
				minute: minute
			});
		});
	}
}

/**
 * @author VAMPETA
 * @brief FAZ LOGIN E BUSCA ALGUMAS INFORMACOES DO USUARIO NO SERVIDOR
 * @param form CONTEM LOGIN E SENHA INSERIDO PELO USUARIO
 * @param setIsLogin FUNCAO QUE CONTROLA SE O USUARIO ESTA LOGADO OU NAO
*/
export async function handleLogin(form, setIsLogin) {
	validationLogin(form.login);
	validationPassword(form.password);
	await requestLogin(form.login, form.password, await getTokenNotifications());
	await requestCredentials();
	await setNotifications();
	setIsLogin(true);
}