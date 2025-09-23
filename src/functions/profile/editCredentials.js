import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * @author VAMPETA
 * @brief BUSCA AS CREDENCIAIS DO USUARIO NO DISPOSITIVO
 * @param setForm FUNCAO QUE SALVA AS INFORMACOES
*/
export async function getCredentials(setForm) {
	setForm({
		name: await AsyncStorage.getItem("name"),
		phone: await SecureStore.getItemAsync("phone"),
		cpf: await SecureStore.getItemAsync("cpf"),
		date: await SecureStore.getItemAsync("date"),
		nationality: "Japão",
		sex: "H"
	});
}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO NOME
 * @param name NOME DO USUARIO
*/
function validationName(name) {

}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO TELEFONE
 * @param phone TELEFONE DO USUARIO
*/
function validationPhone(phone) {

}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO CPF
 * @param cpf CPF DO USUARIO
*/
function validationCpf(cpf) {

}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO DATA DE NASCIMENTO
 * @param date DATA DE ANIVERSARIO DO USUARIO
*/
function validationDate(date) {

}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO NACIONALIDADE
 * @param nationality NACIONALIDADE DO USUARIO
*/
function validationNationality(nationality) {

}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO SEXO
 * @param sex SEXO DO USUARIO
*/
function validationSex(sex) {

}

/**
 * @author VAMPETA
 * @brief FAZ A REQUISICAO TROCANDO OS DADOS DO USUARIO
 * @param form DADOS DO USUARIO
*/
async function requestEditCredentials(form) {
			// FAZER A REQUISICAO E A API
}

/**
 * @author VAMPETA
 * @brief TROCA AS INFORMACOES DO USUARIO
 * @param form NOVOS DADOS DO USUARIO
 * @param password SENHA DO USUARIO
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param openModal FUNCAO QUE ABRE O MODAL
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
export async function handleEditCredentials(form) {
	validationName(form.name);
	validationPhone(form.phone);
	validationCpf(form.cpf);
	validationDate(form.date);
	validationNationality(form.nationality);
	validationSex(form.sex);
	await requestEditCredentials(form);
}