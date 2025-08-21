import React, { createContext, useContext, useState, useCallback } from "react";
import { StyleSheet, Modal, View, Text } from "react-native";

import Button from "../components/Button.js";

const ModalContext = createContext();

/**
 * @author VAMPETA
 * @brief EXPORTA UMA FUNCAO QUE PERMITE ABRIR OU FECHAR O ModalGlobal
*/
export function useModal() {
	return useContext(ModalContext);
}

/**
 * @author VAMPETA
 * @brief COMPONENTE QUE ENGLOBA O COMPONENTE App PARA RENDERIZAR JUNTO UM ModalGlobal E USAR QUANDO QUISER
 * @param children CONTEUDO QUE VAI SEM ENVOLVIDO
*/
export function ModalGlobal({ children }) {
	const [visible, setVisible] = useState(false);

	/**
	 * @author VAMPETA
	 * @brief FUNCAO QUE ABRE O ModalGlobal
	*/
	const openModal = useCallback(() => {
		setVisible(true);
	}, []);

	/**
	 * @author VAMPETA
	 * @brief FUNCAO QUE FECHA O ModalGlobal
	*/
	const closeModal = useCallback(() => {
		setVisible(false);
	}, []);

	return (
		<ModalContext.Provider value={{ openModal, closeModal }}>
			{children}
			<Modal visible={visible} transparent={true} animationType="slide" onRequestClose={closeModal} >
				<View style={modalGlobal.container} >
					<View style={modalGlobal.box}>
						<Text style={{ fontSize: 18 }}>⚠️ Aviso Importante</Text>
						<Button text="Fechar" onPress={closeModal} />
					</View>
				</View>
			</Modal>
		</ModalContext.Provider>
	);
}
// export function ModalGlobal() {
// 	const [visible, setVisible] = useState(false);

// 	/**
// 	 * @author VAMPETA
// 	 * @brief FUNCAO QUE ABRE O ModalGlobal
// 	*/
// 	const openModal = useCallback(() => {
// 		setVisible(true);
// 	}, []);

// 	/**
// 	 * @author VAMPETA
// 	 * @brief FUNCAO QUE FECHA O ModalGlobal
// 	*/
// 	const closeModal = useCallback(() => {
// 		setVisible(false);
// 	}, []);

// 	return (
// 		<ModalContext.Provider value={{ openModal, closeModal }}>
// 			<Modal visible={visible} transparent={true} animationType="slide" onRequestClose={closeModal} >
// 				<View style={modalGlobal.container} >
// 					<View style={modalGlobal.box}>
// 						<Text style={{ fontSize: 18 }}>⚠️ Aviso Importante</Text>
// 						<Button text="Fechar" onPress={closeModal} />
// 					</View>
// 				</View>
// 			</Modal>
// 		</ModalContext.Provider>
// 	);
// }

const modalGlobal = StyleSheet.create({
	container: {
		backgroundColor: "rgba(0,0,0,0.5)",
		// flex: 1,
		// justifyContent: "center",
		// alignItems: "center",
		// top: 0,
		// left: 0
	},
	box: {
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		height: "30%",
		width: "80%",
		padding: 20,
		borderRadius: 10,
		elevation: 5
	}
});