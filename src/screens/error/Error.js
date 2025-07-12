import { View, Text } from "react-native";
// import { useRoute } from "@react-navigation/native";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE ERRO (USADA QUANDO O SERVIDOR RESPONDE COM OUTRO STATUS ALEM DO 200)
 * @param error MENSAGEM DE ERRO A SER MOSTRADA NA TELA
*/
export default function Error({ error }) {
	return (
		<View style={styles.container} >
			<Text style={styles.title} >Error</Text>
			<Text style={styles.text} >{error}</Text>
		</View>
	);
}


/**
 * @deprecated ESTA FUNCAO FOI MODIFICADA E ESTOU SALVANDO A COPIA
 * @warning ELE SERA EXCLUIDO EM VERSOES FUTURAS
*/
/**
 * @author VAMPETA
 * @brief TELA DE ERRO (USADA QUANDO O SERVIDOR RESPONDE COM OUTRO STATUS ALEM DO 200)
*/
// export default function Error() {
// 	const route = useRoute();
// 	const { error } = route.params || {};

// 	return (
// 		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
// 			<Text style={{ color: "white", fontSize: 40 }} >Error</Text>
// 			<Text style={{ color: "white", fontSize: 20 }} >{error}</Text>
// 		</View>
// 	);
// }