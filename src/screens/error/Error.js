import { View, Text } from "react-native";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE ERRO (USADA QUANDO O SERVIDOR RESPONDE COM OUTRO STATUS ALEM DO 200)
 * @param error MENSAGEM DE ERRO A SER MOSTRADA NA TELA
*/
export default function Error({ error }) {
	return (
		<View style={styles.containerCenter} >
			<Text style={styles.title} >Error</Text>
			<Text style={styles.text} >{error}</Text>
		</View>
	);
}