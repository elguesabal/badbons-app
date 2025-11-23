import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system/legacy";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { logout } from "../logout.js";

import { compatibleProfilePictures } from "../../compatibleImages.js";

import API_URL from "../../Api.js";
import api from "../../config_axios.js";

/**
 * @author VAMPETA
 * @brief BUSCA NO DISPOSITIVO E SALVA AS INFORMACOES DO USUARIO
 * @param setData FUNCAO QUE SALVA O LINK DA FOTO DE PERFIL DO USUARIO
*/
export async function getCredentials(setData) {
	let photo;

	for (let format of compatibleProfilePictures) {
		photo = await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}user.${format}`);
		if (photo.exists) break ;
	}
	setData({
		photo: (photo.exists) ? photo.uri : null,
		name: await AsyncStorage.getItem("name"),
		units: Object.keys(JSON.parse((await AsyncStorage.getItem("times")) || "{}"))
	});
}

/**
 * @author VAMPETA
 * @brief FUNCAO QUE SELECIONA UMA FOTO VERIFICANDO SE TEM PERMISSAO, SE AQUELE TIPO DE IMAGEM E PERMITIDA E APAGA A ANTIGA IMAGEM USADA
 * @param openModal FUNCAO QUE ABRE O MODAL
*/
async function selectPhoto(openModal) {
	try {
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
	} catch (error) {
		openModal({ icon: error.icon, text: error.message, button: "Ok" });
		throw (error);
	}
}

/**
 * @author VAMPETA
 * @brief ENVIA A NOVA FOTO DE PERFIL PARA O SERVIDOR
 * @param setImg FUNCAO QUE DEFINE O LINK DA FOTO DE PERFIL DO USUARIO
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
 * @param openModal FUNCAO QUE ABRE O MODAL
*/
async function uploadPhoto(photo, setIsLogin, openModal) {
	// try {
	// 	const formData = new FormData();
	// 	formData.append("fotoPerfil", {
	// 		uri: photo.assets[0].uri,
	// 		name: `user.${photo.assets[0].uri.split(".").pop().toLowerCase()}`,
	// 		type: `image/${photo.assets[0].uri.split(".").pop().toLowerCase()}`
	// 	});
	// 	const res = await axios.patch(`${API_URL}/user/update-image`, formData, { headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}` } });

	// 	if (res.status !== 200) throw (new Error(`${res.status}\n${res.data}`));
	// } catch (error) {
	// 	if (error.message === "Network Error") {
	// 		openModal({ icon: "wifi-off", text: "Sem conexão com o servidor.\nTentar novamente?", yes: (closeModal) => { closeModal(); uploadPhoto(photo, setIsLogin, openModal); }, no: (closeModal) => closeModal(), exit: (closeModal) => closeModal() });
	// 	} else if (error.response && error.response.status === 401) {
	// 		logout(setIsLogin);
	// 	} else {
	// 		openModal({ icon: "error-outline", text: error.message, button: "Sair", handleButton: (closeModal) => closeModal(), exit: (closeModal) => closeModal() });
	// 	}
	// 	throw (error);
	// }


	const formData = new FormData();		// COMECEI A REFATORAR
	formData.append("fotoPerfil", {
		uri: photo.assets[0].uri,
		name: `user.${photo.assets[0].uri.split(".").pop().toLowerCase()}`,
		type: `image/${photo.assets[0].uri.split(".").pop().toLowerCase()}`
	});
	const res = await api({
		method: "PATCH",
		url: "/user/update-image",
		headers: {
			"Content-Type": "multipart/form-data",
			Authorization: `Bearer ${await SecureStore.getItemAsync("refreshToken")}`
		},
		data: formData
	});

	if (res.status === 200) {
console.log("Foto de perfil atualizada com sucesso!");
	}
}

/**
 * @author VAMPETA
 * @brief PERMITE O USUARIO ESCOLHER UMA FOTO, ESSA FOTO E ENVIADA PARA O SERVIDOR E SALVA NO DISPOSITIVO DO CLIENTE
 * @param openModal FUNCAO QUE ABRE O MODAL
 * @param closeModal FUNCAO QUE FECHA O MODAL
 * @param data DADOS DO USUARIO
 * @param setData FUNCAO QUE SALVA O LINK DA FOTO DE PERFIL DO USUARIO
 * @param setIsLogin FUNCAO DE CONTROLE DE LOGIN
*/
export async function getPhoto(openModal, closeModal, data, setData, setIsLogin) {
	try {
		const photo = await selectPhoto(openModal);

		if (photo.canceled) return (closeModal());
		openModal({ load: true });
		await uploadPhoto(photo, setIsLogin, openModal);
		compatibleProfilePictures.map(async (format) => await FileSystem.deleteAsync(`${FileSystem.documentDirectory}user.${format}`, { idempotent: true }));
		await FileSystem.copyAsync({ from: photo.assets[0].uri, to: `${FileSystem.documentDirectory}user.${photo.assets[0].uri.split(".").pop().toLowerCase()}` });
		setData({ ...data, photo: photo.assets[0].uri });
		closeModal();
	} catch (error) {

	}
}