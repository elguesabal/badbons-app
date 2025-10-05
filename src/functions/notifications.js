import * as Notifications from "expo-notifications";
import * as Device from "expo-device"

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		// shouldShowAlert: true,
		shouldShowBanner: true,
		// shouldShowList: true,
		shouldPlaySound: true,
		shouldSetBadge: true
	})
});

/**
 * @author VAMPETA
 * @brief VERIFICA E PEDE PERMISSAO PARA ENVIAR NOTIFICACOES
*/
export async function requestPermissionNotification() {
	if (!Device.isDevice) return (false);
	let settings = await Notifications.getPermissionsAsync();
	if (!settings.granted && settings.ios?.status !== Notifications.IosAuthorizationStatus.PROVISIONAL) settings = await Notifications.requestPermissionsAsync();
	return (settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL);
}

/**
 * @author VAMPETA
 * @brief CONFIGURA E AGENDA A NOTIFICACAO
 * @param title 
 * @param body 
 * @param seconds 
*/
export async function scheduleNotification({ title = "BadBons", body, data, type, seconds, weekday, hour, minute, repeats }) {
	if (!requestPermissionNotification()) return ;
// try {
// console.log("tentou agendar notificacao")
	// const teste = await Notifications.scheduleNotificationAsync({
	await Notifications.scheduleNotificationAsync({
		content: {
			title: title,
			body: body,
			data: data
		},
		trigger: {
			type: Notifications.SchedulableTriggerInputTypes[type],
			seconds: seconds,
			weekday: weekday,
			hour: hour,
			minute: minute,
			repeats: repeats
		}
	});
// console.log("conseguiu agendar notificacao")
// 	console.log(teste)
// } catch (error) {
// 	console.log("deu erro: ", error)
// }
}

// Notifications.addNotificationResponseReceivedListener((res) => { // FUNCAO Q E EXECUTACA AO CLICAR NO ICONE DA NOTIFICACAO
// 	const data = res.notification.request.content.data;

// });