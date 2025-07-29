import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect } from "react";

// import { useCancelBackButton } from "../../functions/auxiliary-functions.js";

/**
 * @author VAMPETA
 * @brief TELA HOME
*/
export default function Home({ navigation }) {

	// useCancelBackButton(navigation);

	useEffect(() => {
	// 	navigation.reset();
		// console.log(JSON.stringify(navigation.getState(), null, 2))
	}, []);

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<MaterialIcons name="home" size={70} color="white" />
			<Text style={{ color: "white" }} >HOME</Text>
		</View>
	);
}