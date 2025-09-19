import axios from "axios";
import * as SecureStore from "expo-secure-store";

import { logout } from "../logout.js";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief VALIDA A TROCA DO EMAIL DO USUARIO
 * @param newPassword NOVA SENHA
 * @param newPasswordConfirmation CONFIRMACAO DO NOVA SENHA
 * @param password SENHA DO USUARIO
*/
function validation(newPassword, newPasswordConfirmation, password) {
	if (!newPassword || !newPasswordConfirmation || !password) {
		const err = new Error("Preencha todos os campos!");
		err.icon = "password";
		err.button = "Ok";
		throw (err);
	}
	if (newPassword !== newPasswordConfirmation) {
		const err = new Error("Para confirmar, sua nova senha precisa ser igual nos dois campos.");
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
		if (error.response && error.response.status === 400) {
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
	validation(newPassword, newPasswordConfirmation, password);
	await requestSwapPassword(newPassword, password, navigation, openModal, setIsLogin);
}