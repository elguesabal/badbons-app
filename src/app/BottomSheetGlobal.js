import React, { createContext, useContext, useRef, useMemo, useState, useEffect, useCallback } from "react";
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { StyleSheet, BackHandler } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { theme } from "../styles/theme.js";

const BottomSheetContext = createContext();

/**
 * @author VAMPETA
 * @brief EXPORTA UMA FUNCAO QUE PERMITE ABRIR OU FECHAR O BottomSheet
*/
export function useBottomSheet() {
	return (useContext(BottomSheetContext));
}

/**
 * @author VAMPETA
 * @brief COMPONENTE QUE ENGLOBA O COMPONENTE App PARA RENDERIZAR JUNTO UM BottomSheet E USAR QUANDO QUISER
 * @param children CONTEUDO QUE VAI SEM ENVOLVIDO
*/
export function BottomSheetGlobal({ children }) {
	const sheetRef = useRef(null);
	const snapPoints = useMemo(() => ["50%", "80%"], []);
	const [sheetContent, setSheetContent] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const navigationBar = useSafeAreaInsets();

	/**
	 * @author VAMPETA
	 * @brief FUNCAO QUE ABRE O BottomSheet
	 * @param content CONTEUDO QUE VAI SER RENDERIZADO DENTRO DO BottomSheet
	*/
	const openSheet = useCallback((content) => {
		setSheetContent(content);
		sheetRef.current?.expand();
		setIsOpen(true);
	}, []);

	/**
	 * @author VAMPETA
	 * @brief FUNCAO QUE FECHA O BottomSheet
	*/
	const closeSheet = useCallback(() => {
		sheetRef.current?.close();
		setIsOpen(false);
	}, []);

	useEffect(() => {
		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			() => {
				if (isOpen) {
					closeSheet();
					return (true);
				}
				return (false);
			}
		);
		return (() => backHandler.remove());
	}, [isOpen, closeSheet]);

	return (
		<BottomSheetContext.Provider value={{ openSheet, closeSheet }} >
			{children}
			<BottomSheet ref={sheetRef} index={-1} snapPoints={snapPoints} enablePanDownToClose={true} onClose={() => setIsOpen(false)} backgroundStyle={bottomSheetGlobal.backgroundStyle} handleIndicatorStyle={bottomSheetGlobal.handleIndicatorStyle} backdropComponent={(props) => (<BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} pressBehavior="close" opacity={0.5} />)} >
				<BottomSheetView style={[bottomSheetGlobal.container, { paddingBottom: navigationBar.bottom + 25 }]} >
					{sheetContent && React.cloneElement(sheetContent, { key: Date.now() })}
				</BottomSheetView>
			</BottomSheet>
		</BottomSheetContext.Provider>
	);
}

const bottomSheetGlobal = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: theme.primaryBackgroundColor,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30
	},
	handleIndicatorStyle: {
		backgroundColor: theme.secondaryBackgroundColor
	},
	container: {
		height: "100%"
	}
});