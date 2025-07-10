import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

/**
 * @author VAMPETA
 * @brief TELA DE ERRO (USADA QUANDO O SERVIDOR RESPONDE COM OUTRO STATUS ALEM DO 200)
*/
export default function Error() {
	const route = useRoute();
	const { error } = route.params || {};

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
			<Text style={{ color: "white", fontSize: 40 }} >Error</Text>
			<Text style={{ color: "white", fontSize: 20 }} >{error}</Text>
		</View>
	);
}