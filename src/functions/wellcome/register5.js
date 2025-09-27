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
 * @param form INFORMACOES DE CADASTRO DO USUARIO
*/
export async function register(navigation, form) {
	try {
		const res = await axios.post(`${API_URL}/register`, { name: form.name, email: form.email, password: form.password, cpf: form.cpf, date: form.date, phone: form.phone, times: form.times });
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