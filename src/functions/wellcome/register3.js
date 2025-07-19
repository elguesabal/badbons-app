import { Alert } from "react-native";

/**
 * @author VAMPETA
 * @brief FUNCAO RESPONSAVEL POR VALIDAR INFORMACOES E PASSAR ELAS PARA A PROXIMA SCREEN
 * @navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
 * @nome NOME RECEBIDO NO INPUT
 * @email EMAIL RECEBIDO NO INPUT
 * @password SENHA RECEBIDO NO INPUT
 * @cpf CPF RECEBIDO NO INPUT
 * @date DATA DE NASCIMENTO RECEBIDO NO INPUT
 * @phone NUMERO DE TELEFONE RECEBIDO NO INPUT
 * @selected ARRAY DE CHAVES DE UNIDADES MARCADAS COM TRUE OU FALSE (TRUE A UNIDADE FOI SELECIONADA E FALSE NAO)
*/
export default function validation(navigation, nome, email, password, cpf, date, phone, selected) {
	const units = Object.keys(selected).filter((key) => selected[key]);

	if (units.length === 0) {
		Alert.alert("Atenção", "Escolha ao mínimo uma unidade!");
		return ;
	}
	navigation.navigate("register4", {
		inputNome: nome,
		inputEmail: email,
		inputPassword: password,
		inputCpf: cpf,
		inputDate: date,
		inputPhone: phone,
		units: units
	});
}