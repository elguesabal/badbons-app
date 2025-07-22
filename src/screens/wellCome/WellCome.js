import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "./Main.js";
import Login from "./Login.js";
import Register1 from "./Register1.js";
import Register2 from "./Register2.js";
import Register3 from "./Register3.js";
import Register4 from "./Register4.js";
import Register5 from "./Register5.js";
import Register6 from "./Register6.js";

import HeaderStack from "../../components/HeaderStack.js";
import HeaderLogo from "../../components/HeaderLogo.js";

const Stack = createNativeStackNavigator();

/**
 * @author VAMPETA
 * @brief FUNCAO RESPONSAVEL POR GERENCIAR ABAS EM CASCATA DA SECAO LOGIN/CADASTRO
*/
export default function Wellcome() {
	return (
		<Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: "transparent" }, animation: "slide_from_right", header: (props) => <HeaderStack text="login" {...props} /> }}>
			<Stack.Screen name="main" component={Main} options={{ header: () => <HeaderLogo /> }} />
			<Stack.Screen name="login" component={Login} options={{ title: "Login" }} />
			<Stack.Screen name="register1" component={Register1} options={{ title: "Cadastrar" }} />
			<Stack.Screen name="register2" component={Register2} options={{ title: "Cadastrar" }} />
			<Stack.Screen name="register3" component={Register3} options={{ title: "Cadastrar" }} />
			<Stack.Screen name="register4" component={Register4} options={{ title: "Cadastrar" }} />
			<Stack.Screen name="register5" component={Register5} options={{ title: "Cadastrar" }} />
			<Stack.Screen name="register6" component={Register6}  options={{ header: () => <HeaderLogo /> }} />
		</Stack.Navigator>
	);
}