import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styles from '../styles/styles';

const Stack = createNativeStackNavigator();

export default function LoginRegister() {
	return (
		// <ImageBackground source={require("../../assets/img/Design sem nome (3).png")} style={styles.backgorund} >
		<Stack.Navigator screenOptions={{ headerShown: true }}>
			<Stack.Screen
				name="main"
				component={Main}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="login"
				component={Login}
			/>
			<Stack.Screen
				name="cadastrar"
				component={Cadastrar}
			/>
			<Stack.Screen
				name="Teste"
				component={Teste}
				options={{ title: "teste", headerShown: true, headerStyle: { backgroundColor: "red" } }}
			/>
		</Stack.Navigator>
		// </ImageBackground>
	);
}

function Main({ navigation }) {
	const navigationTab = useNavigation();
	return (
		<ImageBackground source={require("../../assets/img/Design sem nome (3).png")} style={styles.backgorund} >
			<Image source={require("../../assets/img/Design_sem_nome__1_-removebg-preview.png")} style={wellCome.img} />
			<Text style={styles.tittle}>Olá</Text>
			<Text style={styles.text}>Bem-Vindo ao Seu App de Treinamento</Text>
			<View>
				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("login")}>
					<Text style={styles.text}>login</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("cadastrar")}>
					<Text style={styles.text}>cadastrar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => navigationTab.navigate("Home")}>
					<Text style={styles.text}>home</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Teste")}>
					<Text style={styles.text}>Teste</Text>
				</TouchableOpacity>
			</View>
		</ImageBackground>
	);
}

function Login() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
			<Text>login</Text>
		</View>
	);
}

function Cadastrar() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
			<Image source={require("../../assets/img/Design_sem_nome__1_-removebg-preview.png")} style={wellCome.img} />
			<Text>CPF</Text>
			<TextInput style={wellCome.input} />
			<Text>Data de nascimento</Text>
			<TextInput style={wellCome.input} />
			<Text>Celular</Text>
			<TextInput style={wellCome.input} />
			<TouchableOpacity style={styles.button} onPress={() => alert("Registrado")}>
				<Text style={styles.text}>Registrar</Text>
			</TouchableOpacity>
		</View>
	);
}

function Teste({ navigation }) {
	return (
		<ImageBackground source={require("../../assets/img/Design sem nome (3).png")} style={styles.backgorund} >
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>aaaaa</Text>
			<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("main")}>
				<Text style={styles.text}>HomeScreen</Text>
			</TouchableOpacity>
		</View>
		</ImageBackground>
	);
}

const wellCome = StyleSheet.create({
	img: {
		width: 200,
		height: 200,
	},
	input: {
		height: 30,
		width: "80%",
		borderColor: 'gray',
		borderWidth: 1,
		paddingHorizontal: 10,
		borderRadius: 8,
		backgroundColor: 'white'
	}
});