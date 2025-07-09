import { StyleSheet, ImageBackground, View, Image } from "react-native";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief 
 * @warning 
*/
export default function Load() {
	return (
		<ImageBackground style={{ flex: 1 }} source={require("../../../assets/img/Design sem nome (3).png")} >
			<View style={styles.container} >
				<Image style={load.logo} source={require("../../../assets/img/logo badbons.png")} />
				<Image style={load.load} source={require("../../../assets/img/loading badbons.png")} />
			</View>
		</ImageBackground>
	);
}

const load = StyleSheet.create({
	logo: {
		width: 250,
		height: 250
	},
	load: {
		backgroundColor: "red",
		width: 100,
		height: 100
	}
});