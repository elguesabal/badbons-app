import { StyleSheet, Animated, Easing, View, Image } from "react-native";
import { useRef, useEffect } from "react";
// import { useNavigation } from "@react-navigation/native";

import styles from "../../styles/styles.js";

/**
 * @author VAMPETA
 * @brief TELA DE LOAD
*/
export default function Load() {
	const rotateValue = useRef(new Animated.Value(0)).current;
	useEffect(() => {
		const animation = Animated.loop(
			Animated.timing(rotateValue, {
				toValue: 1,
				duration: 2000,
				easing: Easing.linear,
				useNativeDriver: true
			})
		);
		animation.start();
		return (() => animation.stop());
	}, []);
	const rotate = rotateValue.interpolate({
		inputRange: [0, 0.5],
		outputRange: ["0deg", "360deg"]
	});

	return (
		<View style={styles.container} >
			<Image style={load.logo} source={require("../../../assets/img/logo badbons.png")} />
			<Animated.View style={{ transform: [{ rotate }] }}>
				<Image style={load.load} source={require("../../../assets/img/loading badbons.png")} />
			</Animated.View>
		</View>
	);
}

const load = StyleSheet.create({
	logo: {
		width: 250,
		height: 250
	},
	load: {
		width: 100,
		height: 100
	}
});


/**
 * @deprecated ESTA FUNCAO FOI MODIFICADA E ESTOU SALVANDO A COPIA
 * @warning ELE SERA EXCLUIDO EM VERSOES FUTURAS
*/
/**
 * @author VAMPETA
 * @brief TELA DE LOAD
*/
// export default function Load({ serverRequest }) {
// // export default function Load({ serverRequest, inputs }) {
// // export default function Load({ route }) {
// // 	const { serverRequest, inputs } = route.params || {};
// 	const rotateValue = useRef(new Animated.Value(0)).current;
// 	useEffect(() => {
// 		const animation = Animated.loop(
// 			Animated.timing(rotateValue, {
// 				toValue: 1,
// 				duration: 2000,
// 				easing: Easing.linear,
// 				useNativeDriver: true
// 			})
// 		);
// 		animation.start();
// 		return (() => animation.stop());
// 	}, []);
// 	const rotate = rotateValue.interpolate({
// 		inputRange: [0, 0.5],
// 		outputRange: ["0deg", "360deg"]
// 	});

// 	const navigation = useNavigation();
// 	useEffect(() => {
// 		// if (inputs) {
// 		// 	console.log("ta cheio")
// 		// } else {
// 		// 	console.log("ta vazio")
// 		// }
// 		serverRequest(navigation);
// 	}, []);

// 	return (
// 		<View style={styles.container} >
// 			<Image style={load.logo} source={require("../../../assets/img/logo badbons.png")} />
// 			<Animated.View style={{ transform: [{ rotate }] }}>
// 				<Image style={load.load} source={require("../../../assets/img/loading badbons.png")} />
// 			</Animated.View>
// 		</View>
// 	);
// }

