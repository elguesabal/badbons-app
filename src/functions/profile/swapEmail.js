import axios from "axios";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { logout } from "../logout.js";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief VALIDA A TROCA DO EMAIL DO USUARIO
 * @param newEmail NOVO EMAIL
 * @param newEmailConfirmation CONFIRMACAO DO NOVO EMAIL
 * @param password SENHA DO USUARIO
*/
function validation(newEmail, newEmailConfirmation, password) {
	if (!newEmail || !newEmailConfirmation || !password) {
		const err = new Error("Preencha todos os campos!");
		err.icon = "alternate-email";
		err.button = "Ok";
		throw (err);
	}
	if (newEmail !== newEmailConfirmation) {
		const err = new Error("Os Emails são diferentes!");
		err.icon = "alternate-email";
		err.button = "Ok";
		throw (err);
	}
	if (!/\S+@\S+\.\S+/.test(newEmail)) {
		const err = new Error("Email inválido!");
		err.icon = "alternate-email";
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
			err.status = error.status;
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
	validation(newEmail, newEmailConfirmation, password);
	await requestSwapEmail(newEmail, password, navigation, openModal, setIsLogin);
}