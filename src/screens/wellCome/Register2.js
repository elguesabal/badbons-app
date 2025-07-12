import { StyleSheet, View, Image } from "react-native";
import { useState } from "react";
import axios from "axios";
import { Alert } from "react-native";

import API_URL from "../../Api.js";

import Load from "../load/Load.js";
import Error from "../error/Error.js";
import Registration from "./Registration.js";
import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE CADASTRO
*/
export default function Cadastrar2({ route }) {
	const [load, setLoad] = useState(false);
	const [error, setError] = useState("");
	const [registration, setRegistration] = useState(false);
	const { inputNome, inputEmail, inputPassword } = route.params;
	const [inputCpf, setInputCpf] = useState("");
	const [inputDate, setInputDate] = useState("");
	const [inputPhone, setInputPhone] = useState("");

	/**
	 * @author VAMPETA
	 * @brief FUNCAO RESPONSAVEL POR VALIDAR INFORMACOES E ENVIAR PARA A API
	*/
	async function hundleRegister() {
		if (!inputCpf || !inputDate || !inputPhone) {
			Alert.alert("Atenção", "Preencha todos os campos!");
			return ;
		}
		// if (!/^\d{11}$/.test(inputCpf)) { // ATIVADO POR ENQUANTO PQ E MUITO CHATO TESTA COM ISSO ATIVO
		// 	Alert.alert("Atenção", "CPF inválido");
		// 	return ;
		// }

		setLoad(true);
		setError("");

		try {
			const res = await axios.post(`${API_URL}/register`, { nome: inputNome, email: inputEmail, password: inputPassword, cpf: inputCpf, date: inputDate, phone: inputPhone });
			if (res.status === 200) setRegistration(true);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoad(false);
		}
	}

	if (registration) return (<Registration />);
	if (error) return (<Error error={error} />);
	if (load) return (<Load />);
	return (
		<View style={styles.container} >
			<Image style={register2.img} source={require("../../../assets/img/Design_sem_nome__1_-removebg-preview.png")} />
			<Input placeholder="CPF" value={inputCpf} onChangeText={setInputCpf} />
			<Input placeholder="Data de nascimento" value={inputDate} onChangeText={setInputDate} />
			<Input placeholder="Celular" value={inputPhone} onChangeText={setInputPhone} />
			<View style={register2.containerButton} >
				<Button text="registrar" onPress={hundleRegister} />
			</View>
		</View>
	);
}

const register2 = StyleSheet.create({
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