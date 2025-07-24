import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

/**
 * @author VAMPETA
 * @brief TELA HOME
*/
export default function Home() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<MaterialIcons name="home" size={70} color="white" />
			<Text style={{ color: "white" }} >HOME</Text>
		</View>
	);
}