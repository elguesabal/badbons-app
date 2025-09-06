import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HeaderStack from "../../components/HeaderStack.js";

import Main from "./Main.js";
import History from "./History.js";
import SwapEmail from "./SwapEmail.js";
import SwapPassword from "./SwapPassword.js";

const Stack = createNativeStackNavigator();

/**
 * @author VAMPETA
 * @brief FUNCAO RESPONSAVEL POR GERENCIAR ABAS EM CASCATA DA SECAO PERFIL
*/
export default function Profile() {
	return (
		<Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: "transparent" }, animation: "slide_from_right", header: (props) => (<HeaderStack text="login" {...props} />) }} >
			<Stack.Screen name="main" component={Main} options={{ header: () => null }} />
			<Stack.Screen name="history" component={History} options={{ title: "Histórico de Partidas" }} />
			<Stack.Screen name="swapEmail" component={SwapEmail} options={{ title: "Trocar Email" }} />
			<Stack.Screen name="swapPassword" component={SwapPassword} options={{ title: "Trocar Senha" }} />
		</Stack.Navigator>
	);
}