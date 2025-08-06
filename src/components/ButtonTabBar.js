import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigationState } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import { theme } from "../styles/theme.js";

/**
 * @author VAMPETA
 * @brief BOTAO CRIADO PARA SER USADO NO TABBAR
*/
export default function ButtonTabBar({name, icon, onPress, onLongPress}) {
	const routes = useNavigationState(state => state.routes);
	const index = useNavigationState(state => state.index);
	const isSelected = routes[index].name === name;

	return (
		<TouchableOpacity style={[buttonTabBar.container, isSelected && buttonTabBar.containerSelected]} onPress={onPress} onLongPress={onLongPress} >
			<MaterialIcons name={icon} color={theme.primaryTextColor} size={(isSelected) ? 45 : 25} />
			<Text style={buttonTabBar.text} >{name}</Text>
		</TouchableOpacity>
	);
}

const buttonTabBar = StyleSheet.create({
	container: {
		backgroundColor: "rgba(0, 0, 255, 0);",
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
		paddingBottom: 3
	},
	containerSelected: {

	},
	text: {
		color: "white",
		fontSize: 10,
	}
});