import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import { useState, useRef, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import Load from "../load/Load.js";
import Error from "../error/Error.js";
import Button from "../../components/Button.js";

import { getTimetable, scrollToIndex, findSelected, buttonTime, validation } from "../../functions/wellcome/register4.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief TELA DE CADASTRO
 * @param navigation FUNCAO QUE CONTROLA A NAVEGACAO ENTRE AS SCREENS
 * @param route OBJETO COM PARAMETROS DA SCREEN ANTERIOR
*/
export default function Register4({ navigation, route }) {
	const [load, setLoad] = useState(true);
	const [error, setError] = useState(false);
	const [data, setData] = useState([]);
	const flatListRef = useRef(null);
	const [selectedTimes, setSelectedTimes] = useState({});

	useEffect(() => { getTimetable(route.params.units, setSelectedTimes, setData, setLoad, setError) }, []);

	if (error) return (<Error {...error} />);
	if (load) return (<Load />);

	return (
		<View style={register4.container} >
			<View style={register4.containerCenter} >
				<Image style={register4.img} source={require("../../../assets/img/athlete1.png")} />
				<Text style={register4.title} >Escolha Sua Frequencia de Treinamento por Semana</Text>
			</View>
			<View style={register4.containerFlatListUnit} >
				<FlatList data={data} horizontal={true} keyExtractor={(item) => item.id} contentContainerStyle={register4.containerCenter} showsHorizontalScrollIndicator={false} ref={flatListRef}
					renderItem={({ item: classItem }) => (
						<View style={register4.elementFlatListUnit}>
							<View style={register4.containerAddress} >
								<View style={register4.containerIcon} >
									{(classItem.id > 1) ? (
										<TouchableOpacity style={register4.bottomIcon} onPress={() => scrollToIndex(flatListRef, classItem.id - 1)}>
											<MaterialIcons name="arrow-back" size={30} color={theme.primaryTextColor} />
										</TouchableOpacity>
									) : (null)}
								</View>
								<View style={register4.containerCenter} >
									<Text style={register4.title} >{classItem.unit}</Text>
									<Text style={[register4.text, register4.textAddress]} >{classItem.address}</Text>
								</View>
								<View style={register4.containerIcon} >
									{(classItem.id < data.length) ? (
										<TouchableOpacity style={register4.bottomIcon} onPress={() => scrollToIndex(flatListRef, classItem.id + 1)}>
											<MaterialIcons name="arrow-forward" size={30} color={theme.primaryTextColor} />
										</TouchableOpacity>
									) : (null)}
								</View>
							</View>
							<View style={register4.containerFlatListClass} >
								<FlatList data={classItem.classes} keyExtractor={(item) => item.id} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}
									renderItem={({ item: timeItem }) => (
										<TouchableOpacity key={timeItem.id} style={[register4.elementFlatListclass, { backgroundColor: ((findSelected(selectedTimes[classItem.unit], timeItem)) ? "#2c6bae" : "transparent") }]} onPress={() => buttonTime(setSelectedTimes, classItem.unit, timeItem)}>
											<Text style={register4.text} >{timeItem.day} {timeItem.start} As {timeItem.end}</Text>
										</TouchableOpacity>
									)}
								/>
							</View>
						</View>
					)}
				/>
			</View>
			<View style={register4.containerButton} >
				<Button text="Próximo" onPress={() => validation(navigation, route.params, selectedTimes)} />
			</View>
		</View>
	);
}

const register4 = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-between",
		paddingBottom: "20%"
	},
	containerCenter: {
		alignItems: "center",
		justifyContent: "center"
	},
	img: {
		width: 200,
		height: 200
	},
	title: {
		color: theme.primaryTextColor,
		fontSize: 25,
		marginHorizontal: "10%"
	},
	containerFlatListUnit: {
		flex: 1
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
	text: {
		color: theme.primaryTextColor,
		fontSize: 15
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
		borderColor: theme.primaryTextColor,
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