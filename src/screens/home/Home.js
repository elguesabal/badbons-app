import { View, Text } from "react-native";

import styles from "../../styles/styles";

/**
 * @author VAMPETA
 * @brief TELA HOME
*/
export default function Home() {
	return (
		<View style={[styles.containerCenter, { backgroundColor: "transparent" }]}>
			<Text>HOME</Text>
		</View>
	);
}