import { Alert } from "react-native";

/**
 * @author VAMPETA
 * @brief FUNCAO RESPONSAVEL POR VALIDAR INFORMACOES E PASSAR ELAS PARA A Register2
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @param nome NOME RECEBIDO NO INPUT
 * @param email EMAIL RECEBIDO NO INPUT
 * @param password SENHA RECEBIDO NO INPUT
*/
export function validation(navigation, nome, email, password) {
	// if (!nome || !email || !password) { // ATIVADO POR ENQUANTO PQ E MUITO CHATO TESTA COM ISSO ATIVO
	// 	Alert.alert("Atenção", "Preencha todos os campos!");
	// 	return ;
	// }
	// if (!/\S+@\S+\.\S+/.test(email)) { // ATIVADO POR ENQUANTO PQ E MUITO CHATO TESTA COM ISSO ATIVO
	// 	Alert.alert("Atenção", "Email inválido!");
	// 	return ;
	// }
	navigation.navigate("register2", {
		inputNome: nome,
		inputEmail: email,
		inputPassword: password
	});
}