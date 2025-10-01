import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HeaderStack from "../../components/HeaderStack.js";

import Main from "./Main.js";
import History from "./History.js";
import Notifications from "./Notifications.js";
import Notification from "./Notification.js";
import Plans from "./Plans.js";
import EditCredentials from "./EditCredentials.js";
import SwapEmail from "./SwapEmail.js";
import SwapPassword from "./SwapPassword.js";
import Support from "./Support.js";
import About from "./About.js";

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
			<Stack.Screen name="notifications" component={Notifications} options={{ title: "Notificações" }} />
			<Stack.Screen name="notification" component={Notification} options={{ title: "Notificações" }} />
			<Stack.Screen name="plans" component={Plans} options={{ title: "Planos BadBons" }} />
			<Stack.Screen name="editCredentials" component={EditCredentials} options={{ title: "Editar Informações" }} />
			<Stack.Screen name="swapEmail" component={SwapEmail} options={{ title: "Trocar Email" }} />
			<Stack.Screen name="swapPassword" component={SwapPassword} options={{ title: "Trocar Senha" }} />
			<Stack.Screen name="support" component={Support} options={{ title: "Suporte" }} />
			<Stack.Screen name="about" component={About} options={{ title: "Sobre nós" }} />
		</Stack.Navigator>
	);
}