import { Alert } from "react-native";
import axios from "axios";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief INICIALIZA selected COM SETANDO UNIDADES
 * @param units UNIDADES DISPONIVEIS PASSADAS PELA API
 * @param setSelected FUNCAO QUE MODIFICA selected
*/
export function startSelected(units, setSelected) {
	const initialSelected = {};
	units.forEach((unit) => initialSelected[unit] = false);
	setSelected(initialSelected);
}

/**
 * @author VAMPETA
 * @brief SEPARA OS ELEMENTOS DO ARRAY EM DUPLAS
 * @param array ARRAY Q SERA DIVIDIDO EM DUPLAS
 * @return RETORNA O NOVO ARRAY EM DUPLAS
*/
function doubleUnits(array) {
	const result = [];
	for (let i = 0; i < array.length; i += 2) result.push(array.slice(i, i + 2));
	return (result);
}

/**
 * @author VAMPETA
 * @brief FAZ UMA CONSULTA A API E RECEBE TODAS AS UNIDADES DISPONIVEIS PARA TREINO
 * @param setSelected FUNCAO QUE MODIFICA O ARRAY COM UNIDADES SELECIONADAS
 * @param setLocations FUNCAO QUE SETA UM ARRAY DIVIDO EM PARES AS UNIDADES
 * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
 * @param setError FUNCAO QUE MUDA O STATUS DE ERROR
*/
export async function trainingLocations(setSelected, setLocations, setLoad, setError) {
	try {
		const res = await axios.get(`${API_URL}/training-locations`);
		if (res.status !== 200) {
			setError("error");
			return ;
		}
		startSelected(res.data, setSelected);
		setLocations(doubleUnits(res.data));
	} catch (error) {
		setError(error.message);
	} finally {
		setLoad(false);
	}
}

/**
 * @author VAMPETA
 * @brief FUNCAO RESPONSAVEL POR VALIDAR INFORMACOES E PASSAR ELAS PARA A PROXIMA SCREEN
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param name NOME RECEBIDO NO INPUT
 * @param email EMAIL RECEBIDO NO INPUT
 * @param password SENHA RECEBIDO NO INPUT
 * @param cpf CPF RECEBIDO NO INPUT
 * @param date DATA DE NASCIMENTO RECEBIDO NO INPUT
 * @param phone NUMERO DE TELEFONE RECEBIDO NO INPUT
 * @param selected ARRAY DE CHAVES DE UNIDADES MARCADAS COM TRUE OU FALSE (TRUE A UNIDADE FOI SELECIONADA E FALSE NAO)
*/
export function validation(navigation, name, email, password, cpf, date, phone, selected) {
	const units = Object.keys(selected).filter((key) => selected[key]);

	if (units.length === 0) {
		Alert.alert("Atenção", "Escolha ao mínimo uma unidade!");
		return ;
	}
	navigation.navigate("register4", {
		inputNome: name,
		inputEmail: email,
		inputPassword: password,
		inputCpf: cpf,
		inputDate: date,
		inputPhone: phone,
		units: units
	});
}