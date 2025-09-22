import * as SecureStore from "expo-secure-store";

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
		date: date,
		age: calculateAge(date)
	});
}