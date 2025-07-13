import { StyleSheet, View, Image, Text } from "react-native";
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
export default function Register3() {
	const [load, setLoad] = useState(false);
	const [error, setError] = useState("");
	const [locations, setLocations] = useState([]);
	const [selected, setSelected] = useState({});

	useEffect(() => {
		async function trainingLocations() {
			try {
				const res = await axios.get(`${API_URL}/training-locations`);
				if (res.status !== 200) {
					setError("error");
					return ;
				}
				setLocations(res.data);
				const initialSelected = {};
				res.data.forEach((unit) => initialSelected[unit] = false);
				setSelected(initialSelected);
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
	 * @brief 
	*/
	function toggleSelection(element) {
		setSelected((prev) => ({
			...prev,
			[element]: !prev[element],
		}));
	}

	/**
	 * @author VAMPETA
	 * @brief FUNCAO RESPONSAVEL POR VALIDAR INFORMACOES E PASSAR ELAS PARA A PROXIMA SCREEN
	*/
	function validation() {

	}

	if (error) return (<Error error={error} />);
	if (load) return (<Load />);

	return (
		<View style={styles.container} >
			<Image style={register3.img} source={require("../../../assets/img/4-removebg-preview.png")} />
			<Text style={styles.title}>Qual Unidade de Preferencia?</Text>


			{locations.map((element) => (
				<Checkbox key={element} text={element} setCheckbox={() => toggleSelection(element)} inputCheckbox={selected[element]} />
			))}


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
	}
});