import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HeaderStack from "../../components/HeaderStack.js";

import Main from "../home/Main.js";

const Stack = createNativeStackNavigator();

/**
 * @author VAMPETA
 * @brief FUNCAO RESPONSAVEL POR GERENCIAR ABAS EM CASCATA DA SECAO HOME
*/
export default function Home() {
	return (
		<Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: "transparent" }, animation: "slide_from_right", header: (props) => <HeaderStack text="home" {...props} /> }} >
			<Stack.Screen name="main" component={Main} options={{ header: () => null }} />
		</Stack.Navigator>
	);
}