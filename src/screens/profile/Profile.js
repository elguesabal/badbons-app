import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HeaderStack from '../../components/HeaderStack.js';

import Main from './Main.js';
import History from "./History.js";

const Stack = createNativeStackNavigator();

/**
 * @author VAMPETA
 * @brief FUNCAO RESPONSAVEL POR GERENCIAR ABAS EM CASCATA DA SECAO LOGIN/CADASTRO
*/
export default function Profile() {
	return (
		<Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: "transparent" }, animation: "slide_from_right", header: (props) => <HeaderStack text="login" {...props} /> }} >
			<Stack.Screen name="main" component={Main} options={{ header: () => null }} />
			<Stack.Screen name="history" component={History} options={{ title: "Histórico de Partidas" }} />
		</Stack.Navigator>
	);
}