import { logout } from "./logout";

/**
 * @author VAMPETA
 * @brief GERENCIA A FUNCAO PASSADA PARA O ToggleSwitch
 * @param openModal FUNCAO QUE ABRE O MODAL
 * @param closeModal FUNCAO QUE FECHA O MODAL
 * @param onValueChange FUNCAO PASSADA PARA O SWITCH
*/
export async function handleToggleSwitch(openModal, closeModal, onValueChange) {
	try {
		openModal({ load: true });
		await onValueChange();
		closeModal();
	} catch(error) {
		if (error.status === 0 && error.data === "Network Error") {
			openModal({ icon: "wifi-off", text: "Sem conexão com o servidor.\nTentar novamente?", yes: () => handleToggleSwitch(openModal, closeModal, onValueChange), no: (closeModal) => closeModal(), exit: (closeModal) => closeModal() });
		} else if (error.setIsLogin) {
			logout(error.setIsLogin);
			if (error.closeSheet) error.closeSheet();
			closeModal();
		} else {
			// openModal({ icon: "error-outline", text: error.data, ...error });
			openModal({ icon: "error-outline", text: (typeof error.data === "string") ? error.data : undefined, ...error });
		}
	}
}