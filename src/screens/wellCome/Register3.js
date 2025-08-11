import { StyleSheet, View, Image, Text } from "react-native";
import { useState, useEffect } from "react";

import Load from "../load/Load.js";
import Error from "../error/Error.js";
import Checkbox from "../../components/Checkbox.js";
import Button from "../../components/Button.js";

import { trainingLocations, validation } from "../../functions/wellcome/register3.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE CADASTRO
*/
export default function Register3({ navigation, route }) {
	const { inputName, inputEmail, inputPassword, inputCpf, inputDate, inputPhone } = route.params;
	const [load, setLoad] = useState(true);
	const [error, setError] = useState(false);
	const [selected, setSelected] = useState({});
	const [locations, setLocations] = useState([]);

	useEffect(() => { trainingLocations(setSelected, setLocations, setLoad, setError) }, []);

	if (error) return (<Error {...error} />);
	if (load) return (<Load />);

	return (
		<View style={styles.containerBetween} >
			<View style={styles.center} >
				<Image style={register3.img} source={require("../../../assets/img/athlete2.png")} />
				<Text style={styles.title} >Qual Unidade de Preferencia?</Text>
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
				<Button text="Próximo" onPress={() => validation(navigation, inputName, inputEmail, inputPassword, inputCpf, inputDate, inputPhone, selected)} />
			</View>
		</View>
	);
}

const register3 = StyleSheet.create({
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