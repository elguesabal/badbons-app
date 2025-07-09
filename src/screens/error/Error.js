import { View, Text } from "react-native";

export default function Error() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
			<Text style={{ color: "white", fontSize: 40 }} >Error</Text>
		</View>
	);
}