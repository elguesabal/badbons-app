import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "./Main.js";
import Login from "./Login.js";
import Register1 from "./Register1.js";
import Register2 from "./Register2.js";
import Register3 from "./Register3.js";

import HeaderStack from "../../components/HeaderStack.js";

const Stack = createNativeStackNavigator();

/**
 * @author VAMPETA
 * @brief FUNCAO RESPONSAVEL POR GERENCIAR ABAS EM CASCATA DA SECAO LOGIN/CADASTRO
*/
export default function WellCome() {
	return (
		<Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: "transparent" }, animation: "slide_from_right", header: (props) => <HeaderStack text="login" {...props} /> }}>
			<Stack.Screen name="main" component={Main} options={{ headerShown: false }} />
			<Stack.Screen name="login" component={Login} options={{ title: "Login" }} />
			<Stack.Screen name="cadastrar1" component={Register1} options={{ title: "Cadastrar" }} />
			<Stack.Screen name="cadastrar2" component={Register2} options={{ title: "Cadastrar" }} />
			<Stack.Screen name="cadastrar3" component={Register3} options={{ title: "Cadastrar" }} />
		</Stack.Navigator>
	);
}