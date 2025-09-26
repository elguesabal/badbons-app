import axios from "axios";
import * as SecureStore from "expo-secure-store";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief VALIDA A NOVA SENHA
 * @param newPassword NOVA SENHA
*/
function validationNewPassword(newPassword) {
	if (!newPassword || newPassword.trim() === "") throw (Object.assign(new Error("Informe uma nova senha!"), { icon: "password", button: "Ok" }));
	if (newPassword.length < 5) throw (Object.assign(new Error("Nova senha muito curta!"), { icon: "password", button: "Ok" }));
}

/**
 * @author VAMPETA
 * @brief VALIDA A CONFIRMACAO DA NOVA SENHA
 * @param newPassword NOVA SENHA
 * @param newPasswordConfirmation CONFIRMACAO DA NOVA SENHA
*/
function validationNewPasswordConfirmation(newPassword, newPasswordConfirmation) {
	if (!newPasswordConfirmation || newPasswordConfirmation.trim() === "") throw (Object.assign(new Error("Confirme a senha!"), { icon: "password", button: "Ok" }));
	if (newPassword !== newPasswordConfirmation) throw (Object.assign(new Error("As senhas são diferentes!"), { icon: "password", button: "Ok" }));
}

/**
 * @author VAMPETA
 * @brief VALIDA A SENHA
 * @param password SENHA DO USUARIO
*/
function validationPassword(password) {
	if (!password) throw (Object.assign(new Error("Informe a senha antiga!"), { icon: "password", button: "Ok" }));
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
		if (res.status !== 200) throw (new Error(`${res.status}\n${res.data}`));
		setTimeout(() => openModal({ icon: "check-circle", text: "Senha trocada com sucesso!", button: "ok", handleButton: (closeModal) => handleButtonModal(closeModal, navigation) }), 100);
	} catch (error) {
		if (error.response && error.response.status === 401) throw (Object.assign(new Error(), { setIsLogin: setIsLogin }));
		if (error.response && error.response.status === 403) throw (Object.assign(new Error("Senha incorreta!"), { icon: "password", button: "ok", }));
		throw (Object.assign(new Error(error.message), { icon: "error-outline", button: "Ok" }));
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