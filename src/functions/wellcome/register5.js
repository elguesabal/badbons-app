import axios from "axios";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief CRIA UM NOVO ARRAY PARA SER USADO NO FlatList
 * @param timeUnits ARRAY DE OBJETOS INDICANDO UNIDADES E HORARIOS SELECIONADOS
 * @return RETORNA UM ARRAY DE OBEJETOS COM ID UNIT E UM ARRAY DE HORARIOS SELECIONADOS DAQUELA UNIDADE
*/
export function createArray(timesUnits) {
	return (Object.entries(timesUnits).map(([unit, times], index) => ({ id: index + 1, unit, times })));
}

/**
 * @author VAMPETA
 * @brief FAZ UMA UMA REQUISICAO A API ENVIANDO OS DADOS DE CADASTRO E DIRECIONA PARA A TELA DE CONFIRMACAO DE MATRICULA SE A API RESPONDER COM STATUS 200
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param name NOME RECEBIDO NO INPUT
 * @param email EMAIL RECEBIDO NO INPUT
 * @param password SENHA RECEBIDO NO INPUT
 * @param cpf CPF RECEBIDO NO INPUT
 * @param date DATA DE NASCIMENTO RECEBIDO NO INPUT
 * @param phone NUMERO DE TELEFONE RECEBIDO NO INPUT
 * @param times OBJETO COM HORARIOS E UNIDADES SELECIONADAS PELO CLIENTE
*/
export async function register(navigation, name, email, password, cpf, date, phone, times) {
	try {
		const res = await axios.post(`${API_URL}/register`, { name: name, email: email, password: password, cpf: cpf, date: date, phone: phone, times: times });
		if (res.status === 200) {
			navigation.navigate("register6");
		} else {
			throw (new Error(`Status ${res.status}`));
		}
	} catch (error) {
		const err = new Error(error.message);
		err.status = error.status;
		throw (err);
	}
}