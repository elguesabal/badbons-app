import { StyleSheet, View, Image, Text, FlatList } from "react-native";

import Button from "../../components/Button.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE CADASTRO
*/
export default function Register4({ route }) {
	const { inputNome, inputEmail, inputPassword, inputCpf, inputDate, inputPhone, units } = route.params;

	// const data = [
	// 	{ id: 1, unit: "Taquara", address: "Rua Opnião Liberal, 315", classes: [["Segunda", "8:00", "9:30"], ["Terça", "9:30", "11:00"], ["Sabado", "11:00", "13:30"]] },
	// 	{ id: 2, unit: "Madureira", address: "Rua Opnião Liberal, 315", classes: [["Sabado", "8:00", "9:30"], ["Quinta", "9:30", "11:00"], ["Quinta", "11:00", "13:30"]] },
	// 	{ id: 3, unit: "Bonsucesso", address: "Rua Opnião Liberal, 315", classes: [["Quart", "8:00", "9:30"], ["Quarta", "9:30", "11:00"], ["Quarta", "11:00", "13:30"]] },
	// 	{ id: 4, unit: "Laboa", address: "Rua Opnião Liberal, 315", classes: [["Sabado", "8:00", "9:30"], ["Sabado", "9:30", "11:00"], ["Sabado", "11:00", "13:30"]] }
	// ];

	const data = [
		{ id: 1, unit: "Taquara", address: "Rua Opnião Liberal, 315", classes: [{ day: "Segunda", start: "8:00", end: "9:30"}, { day: "Terça", start: "9:30", end: "11:00" }, { day: "Sabado", start: "11:00", end: "13:30"}] },
		{ id: 2, unit: "Madureira", address: "Rua Opnião Liberal, 315", classes: [{ day: "Sabado", start: "8:00", end: "9:30"}, { day: "Quinta", start: "9:30", end: "11:00"}, { day: "Quinta", start: "11:00", end: "13:30"}] },
		{ id: 3, unit: "Bonsucesso", address: "Rua Opnião Liberal, 315", classes: [{ day: "Quarta", start: "8:00", end: "9:30"}, { day: "Quarta", start: "9:30", end: "11:00"}, { day: "Quarta", start: "11:00", end: "13:30"}] },
		{ id: 4, unit: "Laboa", address: "Rua Opnião Liberal, 315", classes: [{ day: "Sabado", start: "8:00", end: "9:30"}, { day: "Sabado", start: "9:30", end: "11:00"}, { day: "Sabado", start: "11:00", end: "13:30"}] }
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



		<View style={styles.containerBetween} >
			<View style={styles.center} >
				<Image style={register4.img} source={require("../../../assets/img/Design_sem_nome__1_-removebg-preview.png")} />
				<Text style={styles.title} >Escolha Sua Frequencia de Treinamento por Semana</Text>
			</View>
			<View style={register4.containerFlatListUnit} >
				<FlatList data={data} horizontal={true} keyExtractor={(item) => item.id} contentContainerStyle={styles.center} showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => (
						<View style={register4.elementFlatListUnit}>
							<View>
								<Button text={item.unit} />
								<Text style={[styles.text, register4.textAddress]} >{item.address}</Text>
							</View>
							<View style={register4.containerFlatListClass} >
								{/* <View style={register4.elementFlatListclass} >
									<Text style={styles.text} >{item.classes[0][0]}</Text>
									<View style={styles.center} >
										<Text style={styles.text} >{item.classes[0][1]}</Text>
										<Text style={styles.text} >As</Text>
										<Text style={styles.text} >{item.classes[0][2]}</Text>
									</View>
								</View>
								<View style={register4.elementFlatListclass} >
									<Text style={styles.text} >{item.classes[1][0]}</Text>
									<View style={styles.center} >
										<Text style={styles.text} >{item.classes[1][1]}</Text>
										<Text style={styles.text} >As</Text>
										<Text style={styles.text} >{item.classes[1][2]}</Text>
									</View>
								</View>
								<View style={register4.elementFlatListclass} >
									<Text style={styles.text} >{item.classes[2][0]}</Text>
									<View style={styles.center} >
										<Text style={styles.text} >{item.classes[2][1]}</Text>
										<Text style={styles.text} >As</Text>
										<Text style={styles.text} >{item.classes[2][2]}</Text>
									</View>
								</View> */}

								<FlatList data={item.classes} keyExtractor={(item) => item.id} contentContainerStyle={styles.center}
									renderItem={({ item }) => (
										<View key={item.id} >
											<Text>{item.day}</Text>
											<Text>{item.start}</Text>
											<Text>As</Text>
											<Text>{item.end}</Text>
										</View>
									)}
								/>
							</View>
						</View>
					)}
				/>
			</View>
			<View style={register4.containerButton} >
				<Button text="Próximo" onPress={null} />
			</View>
		</View>
	);
}

const register4 = StyleSheet.create({
	img: {
		width: 200,
		height: 200
	},
	containerFlatListUnit: {
		height: 300
	},
	elementFlatListUnit: {
		justifyContent: "space-around",
		alignItems: "center",
		marginHorizontal: 10,
		height: 300,
		width: 340
	},
	textAddress: {
		marginTop: 10
	},
	containerFlatListClass: {
		// backgroundColor: "#193f66",
		// flexDirection: "row",
		// alignSelf: "stretch",
		// justifyContent: "space-around",
		// height: 200,
		// marginHorizontal: 10,
		// borderRadius: 15,
		// paddingVertical: 10



		backgroundColor: "#193f66",
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-around",
		height: 200,
		marginHorizontal: 10,
		borderRadius: 15,
		paddingVertical: 10
	},
	elementFlatListclass: {
		// backgroundColor: "#2c6bae",
		// justifyContent: "space-evenly",
		// alignItems: "center",
		// borderRadius: 20,
		// height: 150,
		// width: 90,
		// borderWidth: 0.2,
		// borderColor: "white"


		
	},
	containerButton: {
		alignSelf: "stretch",
		alignItems: "flex-end",
		marginRight: "10%"
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




// PENSEI EM CRIAR OS BOTOES DE DIAS DA SEMANA DISPONIVEIS E ELES SEREM CLICADOS E LEVAREM O CLIENTE ATE OS HORARIOS DAQUELE DIA