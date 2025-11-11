import axios from "axios";
import API_URL from "./Api.js";

const api = axios.create({
	baseURL: API_URL
	// validateStatus: () => true
});

api.interceptors.response.use(
	// (response) => response,
	(response) => {
return ({ // AKI EU CONSIGO SIMULAR ERRO DE INTERNET
	status: 0,
	message: "Network Error"
});
	},
	(error) => {
		if (!error.response) {
			return ({
				status: 0,
				data: {
					type: "network-error",
					message: error.message,
					code: error.code
				},
				config: error.config,
				headers: {}
			});
		}
		return (error.response);
	}
);

export default api;