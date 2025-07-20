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
 * @param flatListRef OBJETO QUE CONTROLA QUAL INDICE VAI ESTAR A ROLAGEM DO FlatLIst
 * @param index INDEX DO ELEMENTO
*/
export function scrollToIndex(flatListRef, index) {
	--index;
	flatListRef.current?.scrollToIndex({ index, animated: true });
}

/**
 * @author VAMPETA
 * @brief PROCURA UM OBJETO EM UM ARRAY DE OBJETOS
 * @param selectedTimes ARRAY COM TODAS AS UNIDADES SELECIONADAS
 * @param timeItem OBJETO A SER PROCURADO DENTRO DO ARRAY
 * @return RETORNA TRUE CASO ENCONTRE O OBJETO E FALSO CASO NAO ENCONTRE
*/
export function findSelected(selectedTimes, timeItem) {
	return (selectedTimes.some((time) => { return (time.day === timeItem.day && time.start === timeItem.start && time.end === timeItem.end) }));
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE MODIFICA selectedTimes ADICIONANDO OU REMOVENDO HORARIOS SELECIONADOS
 * @param setSelectedTimes FUNCAO QUE MODIFICA selectedTimes
 * @param unit STRING COM O NOME DA UNIDADE
 * @param timeItem OBJETO COM INFORMACOES DE DIA E HORARIO DE TREINO
*/
export function buttonTime(setSelectedTimes, unit, timeItem) {
	setSelectedTimes((prev) => {
		const currentTime = prev[unit] || [];
		const exists = currentTime.some((time) => { return (time.day === timeItem.day && time.start === timeItem.start && time.end === timeItem.end) });
		const newTime = (exists) ? currentTime.filter((time) => { return (time.day !== timeItem.day || time.start !== timeItem.start || time.end !== timeItem.end) }) : [...currentTime, { day: timeItem.day, start: timeItem.start, end: timeItem.end }];

		return { ...prev, [unit]: newTime };
	});
}

/**
 * @author VAMPETA
 * @brief 
 * @param 
*/
export function validation(selectedTimes) {
	console.log(selectedTimes);
	// PAREI AKI
	// VERIFICAR SE O USUARIO SELECIONOU UMA UNIDADE
	// REMOVER AS UNIDADES Q ELE NAO ESCOLHEU NENHUM HORARIO
	// ENVIAR PARA A PROXIMA SCREEN APEMAS AS UNIDADES E HORARIOS SELECIONADOS
	// CRIAR UM AVISO Q FOI SELECIONADO DIA E HORARIO IGUAL EM UNIDADES DIFERENTES? 
}