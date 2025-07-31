import { StyleSheet, View, Text } from "react-native";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE DE EVENTOS
*/
export default function Events() {
	return (
		<View style={events.container} >
			
		</View>
	);
}

const events = StyleSheet.create({
	container: {
		backgroundColor: "blue",
		alignSelf: "stretch",
		height: "30%",
		marginHorizontal: "5%",
		marginTop: "10%"
	}
});