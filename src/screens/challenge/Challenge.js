import { View, Text, ScrollView } from "react-native";

import { theme } from "../../styles/theme.js";

const letter = [
	[
		"Você diz que sabe dançar",
		"Você diz que sabe mexer",
		"Vai ter que me provar",
		"Eu vou pagar pra ver",
		"Você diz que não se cansa",
		"Que na balada é a rainha da dança"
	],
	[
		"Vou desafiar você",
		"Você diz que sabe dançar",
		"Você diz que sabe mexer",
		"Vai ter que me provar",
		"Eu vou pagar pra ver",
		"Você diz que não se cansa",
		"Que na balada é a rainha da dança"
	],
	[
		"Então pode se preparar",
		"Vou pedir pro o DJ",
		"Soltar um som, te chamar",
		"Na batida é empolgação",
		"Ela desce, vai até o chão",
		"É a mistura do eletro e o tamborzão"
	],

	[
		"Você diz que rebola",
		"Então vai, então vai, então vai",
		"Provocando ela mexe",
		"Então desce, então desce, então desce",
		"Realmente é rainha, ela acaba comigo",
		"Já provou que é top e também tem estilo",
		"Quando empina e faz o quadradinho"
	],
	[
		"Então rebola",
		"Rebolando ela desce (então desce)",
		"Realmente é rainha, ela acaba comigo",
		"Já provou que é top e também tem estilo",
		"Quando empina e faz o quadradinho"
	],
	[
		"Então rebola",
		"Rebolando ela desce (então desce)",
		"Realmente é rainha, ela acaba comigo",
		"Já provou que é top e também tem estilo",
		"Quando empina e faz o quadradinho"
	]
]

/**
 * @author VAMPETA
 * @brief TELA DE DESAFIO
*/
export default function Challenge() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 50 }}>
			<Text style={{ color: theme.primaryTextColor, fontSize: 30, marginVertical: 30 }} >Vou Desafiar Você</Text>
			<ScrollView style={{ height: 100, alignSelf: "stretch" }} >
				{letter.map((stanza, i) => (
					<View key={i} style={{ marginVertical: 15 }}>
						{stanza.map((phrase, j) => (<Text key={j} style={{ color: theme.primaryTextColor }} >{phrase}a</Text>))}
					</View>
				))}
			</ScrollView>
		</View>
	);
}