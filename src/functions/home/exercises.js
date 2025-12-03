import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { logout } from "../logout.js";

import api from "../../config_axios.js";

/**
 * @author VAMPETA
 * @brief FAZ A CONSULTA DOS EXERCICIOS FEITOS PELO USUARIO
 * @param setData FUNCAO QUE SALVA AS INFORMACOES DE EXERCICIO
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
export async function requestExercises(setData, setIsLogin) {
	const res = await api({
		method: "GET",
		url: "/user/treinos",
		headers: {
			Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}`
		}
	});

	if (res.status === 200) {
		const exercises = { nExercises: res.data.treinosTotais, completed: res.data.treinosFeitos };
		setData(exercises);
		await AsyncStorage.setItem("exercises", JSON.stringify(exercises));
		return ;
	}
	if (res.status === 401) return (logout(setIsLogin));
	if (res.status !== 200) return (setData(JSON.parse(await AsyncStorage.getItem("exercises") || '{ "nExercises": 0, "completed": 0 }')));
}