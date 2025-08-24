import { StyleSheet, Animated, Easing, Image } from "react-native";
import { useRef, useEffect } from "react";

/**
 * @author VAMPETA
 * @brief COMPONENTE DE LOAD DO ModalGlobal
*/
export default function LoadModal() {
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
		<>
			<Image style={loadModal.logo} source={require("../../../assets/img/logo-badbons.png")} />
			<Animated.View style={{ transform: [{ rotate }] }}>
				<Image style={loadModal.load} source={require("../../../assets/img/shuttlecock-load.png")} />
			</Animated.View>
		</>
	);
}

const loadModal = StyleSheet.create({
	logo: {
		width: 250,
		height: 250
	},
	load: {
		width: 100,
		height: 100
	}
});