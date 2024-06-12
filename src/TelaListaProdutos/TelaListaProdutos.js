import { View, Text, StyleSheet } from "react-native";
import CORES from "../../comum/constantes/CORES";

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
            </View>
        </View >
    )
};

export default TelaListaProdutos;