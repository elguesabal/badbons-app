import { StyleSheet, StatusBar, Platform  } from "react-native";

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 20;

export default StyleSheet.create({
	backgorund: {
		flex: 1
	},
	containerCenter: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	containerStart: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		marginTop: statusBarHeight
	},
	containerBetween: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-between",
		paddingBottom: "20%"
	},
	containerAround: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-around"
	},
	center: {
		alignItems: "center",
		justifyContent: "center"
	},
	title: {
		color: "white",
		fontSize: 25,
		marginHorizontal: "10%"
	},
	text: {
		color: "white",
		fontSize: 15
	}
});