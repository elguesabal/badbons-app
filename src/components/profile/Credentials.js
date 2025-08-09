import { StyleSheet, View, Text } from "react-native";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE RESPONSAVEL PELA SECAO DE "Geral" DA ABA PERFIL
 * @param style ESTILIZACAO EXTRA DO COMPONENTE
 * @param date DATA DE NASCIMENTO DO USUARIO
*/
export default function Credentials({ style, date }) {
	return (
		<View style={[credentials.container, style]} >
			<Text style={credentials.title} >Detalhes Pessoais</Text>
			<View style={credentials.line} >
				<Text style={credentials.textInfo} >País de Origem</Text>
				<Text style={credentials.textCredentials} >Japão</Text>
			</View>
			<View style={credentials.line} >
				<Text style={credentials.textInfo} >Data de Nascimento</Text>
				<Text style={credentials.textCredentials} >{date}</Text>
			</View>
			<View style={credentials.line} >
				<Text style={credentials.textInfo} >Idade</Text>
				<Text style={credentials.textCredentials} >????</Text>
			</View>
			<View style={credentials.line} >
				<Text style={credentials.textInfo} >Primeira visita ao App</Text>
				<Text style={credentials.textCredentials} >--/--/----</Text>
			</View>
			<View style={credentials.line} >
				<Text style={credentials.textInfo} >Sexo</Text>
				<Text style={credentials.textCredentials} >Masculino</Text>
			</View>
		</View>
	);
}

const credentials = StyleSheet.create({
	container: {

	},
	title: {
		color: theme.primaryTextColor,
		fontSize: 15,
		marginBottom: 5
	},
	line: {
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-between",
		borderBottomWidth: 1,
		borderBottomColor: theme.secondaryTextColor,
		paddingVertical: 10
	},
	textInfo: {
		color: theme.secondaryTextColor
	},
	textCredentials: {
		color: theme.primaryTextColor
	},
});