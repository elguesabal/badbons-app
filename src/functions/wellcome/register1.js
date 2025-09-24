/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO DE NOME
 * @param name NOME DO USUARIO
*/
function validationName(name) {
	let err;

	if (!name || name.trim() === "") err = new Error("Informe um nome!");
	if (err) {
		err.icon = "edit-document";
		err.button = "Ok";
		throw (err);
	}
}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO DE EMAIL
 * @param email EMAIL DO USUARIO
*/
function validationEmail(email) {
	let err;

	if (!email || email.trim() === "") err = new Error("Informe um Email!");
	// if (!err && (!/\S+@\S+\.\S+/.test(email))) err = new Error("Email inválido!");
	if (err) {
		err.icon = "alternate-email";
		err.button = "Ok";
		throw (err);
	}
}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO DE SENHA
 * @param password SENHA DO USUARIO
*/
function validationPassword(password) {
	let err;

	if (!password || password.trim() === "") err = new Error("Informe uma senha!");
	if (!err && (password.length < 5)) err = new Error("Senha muito curta!");
	if (err) {
		err.icon = "password";
		err.button = "Ok";
		throw (err);
	}
}

/**
 * @author VAMPETA
 * @brief FUNCAO RESPONSAVEL POR VALIDAR INFORMACOES E PASSAR ELAS PARA A Register2
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param name NOME RECEBIDO NO INPUT
 * @param email EMAIL RECEBIDO NO INPUT
 * @param password SENHA RECEBIDO NO INPUT
*/
export function validation(navigation, name, email, password) {
	validationName(name);
	validationEmail(email);
	validationPassword(password);
	navigation.navigate("register2", {
		inputNome: name,
		inputEmail: email,
		inputPassword: password
	});
}