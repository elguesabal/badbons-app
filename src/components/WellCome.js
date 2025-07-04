import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/styles';

export default function WellCome() {
	const navigation = useNavigation();
	return (
		<ImageBackground source={require("../../assets/img/Design sem nome (3).png")} style={styles.backgorund} >
			<Image source={require("../../assets/img/Design_sem_nome__1_-removebg-preview.png")} style={wellCome.img} />
			<Text style={styles.tittle}>Olá</Text>
			<Text style={styles.text}>Bem-Vindo ao Seu App de Treinamento</Text>
			<View style={styles.teste}> {/* EU TERIA Q CENTRALZIAR OS ELEMENTOS */}
				<TouchableOpacity style={styles.button} onPress={() => alert("login")}>
					<Text style={styles.text}>login</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => alert("cadastrar")}>
					<Text style={[styles.button, styles.text]}>cadastrar</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("Home")}>
					<Text style={[styles.button, styles.text]}>home</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	);
}

const wellCome = StyleSheet.create({
	img: {
		width: 200,
		height: 200
	},
});