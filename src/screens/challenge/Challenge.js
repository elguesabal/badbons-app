import { View, Text, FlatList } from "react-native";

const letter = [
	{
		id: 1, stanza: [
			"Você diz que sabe dançar",
			"Você diz que sabe mexer",
			"Vai ter que me provar",
			"Eu vou pagar pra ver",
			"Você diz que não se cansa",
			"Que na balada é a rainha da dança"
		]
	},
	{
		id: 2, stanza: [
			"Vou desafiar você",
			"Você diz que sabe dançar",
			"Você diz que sabe mexer",
			"Vai ter que me provar",
			"Eu vou pagar pra ver",
			"Você diz que não se cansa",
			"Que na balada é a rainha da dança"
		]
	},
	{
		id: 3, stanza: [
			"Então pode se preparar",
			"Vou pedir pro o DJ",
			"Soltar um som, te chamar",
			"Na batida é empolgação",
			"Ela desce, vai até o chão",
			"É a mistura do eletro e o tamborzão"
		]
	},
	{
		id: 4, stanza: [
			"Você diz que rebola",
			"Então vai, então vai, então vai",
			"Provocando ela mexe",
			"Então desce, então desce, então desce",
			"Realmente é rainha, ela acaba comigo",
			"Já provou que é top e também tem estilo",
			"Quando empina e faz o quadradinho"
		]
	},
	{
		id: 5, stanza: [
			"Então rebola",
			"Rebolando ela desce (então desce)",
			"Realmente é rainha, ela acaba comigo",
			"Já provou que é top e também tem estilo",
			"Quando empina e faz o quadradinho"
		]
	},
	{
		id: 6, stanza: [
			"Então rebola",
			"Rebolando ela desce (então desce)",
			"Realmente é rainha, ela acaba comigo",
			"Já provou que é top e também tem estilo",
			"Quando empina e faz o quadradinho"
		]
	},
]

/**
 * @author VAMPETA
 * @brief TELA DE DESAFIO
*/
export default function Challenge() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text style={{ color: "white", top: "20%", fontSize: 30 }} >Vou Desafiar Você</Text>
			<FlatList data={letter} style={{ top: "30%", marginBottom: 250 }} keyExtractor={(item) => item.id} renderItem={({ item }) => (
				<View key={item.id} style={{ marginVertical: 15 }}>
					{item.stanza.map((phrase, i) => ( <Text key={i} style={{ color: "white" }} >{phrase}</Text> ))}
				</View>
			)} />
		</View>
	);
}