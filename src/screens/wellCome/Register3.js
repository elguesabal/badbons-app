import { StyleSheet, View, Image, Text } from "react-native";
import { useState, useEffect } from "react";

import Load from "../load/Load.js";
import Error from "../error/Error.js";
import Checkbox from "../../components/Checkbox.js";
import Button from "../../components/Button.js";

import { trainingLocations, validation } from "../../functions/wellcome/register3.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief TELA DE CADASTRO
 * @param navigation FUNCAO QUE CONTROLA A NAVEGACAO ENTRE AS SCREENS
 * @param route OBJETO COM PARAMETROS DA SCREEN ANTERIOR
*/
export default function Register3({ navigation, route }) {
	const [load, setLoad] = useState(true);
	const [error, setError] = useState(false);
	const [selected, setSelected] = useState({});
	const [locations, setLocations] = useState([]);

	useEffect(() => { trainingLocations(setSelected, setLocations, setLoad, setError) }, []);

	if (error) return (<Error {...error} />);
	if (load) return (<Load />);

	return (
		<View style={register3.container} >
			<View style={register3.containerHeader} >
				<Image style={register3.img} source={require("../../../assets/img/athlete2.png")} />
				<Text style={register3.title} >Qual Unidade de Preferencia?</Text>
			</View>
			<View style={register3.containerGroups} >
				{locations.map((group, i) => (
					<View key={i} style={register3.groupTrainingLocations} >
						{group.map((element, j) => (
							<Checkbox key={j} text={element} setCheckbox={(value) => setSelected((prev) => ({ ...prev, [element]: value }))} inputCheckbox={selected[element]} />
						))}
					</View>
				))}
			</View>
			<View style={register3.containerButton} >
				<Button text="Próximo" onPress={() => validation(navigation, route.params, selected)} />
			</View>
		</View>
	);
}

const register3 = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-between",
		paddingBottom: "20%"
	},
	containerHeader: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	title: {
		color: theme.primaryTextColor,
		fontSize: 25,
		marginHorizontal: "10%"
	},
	img: {
		width: 200,
		height: 200
	},
	containerGroups: {
		flex: 1,
		alignSelf: "stretch",
		justifyContent: "center",
	},
	groupTrainingLocations: {
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-evenly",
		marginVertical: 10
	},
	containerButton: {
		alignSelf: "stretch",
		alignItems: "flex-end",
		marginRight: "10%"
	}
});