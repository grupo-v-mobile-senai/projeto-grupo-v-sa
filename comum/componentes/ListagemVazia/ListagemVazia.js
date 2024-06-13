import { View, Text } from "react-native";

import estilos from "./ListagemVaziaStyle";

const ListagemVazia = () => {
    return (
        <View style={estilos.container}>
            <Text style={estilos.textoVazio}>
                Nenhum Produto na lista.
            </Text>
        </View>
    );
};

export default ListagemVazia;