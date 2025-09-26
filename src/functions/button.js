import { Keyboard } from "react-native";

import { logout } from "./logout";

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
			openModal({ icon: "wifi-off", text: "Sem conexão com o servidor.\nTentar novamente?", yes: () => handleButton(openModal, closeModal, onPress, load), no: (closeModal) => closeModal(), exit: (closeModal) => closeModal() });
		} else if (error.setIsLogin) {
			logout(error.setIsLogin);
			closeModal();
		} else {
			openModal({ exit: error.exit, icon: error.icon, text: error.message, status: error.status, handleButton: error.handleButton, button: error.button, yes: error.yes, no: error.no  });
		}
	}
}