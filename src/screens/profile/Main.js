import { StyleSheet, StatusBar, Platform, ScrollView } from "react-native";
import { useState, useEffect } from "react";

import { useLogin } from "../../app/isLogin.js";
import { getCredentials } from "../../functions/profile/profile.js";
import { logout } from "../../functions/profile/profile.js";

import Photo from "../../components/profile/Photo.js";
import SelectionButtun from "../../components/SelectionButton.js";
import General from "../../components/profile/General.js";
import Statistics from "../../components/profile/Statistics.js";
import Button from "../../components/Button.js";

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 20;

/**
 * @author VAMPETA
 * @brief TELA DE PERFIL
*/
export default function Main({ navigation }) {
	const { setIsLogin } = useLogin();
	const [credentials, setCredentials] = useState({});
	const [buttonSelected, setButtonSelected] = useState("Geral");

	useEffect(() => { getCredentials(setCredentials) }, []);

	return (
		<ScrollView style={profile.scroll} showsVerticalScrollIndicator={false} >
			<Photo urlPhoto={credentials.photo} name={credentials.name} units={credentials.units} />
			<SelectionButtun style={profile.selectionButtun} buttonSelected={buttonSelected} setButtonSelected={setButtonSelected} buttons={["Geral", "Estatísticas"]} />
			{buttonSelected === "Geral" && <General navigation={navigation} date={credentials.date} />}
			{buttonSelected === "Estatísticas" && <Statistics />}
			<Button text="Sair" style={{ backgroundColor: "red" }} onPress={() => logout(setIsLogin)} />
		</ScrollView>
	);
}

const profile = StyleSheet.create({
	scroll: {
		flex: 1,
		marginTop: statusBarHeight
	},
	photo: {

	},
	selectionButtun: {
		marginHorizontal: "10%",
		marginTop: 15
	},
	general: {

	},
	statistics: {

	}
});