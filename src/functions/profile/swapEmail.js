import axios from "axios";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief VALIDA O NOVO EMAIL
 * @param newEmail NOVO EMAIL
*/
function validationNewEmail(newEmail) {
	if (!newEmail || newEmail.trim() === "") throw (Object.assign(new Error("Informe um novo Email!"), { icon: "alternate-email", button: "Ok" }));
	if (!/\S+@\S+\.\S+/.test(newEmail)) throw (Object.assign(new Error("Novo Email inválido!"), { icon: "alternate-email", button: "Ok" }));
}

/**
 * @author VAMPETA
 * @brief VALIDA A CONFIRMACAO DO EMAIL
 * @param newEmail NOVO EMAIL
 * @param newEmailConfirmation CONFIRMACAO DO NOVO EMAIL
*/
function validationNewEmailConfirmation(newEmail, newEmailConfirmation) {
	if (!newEmailConfirmation || newEmailConfirmation.trim() === "") throw (Object.assign(new Error("Confirme o Email!"), { icon: "alternate-email", button: "Ok" }));
	if (newEmail !== newEmailConfirmation) throw (Object.assign(new Error("Os Emails são diferentes!"), { icon: "alternate-email", button: "Ok" }));
}

/**
 * @author VAMPETA
 * @brief VALIDA A SENHA
 * @param password SENHA DO USUARIO
*/
function validationPassword(password) {
	if (!password) throw (Object.assign(new Error("Informe a senha!"), { icon: "password", button: "Ok" }));
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
		if (res.status !== 200) throw (new Error(`${res.status}\n${res.data}`));
		await AsyncStorage.setItem("email", newEmail);
		setTimeout(() => openModal({ icon: "check-circle", text: "Email trocado com sucesso!", button: "ok", handleButton: (closeModal) => handleButtonModal(closeModal, navigation) }), 100);
	} catch (error) {
		if (error.response && error.response.status === 401) throw (Object.assign(new Error(), { setIsLogin: setIsLogin }));
		if (error.response && error.response.status === 403) throw (Object.assign(new Error("Senha incorreta!"), { icon: "password", button: "ok", }));
		throw (Object.assign(new Error(error.message), { icon: "error-outline", button: "Ok" }));
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