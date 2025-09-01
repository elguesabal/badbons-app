import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

import { compatibleProfilePictures } from "../../compatibleImages.js";

/**
 * @author VAMPETA
 * @brief FUNCAO QUE SELECIONA UMA FOTO VERIFICANDO SE TEM PERMISSAO, SE AQUELE TIPO DE IMAGEM E PERMITIDA E APAGA A ANTIGA IMAGEM USADA
*/
async function selectPhoto() {
	const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

	if (status !== "granted") {
		const err = new Error("Permissão a galeria negada!");
		err.icon = "block";
		throw (err);
	}
	const photo = await ImagePicker.launchImageLibraryAsync({
		mediaTypes: ["images"],
		allowsEditing: true,
		quality: 1
	});
	if (photo.canceled) return (photo);
	const type = photo.assets[0].uri.split(".").pop().toLowerCase();
	if (!compatibleProfilePictures.includes(type)) {
		const err = new Error(`Imagem ${type} não suportada!`);
		err.icon = "image-not-supported";
		throw (err);
	}
	compatibleProfilePictures.map(async (format) => await FileSystem.deleteAsync(`${FileSystem.documentDirectory}user.${format}`, { idempotent: true }));
	return (photo);
}

// async function requestPhoto(photo) {

// }

/**
 * @author VAMPETA
 * @brief 
 * @param openModal FUNCAO QUE ABRE O MODAL
 * @param closeModal FUNCAO QUE FECHA O MODAL
 * @param setImg 
*/
export async function getPhoto(openModal, closeModal, setImg) {
	let photo;
	let type;

	try {
		openModal({ spinner: true });
		photo = await selectPhoto();
		if (photo.canceled) {
			closeModal();
			return ;
		}
		type = photo.assets[0].uri.split(".").pop().toLowerCase();
		await FileSystem.copyAsync({ from: photo.assets[0].uri, to: `${FileSystem.documentDirectory}user.${type}` });
		setImg(photo.assets[0].uri);
		// FALTA ENVIAR A IMAGEM PARA O BACK END
		closeModal();
	} catch (error) {
		openModal({ icon: error.icon, text: error.message, status: error.status, button: "ok" });
	}
}