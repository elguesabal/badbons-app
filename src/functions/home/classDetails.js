import axios from "axios";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief FAZ UMA REQUISICAO ENVIANDO A INFORMACAO QUE O ALUNO CONFIRMOU PRESENCA OU DESMACOU A PRESENCA NO TREINO
 * @param newPresence true OU false INDICANDO SE O ALUNO VAI AO TREINO OU NAO
 * @param setPresenceList FUNCAO QUE CONTROLA O O ESTADO DE presenceList
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
 * @param closeSheet FUNCAO QUE FECHA O BottomSheet
*/
export async function confirmPresence(newPresence, setPresenceList, setIsLogin, closeSheet) {
	try {
		const res = await axios.post(`${API_URL}/presence-student`, { presence: newPresence }, { headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}` }});
		if (res.status !== 200) throw (new Error(`${res.status}\n${res.data}`));
		const name = await AsyncStorage.getItem("name");
		setPresenceList((prev) => ({ ...prev, confirmedPresence: newPresence, confirmedStudents: (newPresence) ? [...prev.confirmedStudents, name] : prev.confirmedStudents.filter((student) => student !== name) }));
	} catch (error) {
		if (error.response && error.response.status === 401) {
			closeSheet();
			throw (Object.assign(new Error(), { setIsLogin: setIsLogin }));
		}
		throw (Object.assign(new Error(error.message), { icon: "error-outline" }));
	}
}