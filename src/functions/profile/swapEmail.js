
/**
 * @author VAMPETA
 * @brief VALIDA A TROCA DO EMAIL DO USUARIO
 * @param newEmail NOVO EMAIL
 * @param newEmailConfirmation CONFIRMACAO DO NOVO EMAIL
*/
function validation(newEmail, newEmailConfirmation) {
	if (!newEmail || !newEmailConfirmation) {
		alert("campo vazios")
	}
	if (newEmail !== newEmailConfirmation) {
		alert("email diferentes")
	}
}

/**
 * @author VAMPETA
 * @brief TROCA O EMAIL DO USUARIO
 * @param newEmail NOVO EMAIL
 * @param newEmailConfirmation CONFIRMACAO DO NOVO EMAIL
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
*/
export default function requestSwapEmail(newEmail, newEmailConfirmation, navigation) {
	if (validation(newEmail, newEmailConfirmation)) return ;
}