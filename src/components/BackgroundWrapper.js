import { ImageBackground } from "react-native";
import styles from "../styles/styles";

/**
 * @author VAMPETA
 * @brief ESSA FUNCAO USA ImageBackground PARA ENVOLVER O COMPONENTE FILHO RECEBIDO
 * @warning ESSA FUNCAO DEVE SER USADA COMO COMPONENTE
 * @param children COMPONENTE A SER ENVOLVIDO PELA IMAGEM DE BACKGROUND
 * @return RETORNA O ELEMENTO JA COM O BACKGROUND
*/
function BackgroundWrapper({ children }) {
	return (
		<ImageBackground
			source={require("../../assets/img/Design sem nome (3).png")}
			style={styles.backgorund}
		>
			{children}
		</ImageBackground>
	);
}

/**
 * @author VAMPETA
 * @brief FUNCAO DESTINADA A ENVOLVER COMPONETES COM UM BACKGROUND PREDEFINIDO NA FUNCAO BackgroundWrapper
 * @param Component COMPONENTE A SER ENVOLVIDO PELA IMAGEM DE BACKGROUND
 * @return RETORNA O ELEMENTO JA COM O BACKGROUND
*/
export default function WithBackground(Component) {
	return (
		(props) => {
			return (
				<BackgroundWrapper>
					<Component {...props} />
				</BackgroundWrapper>
			);
		}
	);
}