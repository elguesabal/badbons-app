import * as Notifications from "expo-notifications";
import * as Device from "expo-device"

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: true,
		shouldSetBadge: true
	})
});

// Notifications.addNotificationResponseReceivedListener((res) => { // FUNCAO Q E EXECUTACA AO CLICAR NO ICONE DA NOTIFICACAO
// 	const data = res.notification.request.content.data;

// });

/**
 * @author VAMPETA
 * @brief CONFIGURA A NOTIFICACAO
 * @param title 
 * @param body 
 * @param seconds 
*/
export async function scheduleNotification({ title = "BadBons", body, data, seconds, weekday, hour, minute, repeats }) {
	await Notifications.scheduleNotificationAsync({
		content: {
			title: title,
			body: body,
			data: data
		},
		trigger: {
			seconds: seconds,
			weekday: weekday,
			hour: hour,
			minute: minute,
			repeats: repeats
		}
	});
}

/**
 * @author VAMPETA
 * @brief ACIONA O AGENDAMENTO DA NOTIFICACAO
*/
export async function requestPermission() {
	if (!Device.isDevice) return ;
	const { status } = await Notifications.getPermissionsAsync();
	if (status !== "granted") await Notifications.requestPermissionsAsync();
}