import axios from "axios";
import * as SecureStore from "expo-secure-store";

import { logout } from "../logout.js";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief VALIDA A NOVA SENHA
 * @param newPassword NOVA SENHA
*/
function validationNewPassword(newPassword) {
	let err;

	if (!newPassword || newPassword.trim() === "") err = new Error("Informe uma nova senha!");
	if (!err && (newPassword.length < 5)) err = new Error("Senha muito curta!");
	if (err) {
		err.icon = "password";
		err.button = "Ok";
		throw (err);
	}
}

/**
 * @author VAMPETA
 * @brief VALIDA A CONFIRMACAO DA NOVA SENHA
 * @param newPassword NOVA SENHA
 * @param newPasswordConfirmation CONFIRMACAO DA NOVA SENHA
*/
function validationNewPasswordConfirmation(newPassword, newPasswordConfirmation) {
	let err;

	if (!newPasswordConfirmation || newPasswordConfirmation.trim() === "") err = new Error("Confirme a senha!");
	if (!err && (newPassword !== newPasswordConfirmation)) err = new Error("As senhas são diferentes!");
	if (err) {
		err.icon = "password";
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

	if (!password) err = new Error("Informe a senha antiga!");
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
 * @param newPassword NOVA SENHA
 * @param password SENHA DO USUARIO
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param openModal FUNCAO QUE ABRE O MODAL
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
async function requestSwapPassword(newPassword, password, navigation, openModal, setIsLogin) {
	try {
		const res = await axios.post(`${API_URL}/swap-password`, { newPassword: newPassword, password: password }, { headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}` } });
		if (res.status !== 200) throw (new Error(`Status ${res.status}`));
		setTimeout(() => openModal({ icon: "check-circle", text: "Senha trocada com sucesso!", button: "ok", handleButton: (closeModal) => handleButtonModal(closeModal, navigation) }), 100);
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
 * @brief TROCA A SENHA DO USUARIO
 * @param newPassword NOVA SENHA
 * @param newPasswordConfirmation CONFIRMACAO DO NOVA SENHA
 * @param password SENHA DO USUARIO
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param openModal FUNCAO QUE ABRE O MODAL
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
export async function handleSwapPassword(newPassword, newPasswordConfirmation, password, navigation, openModal, setIsLogin) {
	validationNewPassword(newPassword);
	validationNewPasswordConfirmation(newPassword, newPasswordConfirmation);
	validationPassword(password);
	await requestSwapPassword(newPassword, password, navigation, openModal, setIsLogin);
}