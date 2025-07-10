import axios from "axios";
import API_URL from "../Api.js";

/**
 * @author VAMPETA
 * @brief FUNCAO RESPONSAVEL POR TESTAR A CONEXAO COM O SERVIDOR NO INICIO DO APP E REDIRECIONAR PARA TELA DE WellCome OU Error
 * @param navigation OBJETO COM METODOS DE NAVEGACAO DE ABA DA TELA
*/
export default function ping(navigation) {
	axios.get(`${API_URL}/ping`)
	.then((res) => (res.status == 200) ? navigation.navigate("WellCome") : navigation.navigate("Error", { error: res.data }))
	.catch((error) => navigation.navigate("Error", { error: error.message }));
}