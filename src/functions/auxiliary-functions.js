import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { BackHandler } from "react-native";

/**
 * @author VAMPETA
 * @brief FUNCAO QUE CONTROLA O BOTAO DE VOLTAR DO DISPOSITIVO (ATUALMENTE ELE CANCELA QUALQUER ACAO)
 * @param navigation OBJETO QUE COM METODO COM METODOS DE NAVEGACAO ENTRE SCREENS
*/
export function useCancelBackButton(navigation) {
	useFocusEffect(
		useCallback(() => {
			function onBackPress() {
				console.log(navigation.getState())
				return (true);
			}
			const subscription = BackHandler.addEventListener("hardwareBackPress", onBackPress);
			return (() => subscription.remove());
		}, [])
	);
}