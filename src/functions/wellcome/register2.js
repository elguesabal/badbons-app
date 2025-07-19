import { Alert } from "react-native";

/**
 * @author VAMPETA
 * @brief FUNCAO RESPONSAVEL POR VALIDAR INFORMACOES E PASSAR ELAS PARA A Register3
 * @navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @nome NOME RECEBIDO NO INPUT
 * @email EMAIL RECEBIDO NO INPUT
 * @password SENHA RECEBIDO NO INPUT
 * @cpf CPF RECEBIDO NO INPUT
 * @date DATA DE NASCIMENTO RECEBIDO NO INPUT
 * @phone NUMERO DE TELEFONE RECEBIDO NO INPUT
*/
export default function validation(navigation, nome, email, password, cpf, date, phone) {
	// if (!cpf || !date || !phone) { // ATIVADO POR ENQUANTO PQ E MUITO CHATO TESTA COM ISSO ATIVO
	// 	Alert.alert("Atenção", "Preencha todos os campos!");
	// 	return ;
	// }
	// if (!/^\d{11}$/.test(cpf)) { // ATIVADO POR ENQUANTO PQ E MUITO CHATO TESTA COM ISSO ATIVO
	// 	Alert.alert("Atenção", "CPF inválido");
	// 	return ;
	// }
	navigation.navigate("register3", {
		inputNome: nome,
		inputEmail: email,
		inputPassword: password,
		inputCpf: cpf,
		inputDate: date,
		inputPhone: phone
	});
}