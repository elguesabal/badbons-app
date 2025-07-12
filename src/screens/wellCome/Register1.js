import { StyleSheet, View, Image } from "react-native";
import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE CADASTRO
*/
export default function Register1({ navigation }) {

    // CONTINUAR DAKI CAPTURANDO OS INPUTS E ENVIANDO PARA A PROXIMA TELA

    return (
        <View style={styles.container} >
            <Image style={register1.img} source={require("../../../assets/img/4-removebg-preview.png")} />
            <Input placeholder="Nome" />
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
            <View style={register1.containerButton} >
                <Button text="proximo" onPress={() => navigation.navigate("cadastrar2")} />
            </View>
        </View>
    );
}

const register1 = StyleSheet.create({
	img: {
		width: 200,
		height: 200
	},
	containerButton: {
		alignSelf: "stretch",
		alignItems: "flex-end",
		marginRight: "10%"
	}
});