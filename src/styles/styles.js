import { StyleSheet } from "react-native";

export default StyleSheet.create({
	backgorund: {
		flex: 1
	},
	center: {
		alignItems: "center",
		justifyContent: "center"
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	containerCenter: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	containerStart: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start"
	},
	containerBetween: {
		// backgroundColor: "red",
		flex: 1,
		alignItems: "center",
		justifyContent: "space-between",
		// paddingTop: "10%",
		paddingBottom: "20%"
	},
	containerAround: {
		backgroundColor: "red",
		flex: 1,
		alignItems: "center",
		justifyContent: "space-around"
	},
	title: {
		color: "white",
		fontSize: 25,
		marginHorizontal: "10%"
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