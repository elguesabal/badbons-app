import * as SecureStore from "expo-secure-store";
import axios from "axios";

import { logout } from "../logout.js";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief 
*/
export async function requestNotification(id, setData, setIsLogin, setLoad, openModal) {
	try {
		const res = await axios.get(`${API_URL}/notification?id=${id}`, {
			headers: {
				Authorization: `Bearer ${await SecureStore.getItemAsync("token")}`
			}
		});
		// console.log(res.data)
		setData(res.data);
	} catch (error) {

	} finally {
		setLoad(false);
	}
}