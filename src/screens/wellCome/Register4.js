import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

import API_URL from "../../Api.js";

import Load from "../load/Load.js";
import Error from "../error/Error.js";
import Button from "../../components/Button.js";

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

	/**
	 * @author VAMPETA
	 * @brief CRIA IDS DENTRO DE CADA ARRAY PARA FUNCIONAR CORRETAMENTE NO FlatList
	 * @param data DADOS Q VAO GANHAR IDS
	 * @return RETORNA OS DADOS COM OS IDS
	*/
	function includeId(data) {
		for (let i = 0; i < data.length; i++) {
			data[i].id = i + 1;
			for (let j = 0; j < data[i].classes.length; j++) {
				data[i].classes[j].id = j + 1;
			}
		}
		return (data);
	}

	/**
	 * @author VAMPETA
	 * @brief FAZ UMA CONSULTA BUSCANDO OS HORARIOS DAS UNIDADES ENVIADAS NO ARRAY units
	*/
	async function getTimetable() {
		try {
			const res = await axios.get(`${API_URL}/timetable-units`, { params: { units: units } });
			if (res.status !== 200) {
				setError("error");
				return ;
			}
			setData(includeId(res.data));
		} catch (error) {
			setError(error.message);
		} finally {
			setLoad(false);
		}
	}

	useEffect(() => {
		getTimetable();
	}, []);

	/**
	 * @author VAMPETA
	 * @brief FUNCAO CRIADA PARA ROLAR ATE O ELEMENTO CORRETO DO FlatList
	 * @param index INDEX DO ELEMENTO
	*/
	function scrollToIndex(index) {
		flatListRef.current?.scrollToIndex({ index, animated: true });
	}

	if (error) return (<Error error={error} />);
	if (load) return (<Load />);

	return (
		<View style={styles.containerBetween} >
			<View style={styles.center} >
				<Image style={register4.img} source={require("../../../assets/img/Design_sem_nome__1_-removebg-preview.png")} />
				<Text style={styles.title} >Escolha Sua Frequencia de Treinamento por Semana</Text>
			</View>
			<View style={register4.containerFlatListBotton} >
				<FlatList data={data} horizontal={true} keyExtractor={(item) => item.id} contentContainerStyle={[ { flexGrow: 1 }, styles.center]} showsHorizontalScrollIndicator={false} ref={flatListRef}
					renderItem={({ item }) => (
						<Button key={item.id} text={item.unit} style={{ width: 100, marginHorizontal: 5 }} onPress={() => scrollToIndex(item.id - 1)} />
					)}
				/>
			</View>
			<View style={register4.containerFlatListUnit} >
				<FlatList data={data} horizontal={true} keyExtractor={(item) => item.id} contentContainerStyle={styles.center} showsHorizontalScrollIndicator={false} ref={flatListRef}
					renderItem={({ item }) => (
						<View style={register4.elementFlatListUnit}>
							<View>
								<Text style={styles.title} >{item.unit}</Text>
								<Text style={[styles.text, register4.textAddress]} >{item.address}</Text>
							</View>
							<View style={register4.containerFlatListClass} >
								<FlatList data={item.classes} keyExtractor={(item) => item.id} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}
									renderItem={({ item }) => (
										<TouchableOpacity key={item.id} style={register4.elementFlatListclass} onPress={null}>
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
	containerFlatListBotton: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
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