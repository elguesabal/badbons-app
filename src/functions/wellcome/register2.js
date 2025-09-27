/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO DE CPF
 * @param cpf CPF DO USUARIO
*/
function validationCpf(cpf) {
	if (!cpf || cpf.trim() === "") throw (Object.assign(new Error("Informe um CPF!"), { icon: "badge" }));
	// if (!/^\d{11}$/.test(cpf)) throw (Object.assign(new Error("CPF inválido!"), { icon: "badge" }));
}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO DE DATA DE NASCIMENTO
 * @param date DATA DE NASCIMENTO DO USUARIO
*/
function validationDate(date) {
	const [day, month, year] = date.split("/").map(Number);
	const birth = new Date(year, month - 1, day);
	const today = new Date();

	if (!date || date.trim() === "") throw (Object.assign(new Error("Informe sua data de nascimento!"), { icon: "calendar-month" }));
	// if (date.split("/").length !== 3) throw (Object.assign(new Error("Formato de data inválido!\nUse DD/MM/AAAA"), { icon: "calendar-month" }));
	// if (!(birth.getDate() === day && birth.getMonth() === month - 1 && birth.getFullYear() === year)) throw (Object.assign(new Error("Data de nascimento inválida!"), { icon: "calendar-month" }));
	// if (birth > today || year < 1950) throw (Object.assign(new Error("Data de nascimento inválida!"), { icon: "calendar-month" }));
}

/**
 * @author VAMPETA
 * @brief VALIDA O CAMPO DE TELEFONE
 * @param phone NUMERO DE TELEFONE DO USUARIO
*/
function validationPhone(phone) {
	if (!phone || phone.trim() === "") throw (Object.assign(new Error("Informe um telefone!"), { icon: "phone" }));
	// if (!/^\d{11}$/.test(phone)) throw (Object.assign(new Error("Número de telefone inválido!"), { icon: "phone" }));
}

/**
 * @author VAMPETA
 * @brief FUNCAO RESPONSAVEL POR VALIDAR INFORMACOES E PASSAR ELAS PARA A Register3
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param form INFORMACOES DE CADASTRO DO USUARIO
*/
export function validation(navigation, form) {
	validationCpf(form.cpf);
	validationDate(form.date);
	validationPhone(form.phone);
	navigation.navigate("register3", form);
}