import { LoginProvider } from "./src/app/isLogin.js";
import { MainApp } from "./src/app/app.js";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ModalGlobal } from "./src/screens/ModalGlobal/ModalGlobal.js";
import { BottomSheetGlobal } from "./src/app/BottomSheetGlobal.js";

/**
 * @author VAMPETA
 * @brief FUNCAO INGLOBANDO TODO O CODIGO PRONTO PARA RENDERIZAR
*/
export default function App() {
	return (
		<LoginProvider>
			<SafeAreaProvider>
				<GestureHandlerRootView>
					<ModalGlobal>
						<BottomSheetGlobal>
							<MainApp />
						</BottomSheetGlobal>
					</ModalGlobal>
				</GestureHandlerRootView>
			</SafeAreaProvider>
		</LoginProvider>
	);
}