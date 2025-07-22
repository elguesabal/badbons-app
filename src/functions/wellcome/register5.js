


/**
 * @author VAMPETA
 * @brief CRIA UM NOVO ARRAY PARA SER USADO NO FlatList
 * @param timeUnits ARRAY DE OBJETOS INDICANDO UNIDADES E HORARIOS SELECIONADOS
 * @return RETORNA UM ARRAY DE OBEJETOS COM ID UNIT E UM ARRAY DE HORARIOS SELECIONADOS DAQUELA UNIDADE
*/
export function createArray(timesUnits) {
	return (Object.entries(timesUnits).map(([unit, times], index) => ({ id: index + 1, unit, times })));
}