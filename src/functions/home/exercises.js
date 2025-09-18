import axios from "axios";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

import API_URL from "../../Api.js";

export async function requestExercises(setData) {
	try {
		const res = await axios.get(`${API_URL}/user/treinos`, { headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}` } });
		if (res.status !== 200) throw (new Error(`${res.status}\n${res.data}`));
		setData({ nExercises: res.data.treinosTotais, completed: res.data.treinosFeitos });
		// await AsyncStorage.setItem("exercises", JSON.stringify(res.data));
	} catch (error) {

	}
}