import { createContext, useContext, useState, useCallback } from "react";
import { StyleSheet, BackHandler, View, Pressable, ActivityIndicator, Text } from "react-native";
import { useEffect } from "react";
import { Host, Portal } from "react-native-portalize";
import { MaterialIcons } from "@expo/vector-icons";

import Button from "../components/Button.js";

import { theme } from "../styles/theme.js";

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
	const [data, setData] = useState({});

	/**
	 * @author VAMPETA
	 * @brief FUNCAO QUE ABRE O ModalGlobal
	*/
	const openModal = useCallback((data = {}) => {
		setData(data);
		setVisible(true);
	}, []);

	/**
	 * @author VAMPETA
	 * @brief FUNCAO QUE FECHA O ModalGlobal
	*/
	const closeModal = useCallback(() => {
		setVisible(false);
		setData({});
	}, []);

	useEffect(() => {
		if (!visible) return ;
		if (data.spinner) return ;
		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			() => {
				closeModal();
				return (true);
			}
		);
		return (() => backHandler.remove());
	}, [visible, closeModal]);

	return (
		<ModalContext.Provider value={{ openModal, closeModal }}>
			<Host>
				{children}
				{visible && ((data.spinner) ? (
					<Portal>
						<View style={[StyleSheet.absoluteFill, modalGlobal.container]}>
							<Pressable style={StyleSheet.absoluteFill} onPress={closeModal} />
							<ActivityIndicator size="large" color="white" />
						</View>
					</Portal>
				) : (
					<Portal>
						<View style={[StyleSheet.absoluteFill, modalGlobal.container]}>
							<Pressable style={StyleSheet.absoluteFill} onPress={closeModal} />
							<View style={modalGlobal.box}>
								{(data.icon) ? <MaterialIcons name={data.icon} size={100} color={theme.secondaryTextColor} /> : null}
								{(data.text) ? <Text style={modalGlobal.text}>{data.text}</Text> : null}
								<Button text="Ok" onPress={closeModal} />
							</View>
						</View>
					</Portal>
				))}
			</Host>
		</ModalContext.Provider>
	);
}

const modalGlobal = StyleSheet.create({
	container: {
		backgroundColor: "rgba(0,0,0,0.5)",
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
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
	},
	text: {
		fontSize: 18
	}
});