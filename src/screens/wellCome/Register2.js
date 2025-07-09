import { StyleSheet, View, Image } from "react-native";
import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE CADASTRO
*/
export default function Cadastrar2() {
    return (
        <View style={styles.container} >
            <Image style={register2.img} source={require("../../../assets/img/Design_sem_nome__1_-removebg-preview.png")} />
            <Input placeholder="CPF" />
            <Input placeholder="Data de nascimento" />
            <Input placeholder="Celular" />
            <View style={register2.containerButton} >
                <Button text="registrar" onPress={() => alert("Registrado")} />
            </View>
        </View>
    );
}

const register2 = StyleSheet.create({
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