import { StyleSheet, Platform, StatusBar, View, Image } from "react-native";

const statusBarHeight = Platform.OS == "android" ? StatusBar.currentHeight : 0;

/**
 * @author VAMPETA
 * @brief HEADER PARA TELAS Q NAO TEM HEADER (ESSE HEADER TEM APENAS UMA LOGO)
*/
export default function HeaderLogo() {
	return (
		<View style={headerLogo.container} >
			<Image source={require("../../assets/img/logo-badbons.png")} style={headerLogo.img} />
		</View>
	);
}

const headerLogo = StyleSheet.create({
	container: {
		marginTop: statusBarHeight,
		alignSelf: "stretch",
		height: 80
	},
	img: {
		width: 80,
		height: 80,
		marginLeft: 30,
		marginTop: 10
	}
});