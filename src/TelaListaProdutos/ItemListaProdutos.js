import { View, Text, StyleSheet, Image } from "react-native";

const estilos = StyleSheet.create({
    containerProduto: {
        height: 225,
        width: 225,
        paddingTop: 16,
        paddingLeft: 16,
        margin: 8,
        borderColor: 'black',
        borderWidth: 1
    }
})


const ItemListaProdutos = (props) => {
    return (
        <View style={estilos.containerProduto}>
            <Image />
            <Text>Nome: {props.item.nome}</Text>
            <Text>Cores disponíveis: {props.item.cores}</Text>
            <Text>Estoque: {props.item.estoque}</Text>
        </View>
    )
};

export default ItemListaProdutos;