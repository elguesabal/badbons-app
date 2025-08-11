import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * @author VAMPETA
 * @brief BUSCA OS DADOS DA ULTIMA PARTIDA DO USUARIO
 * @param setGame FUNCAO QUE SALVA O ULTIMO GAME EM UMA VARIAVEL
*/
export async function lastGame(setGame) {
	setGame(JSON.parse(await AsyncStorage.getItem("lastGame")));
}