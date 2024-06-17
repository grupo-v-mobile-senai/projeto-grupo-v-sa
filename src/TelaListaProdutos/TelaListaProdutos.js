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
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import { HrII } from "../../comum/componentes/HorizontalRule/HorizontalRule";

const estilos = StyleSheet.create({
    telaProdutos: {
        flex: 1,
        // paddingTop: 24,
        margin: 16
    },
    containerProduto: {
        height: 244,
        width: 100,
        backgroundColor: CORES.PRIMEIRA_COR,
    },
    nomeCategoria: {
        fontSize: 30,
        fontWeight: "condensedBold"
    },
    inputPesquisaProduto: {
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#fff',
    },
    botaoNovoProduto: {
        fontWeight: "bold",
        width: 50,
        height: 30,
        backgroundColor: CORES.PRIMEIRA_COR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }
});

const TelaListaProdutos = (props) => {

    const [produtos, setProdutos] = useState([]);
    const {categoria} = props.route.params;

    useEffect(() => {
        const listarProdutosViaAPI = async () => {
            const response = await api.get('./produtos/' + props.route.params.categoria.id);
            setProdutos(response.data);
        };

        listarProdutosViaAPI();
    }, [props.route.params.categoria, props.route.params.refresh])

    return (
        <SafeAreaView style={estilos.telaProdutos}>
            <View>
                <Text style={estilos.nomeCategoria}>
                    {props.route.params.categoria.nome}
                </Text>  
                <Pressable onPress={() => props.navigation.navigate(TELAS.TELA_NOVO_PRODUTO, { categoria })} style={estilos.botaoNovoProduto}>
                    <Text style={{fontWeight: "bold"}}>novo</Text>
                </Pressable>
            </View>
            <View >
                {/* <CampoTextoCustomizado /> */}
                <Pressable />
            </View>
            <FlatList
                data={produtos}
                renderItem={(props) => <ItemListaProdutos {...props} setProdutos={setProdutos} />}
                ListEmptyComponent={ListagemVazia}
                ItemSeparatorComponent={HrII}
                keyExtractor={(produto) => produto.id}
            />
        </SafeAreaView >
    )
};

export default TelaListaProdutos;