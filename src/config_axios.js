import axios from "axios";
import API_URL from "./Api.js";

const api = axios.create({ baseURL: API_URL });

api.interceptors.response.use(
	(response) => {
		// if (response.config.url === "") return ({ status: 0 });			// SIMULAR FALTA DE INTERNET EM UMA REQUISICAO ESPECIFICA
		return (response);
	},
	(error) => {
		if (error.code === "ERR_NETWORK") return ({ status: 0 });
		return (error.response);
	}
);

export default api;