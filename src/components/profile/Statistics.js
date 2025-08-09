import { StyleSheet, View, Text } from "react-native";

/**
 * @author VAMPETA
 * @brief COMPONENTE RESPONSAVEL PELA SECAO DE "Estatísticas" DA ABA PERFIL
 * @param style ESTILIZACAO EXTRA DO COMPONENTE
*/
export default function Statistics({ style }) {
	return (
		<View style={[statistics.container, style]} >
			<Text style={{ color: "white" }} >ainda nao tem nada aki</Text>
		</View>
	);
}

const statistics = StyleSheet.create({
	container: {
		backgroundColor: "green",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "stretch",
		height: 100,
		marginHorizontal: "10%",
		marginTop: 25
	}
});