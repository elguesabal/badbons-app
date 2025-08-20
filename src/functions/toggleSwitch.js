
/**
 * @author VAMPETA
 * @brief GERENCIA A FUNCAO PASSADA COM O SPINNER DO SWITCH
 * @param setSpinner FUNCAO QUE ATIVA E DESATIVA O SPINNER
 * @param onValueChange FUNCAO PASSADA PARA O SWITCH
*/
export async function handleToggleSwitch(setSpinner, onValueChange) {
	try {
		setSpinner(true);
		await onValueChange();
	} finally {
		setSpinner(false);
	}
}