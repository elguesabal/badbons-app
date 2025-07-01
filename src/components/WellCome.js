import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';

export default function WellCome() {
    return (
        <ImageBackground source={ require("../../assets/img/Design sem nome (3).png") } style={styles.backgorund} >
                <Image source={require("../../assets/img/logo badbons.png")} style={styles.logo} />
                <Image source={require("../../assets/img/Design_sem_nome__1_-removebg-preview.png")} style={styles.img} />
                <Text style={styles.tittle}>Olá</Text>
                <Text style={styles.text}>Bem-Vindo ao Seu App de Treinamento</Text>
                <Button title="Login" onPress={() => alert("login")} />
                <Button title="Cadastrar" onPress={() => alert("cadastrar")} />
                {/* <TouchableOpacity style={styles.botao} onPress={() => alert('Clicou!')}>
                    <Text style={styles.textoBotao}>Botão arredondado</Text>
                </TouchableOpacity> */}
        </ImageBackground>


        // <ImageBackground source={ require("../../assets/img/Design sem nome (3).png") } style={styles.backgorund} >
        //     <Text>aaaa</Text>
        // </ImageBackground>
    );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#001547',
		alignItems: 'center',
		justifyContent: 'center',
	},
    backgorund: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        left: -130,
        top: -100,
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