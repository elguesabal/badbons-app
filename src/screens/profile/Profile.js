import { StyleSheet, StatusBar, Platform, ScrollView } from "react-native";
import { useState, useEffect } from "react";

import { useLogin } from "../../app/isLogin.js";
import { getCredentials } from "../../functions/profile/profile.js";
import { logout } from "../../functions/profile/profile.js";

import Photo from "../../components/profile/Photo.js";
import SelectionButtun from "../../components/profile/SelectionButton.js";
import General from "../../components/profile/General.js";
import Statistics from "../../components/profile/Statistics.js";

import Button from "../../components/Button.js";

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 20;

/**
 * @author VAMPETA
 * @brief TELA DE PERFIL
*/
export default function Profile() {
	const { setIsLogin } = useLogin();
	const [credentials, setCredentials] = useState({});
	const [buttonSelected, setButtonSelected] = useState("general");

	useEffect(() => { getCredentials(setCredentials) }, []);

	return (
		<ScrollView style={profile.scroll} showsVerticalScrollIndicator={false} >
			<Photo urlPhoto={credentials.photo} name={credentials.name} units={credentials.units} />
			<SelectionButtun buttonSelected={buttonSelected} setButtonSelected={setButtonSelected} />
			{buttonSelected === "general" && <General date={credentials.date} />}
			{buttonSelected === "statistics" && <Statistics />}
			<Button text="Sair" style={{ backgroundColor: "red" }} onPress={() => logout(setIsLogin)} />
		</ScrollView>
	);
}

const profile = StyleSheet.create({
	scroll: {
		flex: 1,
		marginTop: statusBarHeight
	}
});