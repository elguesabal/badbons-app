import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		// shouldShowAlert: true, // OBSOLETO
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
 * @brief PEGA O TOKEN DE NOTIFICAO SE TIVER PERMISSAO
*/
export async function getTokenNotifications() {
	if (!Device.isDevice) return (false);
	// if (!Constants.isDevice) return (null); // AKI VERIFICA SE ESTOU USANDO EXPO
	const settings = await Notifications.getPermissionsAsync();
	if (!settings.granted && settings.ios?.status !== Notifications.IosAuthorizationStatus.PROVISIONAL) return (null);
	const projectId = Constants.expoConfig.extra.eas.projectId;
	return ((await Notifications.getExpoPushTokenAsync({ projectId })).data);
}

/**
 * @author VAMPETA
 * @brief CONFIGURA E AGENDA A NOTIFICACAO
 * @param title TITULO DA NOTIFICACAO
 * @param body MENSAGEM PRINCIPAL DA NOTIFICACAO
 * @param data INFORMACOES EXTRAS
 * @param type TIPO DE NOTIFICACAO
 * @param weekday DIA DA SEMANA A SER NOTIFICADA
 * @param hour HORA A SER NOTIFICADO
 * @param minute MINUTO A SER NOTIFICADO
 * @param seconds TEMPO EM SEGUNDO DE ATRASO OU INTERVALO DE REPETICAO
 * @param repeats BOOLEANO INFORMANDO SE QUER Q REPITA A NOTIFICACAO
*/
export async function scheduleNotification({ title = "BadBons", body, data, type, weekday, hour, minute, seconds, repeats }) {
	if (!requestPermissionNotification()) return;
	await Notifications.scheduleNotificationAsync({
		content: {
			title: title,
			body: body,
			data: data
		},
		trigger: {
			type: Notifications.SchedulableTriggerInputTypes[type],
			weekday: weekday,
			hour: hour,
			minute: minute,
			seconds: seconds,
			repeats: repeats
		}
	});
}

// Notifications.addNotificationResponseReceivedListener((res) => { // FUNCAO Q E EXECUTACA AO CLICAR NO ICONE DA NOTIFICACAO
// 	const data = res.notification.request.content.data;

// });