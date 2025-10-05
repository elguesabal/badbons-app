import axios from "axios";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";
import * as Notifications from "expo-notifications";

import { scheduleNotification } from "../notifications.js";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief VALIDA O LOGIN
 * @param login LOGIN DO USUARIO
*/
function validationLogin(login) {
	if (!login || login.trim() === "") throw (Object.assign(new Error("Informe o login!"), { icon: "person" }));
}

/**
 * @author VAMPETA
 * @brief VALIDA A SENHA
 * @param password SENHA DO USUARIO
*/
function validationPassword(password) {
	if (!password) throw (Object.assign(new Error("Informe a senha!"), { icon: "password" }));
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
		if (error.response && error.response.status === 401) throw (Object.assign(new Error("Login ou senha errada!"), { icon: "person-off" }));
		throw (Object.assign(new Error(error.message), { icon: "error-outline" }));
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
			const infoDoc = await FileSystem.downloadAsync(res.data.photo, `${FileSystem.documentDirectory}user.${res.data.photo.split(".").pop().toLowerCase()}`, { headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}` } });
			if (infoDoc.status !== 200) await FileSystem.deleteAsync(infoDoc.uri, { idempotent: true });
		} catch (error) {

		}
		await AsyncStorage.setItem("name", res.data.name);
		await AsyncStorage.setItem("email", res.data.email);
		await SecureStore.setItemAsync("cpf", res.data.cpf);
		await SecureStore.setItemAsync("date", res.data.date);
		await SecureStore.setItemAsync("phone", res.data.phone);
		// await AsyncStorage.setItem("units", JSON.stringify(res.data.units));
		await AsyncStorage.setItem("times", JSON.stringify(res.data.times));
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
	// for (const location in days) {
	// 	const sessions = days[location];

	// 	sessions.forEach((session)=> {
	// 		let weekday = weekMap[session.day];
	// 		const [hourStr, minuteStr] = session.start.split(":");
	// 		let hour = parseInt(hourStr, 10) - 3;
	// 		let minute = parseInt(minuteStr, 10);

	// 		if (hour < 0) {
	// 			hour += 24;
	// 			weekday = (weekday !== 0) ? weekday - 1 : 7;
	// 		}
	// 		scheduleNotification({
	// 			title: `Treino em ${location}`,
	// 			body: `Treino começa às ${session.start}, confirme o treino`,
	// 			type: "CALENDAR", // O TIPO CALENDAR NAO FUNCIONA EM ANDROID
	// 			weekday: weekday,
	// 			hour: hour,
	// 			minute: minute,
	// 			repeats: true
	// 		});
	// 	});
	// }
	for (const location in days) {
		const sessions = days[location];

		for (const session of sessions) {
			let weekday = weekMap[session.day];
			const [hourStr, minuteStr] = session.start.split(":");
			let hour = parseInt(hourStr, 10) - 3;
			let minute = parseInt(minuteStr, 10);

			if (hour < 0) {
				hour += 24;
				weekday = weekday === 1 ? 7 : weekday - 1;
			}
			await Notifications.scheduleNotificationAsync({
				content: {
					title: `Treino em ${location}`,
					body: `Treino começa às ${session.start}, confirme o treino.`,
					sound: true,
					priority: Notifications.AndroidNotificationPriority.HIGH,
				},
				trigger: {
					weekday,
					hour,
					minute,
					repeats: true,
				},
			});
		}
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
	await requestLogin(form.login, form.password);
	await requestCredentials(); // AINDA NAO EXISTE NA API OFICIAL
	// await requestTraining(); // DEVO ATUALIZAR OS DIAS DE TREINO EM TODO LOGIN?
	await setNotifications();
	setIsLogin(true);
}