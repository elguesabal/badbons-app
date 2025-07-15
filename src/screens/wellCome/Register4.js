import { StyleSheet, View, Image, Text } from "react-native";

import styles from "../../styles/styles.js";

export default function Register4({ route }) {
	const { inputNome, inputEmail, inputPassword, inputCpf, inputDate, inputPhone, units } = route.params;
	return (
		<View style={styles.container} >
			<Image style={register4.img} source={require("../../../assets/img/Design_sem_nome__1_-removebg-preview.png")} />

			<Text style={styles.text} >Nome: "{inputNome}"</Text>
			<Text style={styles.text} >Email: "{inputEmail}"</Text>
			<Text style={styles.text} >Senha: "{inputPassword}"</Text>
			<Text style={styles.text} >CPF: "{inputCpf}"</Text>
			<Text style={styles.text} >Data de nascimento: "{inputDate}"</Text>
			<Text style={styles.text} >Celular: "{inputPhone}"</Text>
			<Text style={styles.text} >Unidades: "{units.map((unit, i) => (<Text key={i} > {unit} </Text>))}"</Text>
		</View>
	);
}

const register4 = StyleSheet.create({
	img: {
		width: 200,
		height: 200
	},
});