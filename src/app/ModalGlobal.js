import { createContext, useContext, useState, useCallback } from "react";
import { StyleSheet, BackHandler, View, Pressable, ActivityIndicator, TouchableOpacity, Text } from "react-native";
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
				{visible && ((
					<Portal>
						<View style={[StyleSheet.absoluteFill, modalGlobal.container]}>
							{(data.spinner) ? (
								<ActivityIndicator size="large" color="white" />
							) : (
								<>
									<Pressable style={StyleSheet.absoluteFill} onPress={closeModal} />
									<View style={modalGlobal.box}>
										<View style={modalGlobal.header} >
											<TouchableOpacity onPress={closeModal} >
												<MaterialIcons name="close" size={30} color={theme.secondaryTextColor} />
											</TouchableOpacity>
										</View>
										<View style={modalGlobal.body} >									
											{(data.icon) ? <MaterialIcons name={data.icon} size={100} color={theme.secondaryTextColor} /> : null}
											{(data.text) ? <Text style={modalGlobal.text}>{data.text}</Text> : null}
											{(data.status) ? <Text style={modalGlobal.status}>Status {data.status}</Text> : null}
											{(data.button) ? <Button text={data.button} onPress={closeModal} /> : null}
										</View>
									</View>
								</>
							)}
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
		height: "40%",
		width: "80%",
		padding: 20,
		borderRadius: 10
	},
	header: {
		alignItems: "flex-end"
	},
	body: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-evenly"
	},
	text: {
		fontSize: 18,
	},
	status: {
		fontSize: 16,
	}
});