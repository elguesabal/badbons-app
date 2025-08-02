import { Alert } from "react-native";

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
	if (!cpf || !date || !phone) {
		Alert.alert("Atenção", "Preencha todos os campos!");
		return ;
	}
	if (!/^\d{11}$/.test(cpf)) {
		Alert.alert("Atenção", "CPF inválido");
		return ;
	}
	navigation.navigate("register3", {
		inputNome: name,
		inputEmail: email,
		inputPassword: password,
		inputCpf: cpf,
		inputDate: date,
		inputPhone: phone
	});
}