/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO DE NOME
 * @param name NOME DO USUARIO
*/
function validationName(name) {
	if (!name || name.trim() === "") throw (Object.assign(new Error("Informe um nome!"), { icon: "edit-document", button: "Ok" }));
}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO DE EMAIL
 * @param email EMAIL DO USUARIO
*/
function validationEmail(email) {
	if (!email || email.trim() === "") throw (Object.assign(new Error("Informe um Email!"), { icon: "alternate-email", button: "Ok" }));
	if (!/\S+@\S+\.\S+/.test(email)) throw (Object.assign(new Error("Email inválido!"), { icon: "alternate-email", button: "Ok" }));
}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO DE SENHA
 * @param password SENHA DO USUARIO
*/
function validationPassword(password) {
	if (!password || password.trim() === "") throw (Object.assign(new Error("Informe uma senha!"), { icon: "password", button: "Ok" }));
	if (password.length < 5) throw (Object.assign(new Error("Senha muito curta!"), { icon: "password", button: "Ok" }));
}

/**
 * @author VAMPETA
 * @brief FUNCAO RESPONSAVEL POR VALIDAR INFORMACOES E PASSAR ELAS PARA A Register2
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param name NOME RECEBIDO NO INPUT
 * @param email EMAIL RECEBIDO NO INPUT
 * @param password SENHA RECEBIDO NO INPUT
*/
export function validation(navigation, form) {
	validationName(form.name);
	validationEmail(form.email);
	validationPassword(form.password);
	navigation.navigate("register2", {
		inputNome: form.name,
		inputEmail: form.email,
		inputPassword: form.password
	});
}