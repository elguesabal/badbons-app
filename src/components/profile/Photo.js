import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

/**
 * @author VAMPETA
 * @brief COMPONENTE COM FOTO DE PERFIL DO USUARIO
*/
export default function Photo({ urlPhoto, name }) {
	return (
		<View style={photo.container} >
			<View style={photo.background} ></View>
			<View style={photo.containerLogo} >
				<Image source={require("../../../assets/img/logo-badbons.png")} style={photo.logo} />
			</View>
			<View style={photo.containerImg} >
				<View style={photo.containerPhoto} >
					{(urlPhoto) ? <Image source={{ uri: urlPhoto }} style={photo.photo} /> : <MaterialIcons name="person" size={100} color="grey" />}
				</View>
				<TouchableOpacity style={photo.ButtonIcon} onPress={() => alert("mudar foto")}>
					<MaterialIcons name="edit" size={32} color="blue" />
				</TouchableOpacity>
			</View>
			<Text style={photo.student} >{name}</Text>
			<Text style={photo.units} >Unidade</Text>
		</View>
	);
}

const photo = StyleSheet.create({
	container: {
		alignSelf: "stretch",
	},
	background: {
		position: "absolute",
		backgroundColor: "blue",
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
		backgroundColor: "white",
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
		color: "white",
		fontSize: 20,
		marginTop: 20
	},
	units: {
		textAlign: "center",
		color: "grey",
		fontSize: 15,
		marginTop: 5
	}
});