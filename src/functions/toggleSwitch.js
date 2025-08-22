/**
 * @author VAMPETA
 * @brief GERENCIA A FUNCAO PASSADA COM O SPINNER DO SWITCH
 * @param openModal FUNCAO QUE ABRE O MODAL
 * @param closeModal FUNCAO QUE FECHA O MODAL
 * @param onValueChange FUNCAO PASSADA PARA O SWITCH
*/
export async function handleToggleSwitch(openModal, closeModal, onValueChange) {
	try {
		openModal({ spinner: true });
		await onValueChange();
	} finally {
		closeModal();
	}
}