import { LoginProvider } from "./src/app/isLogin.js";
import { MainApp } from "./src/app/app.js";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { BottomSheetGlobal } from "./src/app/BottomSheetGlobal.js";

/**
 * @author VAMPETA
 * @brief FUNCAO INGLOBANDO TODO O CODIGO PRONTO PARA RENDERIZAR
*/
export default function App() {
	return (
		<LoginProvider>
			<GestureHandlerRootView>
				<BottomSheetGlobal>
					<MainApp />
				</BottomSheetGlobal>
			</GestureHandlerRootView>
		</LoginProvider>
	);
}