/**
 * @author VAMPETA
 * @brief FUNCAO RESPONSAVEL POR VALIDAR INFORMACOES E PASSAR ELAS PARA A Register2
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param name NOME RECEBIDO NO INPUT
 * @param email EMAIL RECEBIDO NO INPUT
 * @param password SENHA RECEBIDO NO INPUT
*/
export function validation(navigation, name, email, password) {
	if (!name || !email || !password) {
		const err = new Error("Preencha todos os campos!");
		err.icon = "edit-document";
		err.button = "Ok";
		throw (err);
	}
	if (!/\S+@\S+\.\S+/.test(email)) {
		const err = new Error("Email inválido!");
		err.icon = "alternate-email";
		err.button = "Ok";
		throw (err);
	}
	navigation.navigate("register2", {
		inputNome: name,
		inputEmail: email,
		inputPassword: password
	});
}