import { StyleSheet, ScrollView, View, Text } from "react-native";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief TELA DE NOTIFICACAO
*/
export default function Notification() {
	return (
		<ScrollView>
			<Text style={{ color: theme.primaryTextColor }} >notificacao</Text>
		</ScrollView>
	);
}

const notification = StyleSheet.create({

});