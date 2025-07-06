import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles/styles';

export default function Home() {
	const navigation = useNavigation();
    return (
		// <ImageBackground source={require("../../assets/img/Design sem nome (3).png")} style={styles.backgorund} >
		<View style={styles.container}>
			<Text style={styles.text}>home</Text>
			<TouchableOpacity onPress={() => navigation.navigate("WellCome")}>
				<Text style={[styles.button, styles.text]}>well come</Text>
			</TouchableOpacity>
		</View>
		// </ImageBackground>
    );
}