import { View, Text, StyleSheet, Pressable } from "react-native";
import CORES from "../../comum/constantes/CORES";
import estiloHome from "../TelaHome/TelaHomeStyle";

const estilos = StyleSheet.create({
    telaProdutos: {
        flex: 1,
        paddingTop: 24,
        paddingLeft: 24
    },
    containerProduto: {
        height: 244,
        width: 150,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: CORES.PRIMEIRA_COR,
    }
});

const TelaListaProdutos = (props) => {
    return (
        <View style={estilos.telaProdutos}>
            <Text>
                {props.route.params.categoria.nome}
            </Text>
            <View style={estilos.containerProduto}>
            <Pressable onPress={() => props.navigation.navigate(TELAS.TELA_LISTA_PRODUTOS)} style={estiloHome.botaoAdicionarCategoria}>
                    
                <Text style={estiloHome.conteudoBotaoAdicionar}>
                        
                </Text>
            </Pressable>
            </View>
        </View >
    )
};

export default TelaListaProdutos;