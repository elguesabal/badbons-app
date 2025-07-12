


/**
 * @deprecated ESTE ARQUIVO FOI REORGANIZADO NA PASTA wellCome
 * @warning ELE SERA EXCLUIDO EM VERSOES FUTURAS
*/



// import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, TextInput } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import WithBackground from "../components/BackgroundWrapper.js";
// import Header from "../components/Header.js";
// import Button from "../components/Button.js";
// import Input from "../components/Input.js";
// import styles from "../styles/styles.js";

// const Stack = createNativeStackNavigator();

// /**
//  * @author VAMPETA
//  * @brief FUNCAO RESPONSAVEL POR GERENCIAR ABAS EM CASCATA DA SECAO LOGIN/CADASTRO
// */
// export default function LoginRegister() {
// 	return (
// 		// <Stack.Navigator screenOptions={{ headerShown: false }}>
// 		// <View>
// 		<Stack.Navigator
// 			screenOptions={{
// 				headerStyle: {
// 					backgroundColor: "#191b1f"
// 				},
// 				headerTintColor: "white"
// 			}}
// 		>
// 			<Stack.Screen
// 				name="main"
// 				component={WithBackground(Main)}
// 				options={{ headerShown: false }}
// 			/>
// 			<Stack.Screen
// 				name="login"
// 				component={WithBackground(Login)}
// 				options={{ header: (props) => <Header text="login" {...props} /> }}
// 			/>
// 			<Stack.Screen
// 				name="cadastrar1"
// 				component={WithBackground(Cadastrar1)}
// 			/>
// 			<Stack.Screen
// 				name="cadastrar2"
// 				component={WithBackground(Cadastrar2)}
// 			/>
// 			<Stack.Screen
// 				name="Teste"
// 				component={Teste}
// 				options={{ title: "teste", headerShown: true, headerStyle: { backgroundColor: "red" } }}
// 			/>
// 		</Stack.Navigator>
// 		// </View>
// 	);
// }

// /**
//  * @author VAMPETA
//  * @brief TELA PRINCIPAL COM AS OPCOES DE LOGIN E CADASTRO
//  * @param navigation OBJETO DE NAVEGACAO DE TELA DO COMPONENTE Stack
// */
// function Main({ navigation }) {
// 	const navigationTab = useNavigation();
// 	return (
// 		<View style={styles.container} >
// 			<Image source={require("../../assets/img/Design_sem_nome__1_-removebg-preview.png")} style={wellCome.img} />
// 			<Text style={styles.tittle}>Olá</Text>
// 			<Text style={styles.text}>Bem-Vindo ao Seu App de Treinamento</Text>
// 			<View>
// 				<Button text="login" style={wellCome.button} onPress={() => navigation.navigate("login")} />
// 				<Button text="cadastrar" style={wellCome.button} onPress={() => navigation.navigate("cadastrar1")} />
// 				<Button text="home" style={wellCome.button} onPress={() => navigationTab.navigate("Home")} />
// 				<Button text="teste" style={wellCome.button} onPress={() => navigation.navigate("Teste")} />
// 			</View>
// 		</View>
// 	);
// }

// /**
//  * @author VAMPETA
//  * @brief TELA DE LOGIN
// */
// function Login() {
// 	return (
// 		<View style={styles.container} >
// 			<Text>login</Text>
// 		</View>
// 	);
// }

// /**
//  * @author VAMPETA
//  * @brief TELA DE CADASTRO
// */
// function Cadastrar1({ navigation }) {
// 	return (
// 		<View style={styles.container} >
// 			<Image source={require("../../assets/img/4-removebg-preview.png")} style={wellCome.img} />
// 			<Input placeholder="Nome" />
// 			<Input placeholder="Email" />
// 			<Input placeholder="Senha" />

// 			<View style={wellCome.containerButton} >
// 				<Button text="proximo" onPress={() => navigation.navigate("cadastrar2")} />
// 			</View>
// 		</View>
// 	);
// }

// /**
//  * @author VAMPETA
//  * @brief TELA DE CADASTRO
// */
// function Cadastrar2() {
// 	return (
// 		<View style={styles.container} >
// 			<Image source={require("../../assets/img/Design_sem_nome__1_-removebg-preview.png")} style={wellCome.img} />
// 			<Input placeholder="CPF" />
// 			<Input placeholder="Data de nascimento" />
// 			<Input placeholder="Celular" />

// 			{/* <TouchableOpacity style={styles.button} onPress={() => alert("Registrado")}>
// 				<Text style={styles.text}>Registrar</Text>
// 			</TouchableOpacity> */}
// 			<View style={wellCome.containerButton} >
// 				<Button text="registrar" onPress={() => alert("Registrado")} />
// 			</View>
// 		</View>
// 	);
// }

// /**
//  * @author VAMPETA
//  * @brief APENAS TESTES
// */
// function Teste({ navigation }) {
// 	return (
// 		<ImageBackground source={require("../../assets/img/Design sem nome (3).png")} style={styles.backgorund} >
// 		<View style={styles.container} >
// 			<Text>aaaaa</Text>
// 			<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("main")}>
// 				<Text style={styles.text}>HomeScreen</Text>
// 			</TouchableOpacity>
// 		</View>
// 		</ImageBackground>
// 	);
// }

// const wellCome = StyleSheet.create({
// 	img: {
// 		width: 200,
// 		height: 200
// 	},
// 	containerButton: {
// 		alignSelf: "stretch",
// 		alignItems: "flex-end",
// 		marginRight: "10%"
// 	},
// 	button: {
// 		marginVertical: 10
// 	}
// });