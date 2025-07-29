import { createContext, useContext, useState } from "react";

const LoginContext = createContext(null);

/**
 * @author VAMPETA
 * @brief FUNCAO QUE CRIA UM HOOK CAPAZ DE SER EXPORTADO
*/
export const LoginProvider = ({ children }) => {
	const [isLogin, setIsLogin] = useState(false);

	return (
		<LoginContext.Provider value={{ isLogin, setIsLogin }}>
			{children}
		</LoginContext.Provider>
	);
};

/**
 * @author VAMPETA
 * @brief FUNCAO QUE EXPOTA O HOOK
*/
export function useLogin() {
	return (useContext(LoginContext));
}