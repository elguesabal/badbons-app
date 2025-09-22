import { StyleSheet, StatusBar, Platform, ScrollView } from "react-native";
import { useState } from "react";

import Photo from "../../components/profile/Photo.js";
import SelectionButtun from "../../components/SelectionButton.js";
import General from "../../components/profile/General.js";
import Statistics from "../../components/profile/Statistics.js";

const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 20;

/**
 * @author VAMPETA
 * @brief TELA DE PERFIL
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
*/
export default function Main({ navigation }) {
	const [buttonSelected, setButtonSelected] = useState("Geral");

	return (
		<ScrollView style={profile.container} contentContainerStyle={profile.scroll} showsVerticalScrollIndicator={false} >
			<Photo navigation={navigation} />
			<SelectionButtun style={profile.selectionButtun} buttonSelected={buttonSelected} setButtonSelected={setButtonSelected} buttons={["Geral", "Estatísticas"]} />
			{buttonSelected === "Geral" && <General style={profile.general} navigation={navigation} />}
			{buttonSelected === "Estatísticas" && <Statistics style={profile.statistics} />}
		</ScrollView>
	);
}

const profile = StyleSheet.create({
	container: {
		marginTop: statusBarHeight
	},
	scroll: {
		alignItems: "center",
		paddingBottom: 25
	},
	photo: {

	},
	selectionButtun: {
		width: "80%",
		marginTop: 15
	},
	general: {
		alignSelf: "stretch",
		marginTop: 25
	},
	statistics: {

	}
});