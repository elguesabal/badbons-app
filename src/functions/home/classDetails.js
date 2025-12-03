import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
	if (res.status !== 204) throw (res);
}