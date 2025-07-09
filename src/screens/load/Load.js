import React, { useRef, useEffect } from 'react';
import { StyleSheet, Animated, Easing, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import API_URL from "../../Api.js";

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


	const navigation = useNavigation();
	useEffect(() => {
		let isMounted = true
		axios.get(`${API_URL}/ping`)
			.then((response) => {
				if (isMounted) {
					(response.status === 200) ? navigation.navigate("WellCome") : navigation.navigate("Error") ;
				}
			})
			.catch(() => navigation.navigate("Error"));
		return (() => isMounted = false);
	}, []);

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