import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WellCome from './src/components/WellCome.js';
import Home from './src/components/Home.js';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		// <ImageBackground source={ require("./assets/img/Design sem nome (3).png") } style={styles.fundo}>
			<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen name="Home" component={Home} />
					<Tab.Screen name="WellCome" component={WellCome} />
				</Tab.Navigator>
			</NavigationContainer>
		// </ImageBackground>

		// <ImageBackground source={ require("./assets/img/Design sem nome (3).png") } style={styles.fundo}>
		// 	<Text style={styles.texto}>aaaa</Text>
		// </ImageBackground>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},



// 	fundo: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// 	texto: {
// 		color: 'white',
// 		fontSize: 24,
// 		fontWeight: 'bold',
// 	},
// });
