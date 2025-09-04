import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

import { logout } from "../logout.js";

import { compatibleProfilePictures } from "../../compatibleImages.js";

import API_URL from "../../Api.js";

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
	return (photo);
}

/**
 * @author VAMPETA
 * @brief ENVIA A NOVA FOTO DE PERFIL PARA O SERVIDOR
 * @param setImg FUNCAO QUE DEFINE O LINK DA FOTO DE PERFIL DO USUARIO
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
async function uploadPhoto(photo, setIsLogin) {
	try {
		const formData = new FormData();
		formData.append("photo", {
			uri: photo.assets[0].uri,
			name: `user.${photo.assets[0].uri.split(".").pop().toLowerCase()}`,
			type: `image/${photo.assets[0].uri.split(".").pop().toLowerCase()}`
		});
		const res = await axios.post(`${API_URL}/upload-photo-profile`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${await SecureStore.getItemAsync("token")}`
			}
		});
		if (res.status !== 200) {
			const err = new Error(res.data);
			err.status = res.status;
			throw (err);
		}
	} catch (error) {
		if (error.message === "Network Error") {
			const err = new Error("Sem conexão com a internet");
			err.icon = "wifi-off";
			throw (err);
		} else if (error.response && error.response.status === 400) {
			logout(setIsLogin);
		} else {
			const err = new Error(error.message);
			err.status = error.status;
			throw (err);
		}
	}
}

/**
 * @author VAMPETA
 * @brief PERMITE O USUARIO ESCOLHER UMA FOTO, ESSA FOTO E ENVIADA PARA O SERVIDOR E SALVA NO DISPOSITIVO DO CLIENTE
 * @param openModal FUNCAO QUE ABRE O MODAL
 * @param closeModal FUNCAO QUE FECHA O MODAL
 * @param setImg FUNCAO QUE DEFINE O LINK DA FOTO DE PERFIL DO USUARIO
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
export async function getPhoto(openModal, closeModal, setImg, setIsLogin) {
	try {
		openModal({ spinner: true });
		const photo = await selectPhoto();
		if (photo.canceled) {
			closeModal();
			return ;
		}
		await uploadPhoto(photo, setIsLogin);
		compatibleProfilePictures.map(async (format) => await FileSystem.deleteAsync(`${FileSystem.documentDirectory}user.${format}`, { idempotent: true }));
		await FileSystem.copyAsync({ from: photo.assets[0].uri, to: `${FileSystem.documentDirectory}user.${photo.assets[0].uri.split(".").pop().toLowerCase()}` });
		setImg(photo.assets[0].uri);
		closeModal();
	} catch (error) {
		openModal({ icon: error.icon, text: error.message, status: error.status, button: "ok" });
	}
}