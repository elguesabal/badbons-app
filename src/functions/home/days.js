import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * @author VAMPETA
 * @brief CALCULA QUAIS SAO OS PROXIMOS 7 DIAS
*/
export function nextSevenDays() {
	const daysWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
	const today = new Date();
	const result = [];

	for (let i = 0; i < 7; i++) {
		const date = new Date();
		date.setDate(today.getDate() + i);
		result.push({
			date: `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`,
			dayWeek: daysWeek[date.getDay()]
		});
	}
	return (result);
}

/**
 * @author VAMPETA
 * @brief CONSULTA OS DIAS DE TREINO SALVO NO DISPOSITIVO DO CLIENTE
 * @param setTrainingDays FUNCAO QUE SALVA AS INFORMACOES DE TREINO
*/
export async function requestTrainingDays(setTrainingDays) {
	const days = JSON.parse(await AsyncStorage.getItem("times"));
	setTrainingDays(Object.values(days).flatMap((arr) => arr.map((item) => item.day.substring(0, 3))));
}