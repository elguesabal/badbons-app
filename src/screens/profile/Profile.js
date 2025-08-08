import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './Main.js';
import History from "./History.js";

const Stack = createNativeStackNavigator();

/**
 * @author VAMPETA
 * @brief FUNCAO RESPONSAVEL POR GERENCIAR ABAS EM CASCATA DA SECAO LOGIN/CADASTRO
*/
export default function Profile() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} >
			<Stack.Screen name="main" component={Main} />
			<Stack.Screen name="history" component={History} />
		</Stack.Navigator>
	);
}