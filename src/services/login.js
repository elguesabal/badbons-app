


/**
 * @deprecated AS REQUISICOES VAO PASSAR A SEREM FEITAS DENTROS DOS COMPONENTES
 * @warning ELE SERA EXCLUIDO EM VERSOES FUTURAS
*/



// import axios from "axios";
// import API_URL from "../Api.js";

// /**
//  * @author VAMPETA
//  * @brief FAZ A REQUISICAO DE LOGIN ENVIANDO LOGIN E SENHA DO CLIENTE
//  * @param navigation OBJETO COM METODOS DE NAVEGACAO DE ABA DA TELA
//  * @param credentials OBJETO COM LOGIN E SENHA DO USUARIO
// */
// export default function loginRequest(navigation, credentials) {
//     axios.post(`${API_URL}/login`, credentials)
//     .then((res) => (res.status === 200) ? navigation.navigate("Home") : alert("Login ou senha errada!"))
//     .catch((error) => (error.status === 401) ? alert("Login ou senha errada!") : navigation.navigate("Error", { error: error.message }));
// }