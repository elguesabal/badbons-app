import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { logout } from "./profile.js";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief FAZ A REQUISICAO DE HISTORICO DE PARTIDAS PARA A API E SALVA O ULTIMO JOGO NA MEMORIA DO CELULAR
 * @param setEvents FUNCAO QUE SALVARA QUE VAI ARMAZENAR O HISTORICO DE PARTIDAS
 * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
 * @param setError FUNCAO QUE MUDA O STATUS DE ERROR
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
export async function requestGameHistory(setEvents, setLoad, setError, setIsLogin) {
	try {
		const res = await axios.get(`${API_URL}/game-history`, {
			headers: {
				Authorization: `Bearer ${await SecureStore.getItemAsync("token")}`
			}
		});
		await AsyncStorage.setItem("lastGame", JSON.stringify(res.data[0].games[0]));
		setEvents(res.data);
	} catch (error) {
		if (error.response && error.response.status === 401) {
			logout(setIsLogin);
		} else {
			setError(error.message);
		}
	} finally {
		setLoad(false);
	}
}