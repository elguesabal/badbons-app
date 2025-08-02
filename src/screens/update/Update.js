import { View, Image, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE UPDATE
*/
export default function Update() {
	return (
		<View style={styles.containerCenter} >
			<MaterialIcons name="update" size={100} color="white" />
			<Text style={styles.title} >Atualização</Text>
			<Text style={styles.text} >Seu app está desatualizado</Text>
		</View>
	);
}