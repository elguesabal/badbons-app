import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { useLogin } from "../../app/isLogin.js";
import { useModal } from "../../screens/ModalGlobal/ModalGlobal.js";

import { getPhoto } from "../../functions/profile/photo.js";

import { theme } from "../../styles/theme.js";

/**
 * @author VAMPETA
 * @brief COMPONENTE COM FOTO DE PERFIL DO USUARIO
 * @param urlPhoto LINK DA FOTO DE PERFIL DO USUARIO
 * @param name NOME DO CLIENTE
 * @param units UNIDADES QUE O CLIENTE ESTA INSCRITA
*/
export default function Photo({ urlPhoto, name, units }) {
	const { setIsLogin } = useLogin();
	const { openModal, closeModal } = useModal();
	const [img, setImg] = useState(urlPhoto);

	useEffect(() => { setImg(urlPhoto ?? null) }, [urlPhoto]);

	return (
		<View style={photo.container} >
			<View style={photo.background} ></View>
			<View style={photo.containerLogo} >
				<Image source={require("../../../assets/img/logo-badbons.png")} style={photo.logo} />
			</View>
			<View style={photo.containerImg} >
				<View style={photo.containerPhoto} >
					{(img) ? <Image source={{ uri: img }} style={photo.photo} /> : <MaterialIcons name="person" size={100} color={theme.secondaryBackgroundColor} />}
				</View>
				<TouchableOpacity style={photo.ButtonIcon} onPress={() => getPhoto(openModal, closeModal, setImg, setIsLogin)}>
					<MaterialIcons name="edit" size={32} color={theme.primaryBackgroundColor} />
				</TouchableOpacity>
			</View>
			<Text style={photo.student} >{name}</Text>
			<Text style={photo.units} >{units?.join(", ")}</Text>
		</View>
	);
}

const photo = StyleSheet.create({
	container: {
		alignSelf: "stretch",
	},
	background: {
		position: "absolute",
		backgroundColor: theme.primaryBackgroundColor,
		width: "150%",
		height: 200,
		top: 0,
		left: "-25%",
		borderBottomLeftRadius: "100%",
		borderBottomRightRadius: "100%",
	},
	containerLogo: {
		alignSelf: "stretch",
		alignItems: "flex-end",
	},
	logo: {
		width: 100,
		height: 100
	},
	containerImg: {
		flexDirection: "row",
		alignSelf: "stretch",
		alignItems: "flex-end",
		justifyContent: "center",
		marginTop: 20,
		paddingLeft: 12
	},
	containerPhoto: {
		backgroundColor: theme.tertiaryBackgroundColor,
		alignItems: "center",
		justifyContent: "center",
		width: 150,
		height: 150,
		borderRadius: "100%",
		overflow: "hidden"
	},
	photo: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
	ButtonIcon: {
		marginLeft: -20
	},
	student: {
		textAlign: "center",
		color: theme.primaryTextColor,
		fontSize: 20,
		marginTop: 15
	},
	units: {
		textAlign: "center",
		color: theme.secondaryTextColor,
		fontSize: 15,
		marginTop: 5
	}
});
