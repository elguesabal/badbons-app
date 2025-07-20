import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import { useState, useRef, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons';

import Load from "../load/Load.js";
import Error from "../error/Error.js";
import Button from "../../components/Button.js";

import { getTimetable, scrollToIndex } from "../../functions/wellcome/register4.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE CADASTRO
*/
export default function Register4({ route }) {
	const { inputNome, inputEmail, inputPassword, inputCpf, inputDate, inputPhone, units } = route.params;
	const [load, setLoad] = useState(true);
	const [error, setError] = useState("");
	const [data, setData] = useState([]);
	const flatListRef = useRef(null);
	const [selectedTimes, setSelectedTimes] = useState({});

	useEffect(() => {
		getTimetable(units, setSelectedTimes, setData, setLoad, setError);
	}, []);

	if (error) return (<Error error={error} />);
	if (load) return (<Load />);

	return (
		<View style={styles.containerBetween} >
			<View style={styles.center} >
				<Image style={register4.img} source={require("../../../assets/img/Design_sem_nome__1_-removebg-preview.png")} />
				<Text style={styles.title} >Escolha Sua Frequencia de Treinamento por Semana</Text>
			</View>
			<View style={register4.containerFlatListUnit} >
				<FlatList data={data} horizontal={true} keyExtractor={(item) => item.id} contentContainerStyle={styles.center} showsHorizontalScrollIndicator={false} ref={flatListRef}
					renderItem={({ item }) => (
						<View style={register4.elementFlatListUnit}>
							<View style={register4.containerAddress} >
								<View style={register4.containerIcon} >
									{(item.id > 1) ? (
										<TouchableOpacity style={register4.bottomIcon} onPress={() => scrollToIndex(flatListRef, item.id - 1)}>
											<Ionicons name="arrow-back" size={30} color="white" />
										</TouchableOpacity>
									) : (null)}
								</View>
								<View style={styles.center} >
									<Text style={styles.title} >{item.unit}</Text>
									<Text style={[styles.text, register4.textAddress]} >{item.address}</Text>
								</View>
								<View style={register4.containerIcon} >
									{(item.id < data.length) ? (
										<TouchableOpacity style={register4.bottomIcon} onPress={() => scrollToIndex(flatListRef, item.id + 1)}>
											<Ionicons name="arrow-forward" size={30} color="white" />
										</TouchableOpacity>
									) : (null)}
								</View>
							</View>
							<View style={register4.containerFlatListClass} >
								<FlatList data={item.classes} keyExtractor={(item) => item.id} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}
									renderItem={({ item }) => (
										<TouchableOpacity key={item.id} style={[register4.elementFlatListclass, {  }]} onPress={null}>
											<Text style={styles.text} >{item.day} {item.start} As {item.end}</Text>
										</TouchableOpacity>
									)}
								/>
							</View>
						</View>
					)}
				/>
			</View>
			<View style={register4.containerButton} >
				<Button text="Próximo" onPress={() => console.log(data)} />
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
	containerAddress: {
		alignSelf: "stretch",
		justifyContent: "space-around",
		flexDirection: "row"
	},
	containerIcon: {
		width: 40
	},
	bottomIcon: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	textAddress: {
		marginTop: 10
	},
	containerFlatListClass: {
		backgroundColor: "#193f66",
		alignSelf: "stretch",
		justifyContent: "flex-start",
		height: 200,
		marginHorizontal: 10,
		borderRadius: 15,
		padding: 15
	},
	elementFlatListclass: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderColor: "white",
		borderWidth: 0.2,
		marginVertical: 5,
		borderRadius: 15,
		padding: 20
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