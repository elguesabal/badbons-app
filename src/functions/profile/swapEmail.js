import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import validator from "validator";

import api from "../../config_axios.js";

/**
 * @author VAMPETA
 * @brief VALIDA O NOVO EMAIL
 * @param newEmail NOVO EMAIL
*/
function validationNewEmail(newEmail) {
	if (!newEmail || newEmail.trim() === "") throw ({ icon: "alternate-email", text: "Informe um novo Email!" });
	if (!validator.isEmail(newEmail)) throw ({ icon: "alternate-email", text: "Novo Email inválido!" });
}

/**
 * @author VAMPETA
 * @brief VALIDA A CONFIRMACAO DO EMAIL
 * @param newEmail NOVO EMAIL
 * @param newEmailConfirmation CONFIRMACAO DO NOVO EMAIL
*/
function validationNewEmailConfirmation(newEmail, newEmailConfirmation) {
	if (!newEmailConfirmation || newEmailConfirmation.trim() === "") throw ({ icon: "alternate-email", text: "Confirme o Email!" });
	if (newEmail !== newEmailConfirmation) throw ({ icon: "alternate-email", text: "Os Emails são diferentes!" });
}

/**
 * @author VAMPETA
 * @brief VALIDA A SENHA
 * @param password SENHA DO USUARIO
*/
function validationPassword(password) {
	if (!password) throw ({ icon: "password", text: "Informe a senha!" });
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
	const res = await api({
		method: "PATCH",
		url: "/swap-email",
		headers: {
			Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}`
		},
		data: {
			newEmail: newEmail,
			password: password
		}
	});

	if (res.status === 204) {
		await AsyncStorage.setItem("email", newEmail);
		setTimeout(() => openModal({ icon: "check-circle", text: "Email trocado com sucesso!", handleButton: (closeModal) => handleButtonModal(closeModal, navigation) }), 100);
		return ;
	}
	if (res.status === 401) throw ({ setIsLogin: setIsLogin });
	if (res.status === 403) throw ({ icon: "password", text: "Senha incorreta!" });
	if (res.status === 409) throw ({ icon: "alternate-email", text: "E-mail em já em uso, por você ou outro usário!" });
	if (res.status !== 204) throw (res);
}

/**
 * @author VAMPETA
 * @brief TROCA O EMAIL DO USUARIO
 * @param form FORMULARIO COM NOVO EMAIL E SENHA DO USUARIO
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param openModal FUNCAO QUE ABRE O MODAL
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
export async function handleSwapEmail(form, navigation, openModal, setIsLogin) {
	validationNewEmail(form.newEmail);
	validationNewEmailConfirmation(form.newEmail, form.newEmailConfirmation);
	validationPassword(form.password);
	await requestSwapEmail(form.newEmail, form.password, navigation, openModal, setIsLogin);
}