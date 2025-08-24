import { StyleSheet, View, Image, FlatList, Text } from "react-native";

import Button from "../../components/Button.js";

import { createArray, register } from "../../functions/wellcome/register5.js";

import styles from "../../styles/styles.js";
import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief TELA DE CADASTRO
*/
export default function Register5({ navigation, route }) {
	const { inputName, inputEmail, inputPassword, inputCpf, inputDate, inputPhone, times } = route.params;
	const array = createArray(times);

	return (
		<View style={styles.containerBetween} >
			<View style={styles.center} >
				<Image style={register5.img} source={require("../../../assets/img/athlete2.png")} />
				<Text style={styles.title} >Confirme Seu Plano</Text>
			</View>
			<View style={register5.containerUnits} >
				<FlatList data={array} keyExtractor={(item) => item.id} contentContainerStyle={{ justifyContent: "center"  }} showsVerticalScrollIndicator={false}
					renderItem={({ item }) => (
						<View key={item.id} style={register5.containerUnit} >
							<Text style={styles.title} >{item.unit}</Text>
							{item.times.map((time, i) => (<Text key={i} style={register5.time} >{time.day}: {time.start} - {time.end}</Text>))}
						</View>
					)}
				/>
			</View>
			<View style={register5.containerButton} >
				<Button text="Próximo" onPress={() => register(navigation, inputName, inputEmail, inputPassword, inputCpf, inputDate, inputPhone, times)} load />
			</View>
		</View>
	);
}

const register5 = StyleSheet.create({
	img: {
		width: 200,
		height: 200
	},
	containerUnits: {
		flex: 1,
		alignSelf: "stretch",
		justifyContent: "center",
		marginVertical: 20
	},
	containerUnit: {
		alignSelf: "stretch",
		alignItems: "center",
		marginVertical: 15
	},
	time: {
		backgroundColor: theme.primaryBackgroundColor,
		textAlign: "center",
		width: "80%",
		marginVertical: 5,
		padding: 15,
		borderRadius: 15,
		borderColor: theme.primaryTextColor,
		borderWidth: 0.2,
		color: theme.primaryTextColor
	},
	containerButton: {
		alignSelf: "stretch",
		alignItems: "flex-end",
		marginRight: "10%"
	}
});