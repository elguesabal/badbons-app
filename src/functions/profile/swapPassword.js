// import axios from "axios";
import * as SecureStore from "expo-secure-store";

// import API_URL from "../../Api.js";
import api from "../../config_axios.js";

/**
 * @author VAMPETA
 * @brief VALIDA A NOVA SENHA
 * @param newPassword NOVA SENHA
*/
function validationNewPassword(newPassword) {
	if (!newPassword || newPassword.trim() === "") throw ({ icon: "password", text: "Informe uma nova senha!" });
	if (newPassword.length < 5) throw ({ icon: "password", text: "Nova senha muito curta!" });
	if (!/[a-zA-Z]/.test(newPassword)) throw ({ icon: "password", text: "Nova senha precisa conter letras!" });
	if (!/\d/.test(newPassword)) throw ({ icon: "password", text: "Nova senha precisa conter números!" });
}

/**
 * @author VAMPETA
 * @brief VALIDA A CONFIRMACAO DA NOVA SENHA
 * @param newPassword NOVA SENHA
 * @param newPasswordConfirmation CONFIRMACAO DA NOVA SENHA
*/
function validationNewPasswordConfirmation(newPassword, newPasswordConfirmation) {
	if (!newPasswordConfirmation || newPasswordConfirmation.trim() === "") throw ({ icon: "password", text: "Confirme a senha!" });
	if (newPassword !== newPasswordConfirmation) throw ({ icon: "password", text: "As senhas são diferentes!" });
}

/**
 * @author VAMPETA
 * @brief VALIDA A SENHA
 * @param password SENHA DO USUARIO
*/
function validationPassword(password) {
	if (!password) throw ({ icon: "password", text: "Informe a senha atual!" });
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
	// try {
	// 	const res = await axios.patch(`${API_URL}/swap-password`, { newPassword: newPassword, password: password }, { headers: { Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}` } });
	// 	if (res.status !== 204) throw (new Error(`${res.status}\n${res.data}`));
	// 	setTimeout(() => openModal({ icon: "check-circle", text: "Senha trocada com sucesso!", handleButton: (closeModal) => handleButtonModal(closeModal, navigation) }), 100);
	// } catch (error) {
	// 	if (error.response && error.response.status === 401) throw (Object.assign(new Error(), { setIsLogin: setIsLogin }));
	// 	if (error.response && error.response.status === 403) throw (Object.assign(new Error("Senha incorreta!"), { icon: "password" }));
	// 	throw (Object.assign(new Error(error.message), { icon: "error-outline" }));
	// }



	const res = await api({
		method: "PATCH",
		url: "/swap-password",
		headers: {
			Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}`
		},
		data: {
			newPassword: newPassword,
			password: password
		}
	});

	if (res.status === 401) throw ({ setIsLogin: setIsLogin });
	if (res.status === 403) throw ({ icon: "password", text: "Senha incorreta!" });
	if (res.status === 409) throw ({ icon: "password", text: "Nova senha não pode ser igual a antiga!" });
	if (res.status !== 204) throw ({ icon: "error-outline", text: `${res.status}\n${res.data}` });
	setTimeout(() => openModal({ icon: "check-circle", text: "Senha trocada com sucesso!", handleButton: (closeModal) => handleButtonModal(closeModal, navigation) }), 100);
}

/**
 * @author VAMPETA
 * @brief TROCA A SENHA DO USUARIO
 * @param form FORMULARIO COM NOVA SENHA E ANTIGA SENHA DO USUARIO
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param openModal FUNCAO QUE ABRE O MODAL
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
export async function handleSwapPassword(form, navigation, openModal, setIsLogin) {
	validationNewPassword(form.newPassword);
	validationNewPasswordConfirmation(form.newPassword, form.newPasswordConfirmation);
	validationPassword(form.password);
	await requestSwapPassword(form.newPassword, form.password, navigation, openModal, setIsLogin);
}