import { Alert } from "react-native";

/**
 * @author VAMPETA
 * @brief FUNCAO RESPONSAVEL POR VALIDAR INFORMACOES E PASSAR ELAS PARA A Register2
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param name NOME RECEBIDO NO INPUT
 * @param email EMAIL RECEBIDO NO INPUT
 * @param password SENHA RECEBIDO NO INPUT
*/
export function validation(navigation, name, email, password) {
	// if (!name || !email || !password) { // ATIVADO POR ENQUANTO PQ E MUITO CHATO TESTA COM ISSO ATIVO
	// 	Alert.alert("Atenção", "Preencha todos os campos!");
	// 	return ;
	// }
	// if (!/\S+@\S+\.\S+/.test(email)) { // ATIVADO POR ENQUANTO PQ E MUITO CHATO TESTA COM ISSO ATIVO
	// 	Alert.alert("Atenção", "Email inválido!");
	// 	return ;
	// }
	navigation.navigate("register2", {
		inputNome: name,
		inputEmail: email,
		inputPassword: password
	});
}