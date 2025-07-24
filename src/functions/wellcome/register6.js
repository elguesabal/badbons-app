/**
 * @author VAMPETA
 * @brief ENVIA O CLIENTE PARA A TELA DE LOGIN
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
*/
export function backLogin(navigation) {
    navigation.reset({
        index: 1,
        routes: [
            { name: "main" },
            { name: "login" }
        ]
    });
}