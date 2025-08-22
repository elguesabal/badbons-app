import { StyleSheet, View, Switch } from "react-native";

import { useModal } from "../app/ModalGlobal.js";

import { handleToggleSwitch } from "../functions/toggleSwitch.js";

/**
 * @author VAMPETA
 * @brief BOTAO SWITCH PERSONALIZADO
 * @param style ESTILIZACAO EXTRA DO COMPONENTE
 * @param value VALOR DO BOTAO SE ELES ESTA ATIVADO OU NAO
 * @param onValueChange FUNCAO QUE ATIVA OU DESATIVA O BOTAO
*/
export default function ToggleSwitch({ style, value, onValueChange }) {
	const { openModal, closeModal } = useModal();

	return (
		<View style={[toggleSwitch.container, { backgroundColor: (value) ? "green" : "#ccc" }, style]} >
			<Switch style={toggleSwitch.switch} trackColor={{ false: "#ccc", true: "green" }} thumbColor={(value) ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"} value={value} onValueChange={(newValue) => handleToggleSwitch(openModal, closeModal, () => onValueChange(newValue))} />
		</View>
	);
}

const toggleSwitch = StyleSheet.create({
	container: {
		borderRadius: 20,
		height: 25,
		width: 47
	},
	switch: {
		height: 25,
		width: 47
	},
	spinner: {
		height: 5
	}
});