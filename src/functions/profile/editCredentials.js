// import axios from "axios";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { cpf as cpfValidator } from "cpf-cnpj-validator";
import { parsePhoneNumberFromString as phoneValidator } from "libphonenumber-js";

// import API_URL from "../../Api.js";
import api from "../../config_axios.js";

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
		nationality: await AsyncStorage.getItem("nationality"),
		sex: await AsyncStorage.getItem("sex")
	});
}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO NOME
 * @param name NOME DO USUARIO
*/
function validationName(name) {
	if (!name || name.trim() === "") throw ({ icon: "edit-document", text: "Informe um nome!" });
}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO TELEFONE
 * @param phone TELEFONE DO USUARIO
*/
function validationPhone(phone) {
	if (!phone || phone.trim() === "") throw ({ icon: "phone", text: "Informe um telefone!" });
	if (!phoneValidator(phone)?.isValid()) throw ({ icon: "phone", text: "Número de telefone inválido!" });
}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO CPF
 * @param cpf CPF DO USUARIO
*/
function validationCpf(cpf) {
	if (!cpf || cpf.trim() === "") throw ({ icon: "badge", text: "Informe um CPF!" });
	if (!cpfValidator.isValid(cpf)) throw ({ icon: "badge", text: "CPF inválido!" });
}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO DATA DE NASCIMENTO
 * @param date DATA DE ANIVERSARIO DO USUARIO
*/
function validationDate(date) {
	const [day, month, year] = date.split("/").map(Number);
	const birth = new Date(year, month - 1, day);
	const today = new Date();

	if (!date || date.trim() === "") throw ({ icon: "calendar-month", text: "Informe sua data de nascimento!" });
	if (date.split("/").length !== 3) throw ({ icon: "calendar-month", text: "Formato de data inválido!\nUse DD/MM/AAAA" });
	if (!(birth.getDate() === day && birth.getMonth() === month - 1 && birth.getFullYear() === year)) throw ({ icon: "calendar-month", text: "Data de nascimento inválida!" });
	if (birth > today || year < 1950) throw ({ icon: "calendar-month", text: "Data de nascimento inválida!" });
}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO NACIONALIDADE
 * @param nationality NACIONALIDADE DO USUARIO
*/
function validationNationality(nationality) {
	if (!nationality || nationality.trim() === "") throw ({ icon: "public", text: "Informe um país de origem!" });
	if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nationality)) throw ({ icon: "public", text: "Nacionalidade inválida!" });
}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO SEXO
 * @param sex SEXO DO USUARIO
*/
function validationSex(sex) {
	if (!sex || sex.trim() === "") throw ({ icon: "wc", text: "Informe seu gênero!" });
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE CONTROLA O COMPORTAMENTO DO BOTAO DENTRO DO MODAL
 * @param closeModal FUNCAO QUE FECHA O MODAL
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
*/
function handleButtonModal(closeModal, navigation) {
	closeModal();
	navigation.navigate("main");
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE ATUALIZA AS INFORMACOES DENTRO DISPOSITIVO DO CLIENTE
 * @param form DADOS DO USUARIO
*/
async function saveSwap(form) {
	await AsyncStorage.setItem("name", form.name);
	await SecureStore.setItemAsync("phone", form.phone);
	await SecureStore.setItemAsync("cpf", form.cpf);
	await SecureStore.setItemAsync("date", form.date);
	await AsyncStorage.setItem("nationality", form.nationality);
	await AsyncStorage.setItem("sex", form.sex);
}

/**
 * @author VAMPETA
 * @brief FAZ A REQUISICAO TROCANDO OS DADOS DO USUARIO
 * @param form DADOS DO USUARIO
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param openModal FUNCAO QUE ABRE O MODAL
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
async function requestEditCredentials(form, navigation, openModal, setIsLogin) {
	// try {
	// 	const res = await axios.patch(`${API_URL}/swap-credentials`, form, { headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}` } });
	// 	if (res.status !== 200) throw (new Error(`${res.status}\n${res.data}`));
	// 	await saveSwap(form);
	// 	setTimeout(() => openModal({ icon: "check-circle", text: "Credenciais trocadas com sucesso!", handleButton: (closeModal) => handleButtonModal(closeModal, navigation) }), 100);
	// } catch (error) {
	// 	if (error.response && error.response.status === 401) throw (Object.assign(new Error(), { setIsLogin: setIsLogin }));
	// 	throw (Object.assign(new Error(error.message), { icon: "error-outline" }));
	// }



	const res = await api({
		method: "PATCH",
		url: "/swap-credentials",
		headers: {
			Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}`
		},
		data: {
			name: form.name,
			phone: form.phone,
			cpf: form.cpf,
			date: form.date,
			nationality: form.nationality,
			sex: form.sex
		}
	});

	if (res.status === 204) {
		await saveSwap(form);
		setTimeout(() => openModal({ icon: "check-circle", text: "Credenciais trocadas com sucesso!", handleButton: (closeModal) => handleButtonModal(closeModal, navigation) }), 100);
		return ;
	}
	if (res.status === 401) throw ({ setIsLogin: setIsLogin });
	if (res.status !== 204) throw ({ icon: "error-outline", text: `${res.status}\n${res.data}` });
}

/**
 * @author VAMPETA
 * @brief TROCA AS INFORMACOES DO USUARIO
 * @param form NOVOS DADOS DO USUARIO
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param openModal FUNCAO QUE ABRE O MODAL
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
export async function handleEditCredentials(form, navigation, openModal, setIsLogin) {
	validationName(form.name);
	validationPhone(form.phone);
	validationCpf(form.cpf);
	validationDate(form.date);
	validationNationality(form.nationality);
	validationSex(form.sex);
	await requestEditCredentials(form, navigation, openModal, setIsLogin);
}