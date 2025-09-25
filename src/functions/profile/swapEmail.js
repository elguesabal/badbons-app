import axios from "axios";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { logout } from "../logout.js";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief VALIDA O NOVO EMAIL
 * @param newEmail NOVO EMAIL
*/
function validationNewEmail(newEmail) {
	let err;

	if (!newEmail || newEmail.trim() === "") err = new Error("Informe um novo Email!");
	if (!err && (!/\S+@\S+\.\S+/.test(newEmail))) err = new Error("Novo Email inválido!");
	if (err) {
		err.icon = "alternate-email";
		err.button = "Ok";
		throw (err);
	}
	// if (!name || name.trim() === "") throw (Object.assign(new Error("Informe um nome!"), { icon: "edit-document", button: "Ok" }));
}

/**
 * @author VAMPETA
 * @brief VALIDA A CONFIRMACAO DO EMAIL
 * @param newEmail NOVO EMAIL
 * @param newEmailConfirmation CONFIRMACAO DO NOVO EMAIL
*/
function validationNewEmailConfirmation(newEmail, newEmailConfirmation) {
	let err;

	if (!newEmailConfirmation || newEmailConfirmation.trim() === "") err = new Error("Confirme o Email!");
	if (!err && (newEmail !== newEmailConfirmation)) err = new Error("Os Emails são diferentes!");
	if (err) {
		err.icon = "alternate-email";
		err.button = "Ok";
		throw (err);
	}
}

/**
 * @author VAMPETA
 * @brief VALIDA A SENHA
 * @param password SENHA DO USUARIO
*/
function validationPassword(password) {
	let err;

	if (!password) err = new Error("Informe a senha!");
	if (err) {
		err.icon = "password";
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
 * @brief FAZ A REQUISICAO TROCANDO O EMAIL DO USUARIO
 * @param newEmail NOVO EMAIL
 * @param password SENHA DO USUARIO
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param openModal FUNCAO QUE ABRE O MODAL
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
async function requestSwapEmail(newEmail, password, navigation, openModal, setIsLogin) {
	try {
		const res = await axios.post(`${API_URL}/swap-email`, { newEmail: newEmail, password: password }, { headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}` } });
		if (res.status !== 200) throw (new Error(`Status ${res.status}`));
		setTimeout(() => openModal({ icon: "check-circle", text: "Email trocado com sucesso!", button: "ok", handleButton: (closeModal) => handleButtonModal(closeModal, navigation) }), 100);
		await AsyncStorage.setItem("email", newEmail);
	} catch (error) {
		if (error.response && error.response.status === 401) {
			logout(setIsLogin);
		} else if (error.response && error.response.status === 403) {
			setTimeout(() => openModal({ icon: "password", text: "Senha incorreta!", button: "ok", }), 100);
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
 * @brief TROCA O EMAIL DO USUARIO
 * @param newEmail NOVO EMAIL
 * @param newEmailConfirmation CONFIRMACAO DO NOVO EMAIL
 * @param password SENHA DO USUARIO
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param openModal FUNCAO QUE ABRE O MODAL
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
export async function handleSwapEmail(newEmail, newEmailConfirmation, password, navigation, openModal, setIsLogin) {
	validationNewEmail(newEmail);
	validationNewEmailConfirmation(newEmail, newEmailConfirmation);
	validationPassword(password);
	await requestSwapEmail(newEmail, password, navigation, openModal, setIsLogin);
}