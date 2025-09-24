import { StyleSheet, View, Text } from "react-native";
import { useEffect, useState } from "react";

import { getCredentials } from "../../functions/profile/credentials.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE RESPONSAVEL PELA SECAO DE "Geral" DA ABA PERFIL
 * @param style ESTILIZACAO EXTRA DO COMPONENTE
*/
export default function Credentials({ style }) {
	const [data, setData] = useState({});

	useEffect(() => { getCredentials(setData) },[]);
	return (
		<View style={[credentials.container, style]} >
			<Text style={credentials.title} >Detalhes Pessoais</Text>
			<View style={credentials.line} >
				<Text style={credentials.textInfo} >País de Origem</Text>
				<Text style={credentials.textCredentials} >{data.nationality}</Text>
			</View>
			<View style={credentials.line} >
				<Text style={credentials.textInfo} >Data de Nascimento</Text>
				<Text style={credentials.textCredentials} >{data.date}</Text>
			</View>
			<View style={credentials.line} >
				<Text style={credentials.textInfo} >Idade</Text>
				<Text style={credentials.textCredentials} >{data.age}</Text>
			</View>
			<View style={credentials.line} >
				<Text style={credentials.textInfo} >Primeira visita ao App</Text>
				<Text style={credentials.textCredentials} >--/--/----</Text>
			</View>
			<View style={credentials.line} >
				<Text style={credentials.textInfo} >Sexo</Text>
				<Text style={credentials.textCredentials} >{data.sex}</Text>
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