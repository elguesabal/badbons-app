import { StyleSheet, Alert, View, Image, Text } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

import API_URL from "../../Api.js";

import Load from "../load/Load.js";
import Error from "../error/Error.js";
import Checkbox from "../../components/Checkbox.js";
import Button from "../../components/Button.js";

import validation from "../../functions/wellcome/register3.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE CADASTRO
*/
export default function Register3({ navigation, route }) {
	const { inputNome, inputEmail, inputPassword, inputCpf, inputDate, inputPhone } = route.params;
	const [load, setLoad] = useState(true);
	const [error, setError] = useState("");
	const [selected, setSelected] = useState({});
	const [locations, setLocations] = useState([]);

	/**
	 * @author VAMPETA
	 * @brief SEPARA OS ELEMENTOS DO ARRAY EM DUPLAS
	 * @param array ARRAY Q SERA DIVIDIDO EM DUPLAS
	 * @return RETORNA O NOVO ARRAY EM DUPLAS
	*/
	function doubleUnits(array) {
		const result = [];
		for (let i = 0; i < array.length; i += 2) result.push(array.slice(i, i + 2));
		return (result);
	}

	/**
	 * @author VAMPETA
	 * @brief FAZ UMA CONSULTA A API E RECEBE TODAS AS UNIDADES DISPONIVEIS PARA TREINO
	*/
	async function trainingLocations() {
		try {
			const res = await axios.get(`${API_URL}/training-locations`);
			if (res.status !== 200) {
				setError("error");
				return ;
			}
			const initialSelected = {};
			res.data.forEach((unit) => initialSelected[unit] = false);
			setSelected(initialSelected);
			setLocations(doubleUnits(res.data));
		} catch (error) {
			setError(error.message);
		} finally {
			setLoad(false);
		}
	}

	useEffect(() => {
		trainingLocations();
	}, []);

	if (error) return (<Error error={error} />);
	if (load) return (<Load />);

	return (
		<View style={styles.containerBetween} >
			<View style={styles.center} >
				<Image style={register3.img} source={require("../../../assets/img/4-removebg-preview.png")} />
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
				<Button text="Próximo" onPress={() => validation(navigation, inputNome, inputEmail, inputPassword, inputCpf, inputDate, inputPhone, selected)} />
			</View>
		</View>
	);
}

const register3 = StyleSheet.create({
	img: {
		width: 200,
		height: 200
	},
	containerButton: {
		alignSelf: "stretch",
		alignItems: "flex-end",
		marginRight: "10%"
	},
	containerGroups: {
		alignSelf: "stretch",
		justifyContent: "center",
		marginVertical: 20
	},
	groupTrainingLocations: {
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-evenly",
		marginVertical: 10
	}
});