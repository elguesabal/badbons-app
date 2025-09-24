function validationCpf(cpf) {
	let err;

	if (!cpf || cpf.trim() === "") err = new Error("Informe um CPF!");
	// if (!/^\d{11}$/.test(cpf)) err = new Error("CPF inválido!");
	if (err) {
		err.icon = "badge";
		err.button = "Ok";
		throw (err);
	}
}

function validationDate(date) {
	const [day, month, year] = date.split("/").map(Number);
	const birth = new Date(year, month - 1, day);
	const today = new Date();
	let err;

	if (!date || date.trim() === "") err = new Error("Informe sua data de nascimento!");
	if (!err && (date.split("/").length !== 3)) err = new Error("Formato de data inválido!\nUse DD/MM/AAAA");
	if (!err && (!(birth.getDate() === day && birth.getMonth() === month - 1 && birth.getFullYear() === year))) err = new Error("Data de nascimento inválida!");
	if (!err && (birth > today || year < 1950)) err = new Error("Data de nascimento inválida!");
	if (err) {
		err.icon = "calendar-month";
		err.button = "Ok";
		throw (err);
	}
}

function validationPhone(phone) {
	let err;

	if (!phone || phone.trim() === "") err = new Error("Informe um telefone!");
	// if (!err && (!/^\d{11}$/.test(phone))) err = new Error("Número de telefone inválido!");
	if (err) {
		err.icon = "phone";
		err.button = "Ok";
		throw (err);
	}
}

/**
 * @author VAMPETA
 * @brief FUNCAO RESPONSAVEL POR VALIDAR INFORMACOES E PASSAR ELAS PARA A Register3
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param name NOME RECEBIDO NO INPUT
 * @param email EMAIL RECEBIDO NO INPUT
 * @param password SENHA RECEBIDO NO INPUT
 * @param cpf CPF RECEBIDO NO INPUT
 * @param date DATA DE NASCIMENTO RECEBIDO NO INPUT
 * @param phone NUMERO DE TELEFONE RECEBIDO NO INPUT
*/
export function validation(navigation, name, email, password, cpf, date, phone) {
	validationCpf(cpf);
	validationDate(date);
	validationPhone(phone);
	navigation.navigate("register3", {
		inputNome: name,
		inputEmail: email,
		inputPassword: password,
		inputCpf: cpf,
		inputDate: date,
		inputPhone: phone
	});
}