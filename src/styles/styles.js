import { StyleSheet, StatusBar, Platform } from 'react-native';

export default StyleSheet.create({
	backgorund: {
		flex: 1
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	tittle: {
		color: "white",
		fontSize: 50
	},
	text: {
		color: "white",
		fontSize: 15
	},
	input: {
		height: 30,
		width: "80%",
		borderColor: "gray",
		borderWidth: 1,
		paddingHorizontal: 10,
		borderRadius: 8,
		backgroundColor: "white"
	},
	button: {
		backgroundColor: "blue",
		borderRadius: 20,
		paddingHorizontal: 50,
		paddingVertical: 10,
		margin: 10,
		alignItems: "center",
		justifyContent: "center"
	}
});