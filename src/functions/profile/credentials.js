import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * @author VAMPETA
 * @brief CALCULA A IDADE COM BASE NA DATA DE NASCIMENTO
 * @param date DATA DE NASCIMENTO
*/
function calculateAge(date) {
	const [day, month, year] = date.split("/").map(Number);
	const todaysDate = new Date();
	const birth = new Date(year, month - 1, day);
	let age = todaysDate.getFullYear() - birth.getFullYear();

	if (!date || typeof date !== "string" || date.split("/").length !== 3) return (null);
	return ((todaysDate.getMonth() < birth.getMonth() || (todaysDate.getMonth() === birth.getMonth() && todaysDate.getDate() < birth.getDate())) ? age - 1 : age);
}

/**
 * @author VAMPETA
 * @brief CONSULTA AS INFORMACOES DO CLIENTES SALVAS
 * @param setData DEFINE O VALOR DA VARIAVEL data
*/
export async function getCredentials(setData) {
	const date = await SecureStore.getItemAsync("date");

	setData({
		nationality: await AsyncStorage.getItem("nationality"),
		date: date,
		age: calculateAge(date),
		sex: await AsyncStorage.getItem("sex")
	});
}