import { Keyboard } from "react-native";

/**
 * @author VAMPETA
 * @brief GERENCIA A FUNCAO PASSADA PARA O Button
 * @param openModal FUNCAO QUE ABRE O MODAL
 * @param closeModal FUNCAO QUE FECHA O MODAL
 * @param onPress FUNCAO PASSADA PARA O BOTAO
 * @param load VARIAVEL QUE DECIDE SE ATIVA O SPINNER DE LOAD DO BOTAO OU NAO
*/
export async function handleButton(openModal, closeModal, onPress, load) {
	try {
		Keyboard.dismiss();
		if (load) openModal({ load: true });
		if (onPress) await onPress();
		if (load) closeModal();
	} catch (error) {
		if (error.message === "Network Error") {
			openModal({ icon: "wifi-off", text: "Sem conexão com a internet", button: "Ok" });
		} else {
			openModal({ icon: error.icon, text: error.message, status: error.status, button: error.button });
		}
	}
}