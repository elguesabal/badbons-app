import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function WellCome() {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/img/logo badbons.png")} style={styles.logo} />
            <Image source={require("../../assets/img/Design_sem_nome__1_-removebg-preview.png")} style={styles.img} />
            <Text style={styles.tittle}>Olá</Text>
            <Text style={styles.text}>Bem-Vindo ao Seu App de Treinamento</Text>
            <Button title="Login" onPress={() => alert("login")} />
            <Button title="Cadastrar" onPress={() => alert("cadastrar")} />
            {/* <TouchableOpacity style={styles.botao} onPress={() => alert('Clicou!')}>
                <Text style={styles.textoBotao}>Botão arredondado</Text>
            </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#001547',
		alignItems: 'center',
		justifyContent: 'center',
	},
    logo: {
        left: -130,
        top: -150,
        width: 100,
        height: 100
    },
    img: {
        top: -100,
        width: 200,
        height: 200
    },
    tittle: {
        color: "white",
        fontSize: 50
    },
    text: {
        color: "white",
        fontSize: 15 
    },
});