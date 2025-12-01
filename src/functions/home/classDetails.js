// import axios from "axios";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import API_URL from "../../Api.js";
import api from "../../config_axios.js";

/**
 * @author VAMPETA
 * @brief FAZ UMA REQUISICAO ENVIANDO A INFORMACAO QUE O ALUNO CONFIRMOU PRESENCA OU DESMACOU A PRESENCA NO TREINO
 * @param newPresence true OU false INDICANDO SE O ALUNO VAI AO TREINO OU NAO
 * @param setPresenceList FUNCAO QUE CONTROLA O O ESTADO DE presenceList
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
 * @param closeSheet FUNCAO QUE FECHA O BottomSheet
 * @param date DATA DO TREINO
*/
export async function confirmPresence(newPresence, setPresenceList, setIsLogin, closeSheet, date) {	// FALTA REFATORAR (EU MUDEI ALGUMAS COISAS NA API)
	// try {
	// 	const res = await axios.post(`${API_URL}/presence-student`, { presence: newPresence }, { headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}` }});
	// 	if (res.status !== 200) throw (new Error(`${res.status}\n${res.data}`));
	// 	const name = await AsyncStorage.getItem("name");
	// 	setPresenceList((prev) => ({ ...prev, confirmedPresence: newPresence, confirmedStudents: (newPresence) ? [...prev.confirmedStudents, name] : prev.confirmedStudents.filter((student) => student !== name) }));
	// } catch (error) {
	// 	if (error.response && error.response.status === 401) {
	// 		closeSheet();
	// 		throw (Object.assign(new Error(), { setIsLogin: setIsLogin }));
	// 	}
	// 	throw (Object.assign(new Error(error.message), { icon: "error-outline" }));
	// }



	const res = await api({
		method: "PATCH",
		url: "/presence-student",
		headers: {
			Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}`
		},
		data: {
			date: date,
			presence: newPresence
		}
	});
console.log(res.status)
	if (res.status === 204) {
		const name = await AsyncStorage.getItem("name");
		setPresenceList((prev) => ({ ...prev, confirmedPresence: newPresence, confirmedStudents: (newPresence) ? [...prev.confirmedStudents, name] : prev.confirmedStudents.filter((student) => student !== name) }));
		return ;
	}
	if (res.status === 401) throw ({ setIsLogin: setIsLogin, closeSheet: closeSheet });
	if (res.status === 409) {
		const name = await AsyncStorage.getItem("name");
		setPresenceList((prev) => ({ ...prev, confirmedPresence: newPresence, confirmedStudents: (newPresence) ? [...prev.confirmedStudents, name] : prev.confirmedStudents.filter((student) => student !== name) }));
		return ;
	}
	if (res.status !== 204) throw ({ icon: "error-outline", text: `${res.status}\n${res.data}` });
}