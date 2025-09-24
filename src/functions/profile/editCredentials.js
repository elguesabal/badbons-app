import axios from "axios";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { logout } from "../logout.js";

import API_URL from "../../Api.js";

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
	let err;

	if (!name || name.trim() === "") err = new Error("Informe um nome!");
	if (err) {
		err.icon = "edit-document";
		err.button = "Ok";
		throw (err);
	}
}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO TELEFONE
 * @param phone TELEFONE DO USUARIO
*/
function validationPhone(phone) {
	let err;

	if (!phone || phone.trim() === "") err = new Error("Informe um telefone!");
	// if (!err && (!/^\d{11}$/.test(phone))) err = new Error("Número de telefone inválido!");
	if (err) {
		err.icon = "phone";
		err.button = "Ok";
		throw (err);
	}
}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO CPF
 * @param cpf CPF DO USUARIO
*/
function validationCpf(cpf) {
	let err;

	if (!cpf || cpf.trim() === "") err = new Error("Informe um CPF!");
	// if (!/^\d{11}$/.test(cpf)) err = new Error("CPF inválido!");
	if (err) {
		err.icon = "badge";
		err.button = "Ok";
		throw (err);
	}
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
	let err;

	if (!date || date.trim() === "") err = new Error("Informe sua data de nascimento!");
	if (!err && (date.split("/").length !== 3)) err = new Error("Formato de data inválido!\nUse DD/MM/AAAA");
	if (!err && (!(birth.getDate() === day && birth.getMonth() === month - 1 && birth.getFullYear() === year))) err = new Error("Data de nascimento inválida!");
	if (!err && (birth > today || year < 1950)) err = new Error("Data de nascimento inválida!");
	if (err) {
		err.icon = "calendar-month";
		err.button = "Ok";
		throw (err);
	}
}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO NACIONALIDADE
 * @param nationality NACIONALIDADE DO USUARIO
*/
function validationNationality(nationality) {
	let err;

	if (!nationality || nationality.trim() === "") err = new Error("Informe um país de origem!");
	if (!err && (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nationality))) err = new Error("Nacionalidade inválida!");
	if (err) {
		err.icon = "public";
		err.button = "Ok";
		throw (err);
	}
}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO SEXO
 * @param sex SEXO DO USUARIO
*/
function validationSex(sex) {
	let err;

	if (!sex || sex.trim() === "") err = new Error("Informe seu gênero!");
	if (err) {
		err.icon = "wc";
		err.button = "Ok";
		throw (err);
	}
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
	try {
		const res = await axios.patch(`${API_URL}/swap-credentials`, form, { headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}` } });
		if (res.status !== 200) throw (new Error(`Status ${res.status}`));
		setTimeout(() => openModal({ icon: "check-circle", text: "Credenciais trocadas com sucesso!", button: "ok", handleButton: (closeModal) => handleButtonModal(closeModal, navigation) }), 100);
		await saveSwap(form);
	} catch (error) {
		if (error.response && error.response.status === 401) {
			logout(setIsLogin);
		} else {
			const err = new Error(error.message);
			err.icon = "error-outline";
			err.button = "Ok";
			throw (err);
		}
	}
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