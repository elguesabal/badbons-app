import { StyleSheet, View, Image, Text, FlatList } from "react-native";

import Button from "../../components/Button.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE CADASTRO
*/
export default function Register4({ route }) {
	const { inputNome, inputEmail, inputPassword, inputCpf, inputDate, inputPhone, units } = route.params;

	const data = [
		{ id: 1, unit: "Taquara", address: "Rua Opnião Liberal, 315", classes: [["8:00", "9:30"], ["9:30", "11:00"], ["11:00", "13:30"]] },
		{ id: 2, unit: "Taquara", address: "Rua Opnião Liberal, 315", classes: [["8:00", "9:30"], ["9:30", "11:00"], ["11:00", "13:30"]] },
		{ id: 3, unit: "Taquara", address: "Rua Opnião Liberal, 315", classes: [["8:00", "9:30"], ["9:30", "11:00"], ["11:00", "13:30"]] },
		{ id: 4, unit: "Taquara", address: "Rua Opnião Liberal, 315", classes: [["8:00", "9:30"], ["9:30", "11:00"], ["11:00", "13:30"]] }
	];

	return (
		// <View style={styles.container} >
		// 	<Image style={register4.img} source={require("../../../assets/img/Design_sem_nome__1_-removebg-preview.png")} />

		// 	<Text style={styles.text} >Nome: "{inputNome}"</Text>
		// 	<Text style={styles.text} >Email: "{inputEmail}"</Text>
		// 	<Text style={styles.text} >Senha: "{inputPassword}"</Text>
		// 	<Text style={styles.text} >CPF: "{inputCpf}"</Text>
		// 	<Text style={styles.text} >Data de nascimento: "{inputDate}"</Text>
		// 	<Text style={styles.text} >Celular: "{inputPhone}"</Text>
		// 	<Text style={styles.text} >Unidades: "{units.map((unit, i) => (<Text key={i} > {unit} </Text>))}"</Text>
		// </View>



		<View style={styles.container} >
			<Image style={register4.img} source={require("../../../assets/img/Design_sem_nome__1_-removebg-preview.png")} />
			<Text style={styles.title} >Escolha Sua Frequencia de Treinamento por Semana</Text>
			<FlatList data={data} horizontal={true} keyExtractor={(item) => item.id} contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
				renderItem={({ item }) => (
					<View style={{ backgroundColor: "red", justifyContent: "center", alignItems: "center", marginHorizontal: 10, width: 200, height: 200 }}>
						<Button text={item.unit}/>
						<Text style={styles.text} >{item.address}</Text>
						<View style={{ flexDirection: "row", alignSelf: "stretch", justifyContent: "space-evenly" }} >
							<View>
								<Text style={styles.text} >{item.classes[0][0]}</Text>
								<Text style={styles.text} >As</Text>
								<Text style={styles.text} >{item.classes[0][1]}</Text>
							</View>
							<View>
								<Text style={styles.text} >{item.classes[1][0]}</Text>
								<Text style={styles.text} >As</Text>
								<Text style={styles.text} >{item.classes[1][1]}</Text>
							</View>
							<View>
								<Text style={styles.text} >{item.classes[2][0]}</Text>
								<Text style={styles.text} >As</Text>
								<Text style={styles.text} >{item.classes[2][1]}</Text>
							</View>
						</View>
					</View>
				)}
			/>
		</View>
	);
}

const register4 = StyleSheet.create({
	img: {
		width: 200,
		height: 200
	},
});



		// EXEMPLO DE USO DE FlatList

// import { View, Text, FlatList } from 'react-native';

// export default function Register4() {
// 	const dados = [];

// 	for (let i = 0; i <= 20; i++) {
// 		dados.push({ id: i, nome: `item ${i}` });
// 	}

// 	return (
// 		<FlatList data={dados} horizontal={true} keyExtractor={(item) => item.id} contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
// 			renderItem={({ item }) => (
// 				<View style={{ backgroundColor: "red", justifyContent: "center", alignItems: "center", marginHorizontal: 10, width: 200, height: 200 }}>
// 					<Text>{item.nome}</Text>
// 				</View>
// 			)}
// 		/>
// 	);
// }