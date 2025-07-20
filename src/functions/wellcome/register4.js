import axios from "axios";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief FUNCAO CRIADA PARA INICIAR O selectedTimes
 * @param units UNIDADES ESCOLHIDAS PARA VER OS HORARIOS
 * @param setSelectedTimes FUNCAO QUE MODIFICA selectedTimes
*/
function startSelectedTimes(units, setSelectedTimes) {
	const selectedTimes = {};
	units.map((unit) => selectedTimes[unit] = []);
	setSelectedTimes(selectedTimes);
																console.log(selectedTimes);
}

/**
 * @author VAMPETA
 * @brief CRIA IDS DENTRO DE CADA ARRAY PARA FUNCIONAR CORRETAMENTE NO FlatList
 * @param data DADOS QUE VAO GANHAR IDS
 * @return RETORNA OS DADOS COM OS IDS
*/
function includeId(data) {
	for (let i = 0; i < data.length; i++) {
		data[i].id = i + 1;
		for (let j = 0; j < data[i].classes.length; j++) {
			data[i].classes[j].id = j + 1;
		}
	}
	return (data);
}

/**
 * @author VAMPETA
 * @brief FAZ UMA CONSULTA BUSCANDO OS HORARIOS DAS UNIDADES ENVIADAS NO ARRAY units
 * @param units ARRAY COM A LISTA DE UNIDADES SELECIONADAS DA PAGINA ANTERIOR
 * @param setData FUNCAO QUE ATRIBUI AS INFORMACOES QUE SERA USADO NO FlatList
 * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
 * @param setError FUNCAO QUE MUDA O STATUS DE ERROR
*/
export async function getTimetable(units, setSelectedTimes, setData, setLoad, setError) {
	try {
		const res = await axios.get(`${API_URL}/timetable-units`, { params: { units: units } });
		if (res.status !== 200) {
			setError("error");
			return ;
		}
		startSelectedTimes(units, setSelectedTimes);
		setData(includeId(res.data));
	} catch (error) {
		setError(error.message);
	} finally {
		setLoad(false);
	}
}

/**
 * @author VAMPETA
 * @brief FUNCAO CRIADA PARA ROLAR ATE O ELEMENTO CORRETO DO FlatList
 * @param index INDEX DO ELEMENTO
 * @param flatListRef OBJETO QUE CONTROLA QUAL INDICE VAI ESTAR A ROLAGEM DO FlatLIst
*/
export function scrollToIndex(flatListRef, index) {
	--index;
	flatListRef.current?.scrollToIndex({ index, animated: true });
}