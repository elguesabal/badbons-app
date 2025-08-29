import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { StyleSheet, BackHandler, View } from "react-native";
import { Host, Portal } from "react-native-portalize";

import SpinnerModal from "./SpinnerModal.js";
import LoadModal from "./LoadModal.js";
import BoxModal from "./BoxModal.js";

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
	 * @param data OBJETO COM INFORMACOES DO QUE SERA EXIBIDO NO MODAL
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
		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			() => {
				if (!data.spinner && !data.load) closeModal();
				return (true);
			}
		);
		return (() => backHandler.remove());
	}, [visible, closeModal]);

	if (!visible) {
		return (
			<ModalContext.Provider value={{ openModal, closeModal }}>
				<Host>
					{children}
				</Host>
			</ModalContext.Provider>
		);
	}
	return (
		<ModalContext.Provider value={{ openModal, closeModal }}>
			<Host>
				{children}
				<Portal>
					<View style={[StyleSheet.absoluteFill, modalGlobal.container]}>
						{(data.spinner) ? <SpinnerModal /> : null}
						{(data.load) ? <LoadModal /> : null}
						{(data.icon || data.text || data.status) ? <BoxModal data={data} closeModal={closeModal} /> : null}
					</View>
				</Portal>
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
	}
});