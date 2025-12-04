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
console.log("veio aki: ", error);		// PQ TA DANDO ERRO EM CASO DE FALHA EM BUSCAR AS CREDENCIAIS? ACHO Q E PQ "error.data" E UM OBJETO
		if (error.message === "Network Error" || error.status === 0) {
			openModal({ icon: "wifi-off", text: "Sem conexão com o servidor.\nTentar novamente?", yes: () => handleButton(openModal, closeModal, onPress, load), no: (closeModal) => closeModal(), exit: (closeModal) => closeModal() });
		} else if (error.setIsLogin) {
			logout(error.setIsLogin);
			if (error.closeSheet) error.closeSheet();
			closeModal();
		} else {
			openModal({ icon: "error-outline", text: error.data, ...error });
		}
	}
}