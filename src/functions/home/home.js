import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * @author VAMPETA
 * @brief CONSULTA AS INFORMACOES DO CLIENTES SALVAS
 * @param setCredentials DEFINE O VALOR DA VARIAVEL credentials
*/
export async function getCredentials(setCredentials) {
	setCredentials({
		times: JSON.parse(await AsyncStorage.getItem("times"))
	});
}