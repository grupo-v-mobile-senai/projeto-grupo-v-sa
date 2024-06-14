import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    Pressable
} from "react-native";
import CORES from "../../comum/constantes/CORES";
import InputPersonalizado from "../../comum/componentes/InputPersonalizado/InputPersonalizado";
import ListagemVazia from "../../comum/componentes/ListagemVazia/ListagemVazia";
import { useState, useEffect } from "react";
import ItemListaProdutos from "./ItemListaProdutos";
import api from '../../comum/Services/api';
import TELAS from "../../comum/constantes/TELAS";

const estilos = StyleSheet.create({
    telaProdutos: {
        flex: 1,
        paddingTop: 24,
    },
    containerProduto: {
        height: 244,
        width: 150,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: CORES.PRIMEIRA_COR,
    },
    nomeCategoria: {
        fontSize: 30,
        paddingLeft: 16,
        paddingBottom: 24
    },
    inputPesquisaProduto: {
        height: 38,
        width: 233,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#fff',
    },
    botaoNovoProduto: {
        width: 50,
        height: 30,
        backgroundColor: CORES.PRIMEIRA_COR,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const TelaListaProdutos = (props) => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const listarProdutosViaAPI = async () => {
            const response = await api.get('./produtos/' + props.route.params.categoria.id);
            setProdutos(response.data);

        };

        listarProdutosViaAPI();
    }, [props.route.params.categoria, props.route.params.refresh])

    return (
        <SafeAreaView style={estilos.telaProdutos}>
            <Text style={estilos.nomeCategoria}>
                {props.route.params.categoria.nome}
            </Text>
            <View >
                <TextInput style={estilos.inputPesquisaProduto} />
                <Pressable />
            </View>
            <FlatList
                data={produtos}
                renderItem={(props) => <ItemListaProdutos {...props} setProdutos={setProdutos} />}
                ListEmptyComponent={ListagemVazia}
                keyExtractor={(produto) => produto.id}
            />
            <Pressable onPress={() => props.navigation.navigate(TELAS.TELA_NOVO_PRODUTO, { categoria: props.route.params.categoria })} style={estilos.botaoNovoProduto}>
                <Text>novo</Text>
            </Pressable>
        </SafeAreaView >
    )
};

export default TelaListaProdutos;