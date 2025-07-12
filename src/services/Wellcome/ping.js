


/**
 * @deprecated AS REQUISICOES VAO PASSAR A SEREM FEITAS DENTROS DOS COMPONENTES
 * @warning ELE SERA EXCLUIDO EM VERSOES FUTURAS
*/



// import axios from "axios";
// import API_URL from "../../Api.js";

// /**
//  * @author VAMPETA
//  * @brief FUNCAO RESPONSAVEL POR TESTAR A CONEXAO COM O SERVIDOR NO INICIO DO APP E REDIRECIONAR PARA TELA DE WellCome OU Error
//  * @param setLoad FUNCAO Q DEFINE O VALOR RESPONSAVEL POR RENDERIZAR Load OU NAO
//  * @param setError FUNCAO Q DEFINE O VALOR RESPONSAVEL POR RENDERIZAR Error OU NAO
// */
// export default function ping(setLoad, setError) {
// 	axios.get(`${API_URL}/ping`)
// 	.then((res) => (res.status == 200) ? setLoad(false) : setError("error"))
// 	.catch((error) => setError(error.message));
// }