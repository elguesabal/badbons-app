import axios from "axios";
import API_URL from "./Api.js";

const api = axios.create({
	baseURL: API_URL,
	// timeout: 1
	// validateStatus: () => true
});

api.interceptors.response.use(
	(response) => {
		// console.log(response)
		return (response);
	},
	(error) => {
		if (error.code === "ERR_NETWORK") {
			return ({
				status: 0,
				data: "Network Error"
			});
		}
		return (error.response);
	}
);

export default api;