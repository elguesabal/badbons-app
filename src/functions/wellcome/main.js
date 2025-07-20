import axios from "axios";

import API_URL from "../../Api.js";

/**
 * @author VAMPETA
 * @brief FAZ UMA CONSULTA DE PING PARA A API PARA VER SE O SERVIDOR ESTA ACESSIVEL
 * @param setLoad FUNCAO QUE MUDA O STATUS DE LOAD
 * @param setError FUNCAO QUE MUDA O STATUS DE ERROR
*/
export async function ping(setLoad, setError) {
	try {
		const res = await axios.get(`${API_URL}/ping`);
		if (res.status !== 200) setError("error");
	} catch (error) {
		setError(error.message);
	} finally {
		setLoad(false);
	}
}