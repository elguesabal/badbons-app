import { StyleSheet, Alert, View, Image, Text } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";

import API_URL from "../../Api.js";

import Load from "../load/Load.js";
import Error from "../error/Error.js";
import Checkbox from "../../components/Checkbox.js";
import Button from "../../components/Button.js";

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
	 * @brief FAZ UMA CONSULTA A API E RECEBE TODAS AS UNIDADES DISPONIVEIS PARA TREINO E ARMAZENA EM ARRAYS DE DUPLAS
	*/
	useEffect(() => {
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
				const result = [];
				for (let i = 0; i < res.data.length; i += 2) {
					result.push(res.data.slice(i, i + 2));
				}
				setLocations(result);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoad(false);
			}
		}
		trainingLocations();
	}, []);

	/**
	 * @author VAMPETA
	 * @brief FUNCAO RESPONSAVEL POR VALIDAR INFORMACOES E PASSAR ELAS PARA A PROXIMA SCREEN
	*/
	function validation() {
		const units = Object.keys(selected).filter((key) => selected[key]);

		if (units.length === 0) {
			Alert.alert("Atenção", "Escolha ao mínimo uma unidade!");
			return ;
		}

		navigation.navigate("register4", {
			inputNome: inputNome,
			inputEmail: inputEmail,
			inputPassword: inputPassword,
			inputCpf: inputCpf,
			inputDate: inputDate,
			inputPhone: inputPhone,
			units: units
		});
	}

	if (error) return (<Error error={error} />);
	if (load) return (<Load />);

	return (
		<View style={styles.container} >
			<Image style={register3.img} source={require("../../../assets/img/4-removebg-preview.png")} />
			<Text style={styles.title} >Qual Unidade de Preferencia?</Text>
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
				<Button text="registrar" onPress={validation} />
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