import { View, Text, StyleSheet, Image, Pressable, RefreshControl } from "react-native";
import CORES from "../../comum/constantes/CORES";
import TELAS from "../../comum/constantes/TELAS";
import { useNavigation } from "@react-navigation/native";
import api from '../../comum/Services/api';
import { useToast } from "native-base";

const estilos = StyleSheet.create({
    containerLista: {
        flex: 1,
        gap: 16
    },
    textoItens: {
        fontSize: 16,
        fontWeight: "bold"
    },
    botaoDeletar: {
        height: 50,
        width: 50,
        backgroundColor: CORES.TERCEIRA_COR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    textoBotao: {
        fontWeight: "bold",
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoEditar: {
        height: 50,
        width: 50,
        backgroundColor: CORES.SEGUNDA_COR,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    containerBotoes: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        gap: 4,
        // paddingRight: 16
    },
    itemLista: {
        // backgroundColor: CORES.QUARTA_COR,
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
    },
    caixaItens: {
        gap: 4,
        alignItems: 'flex-start',
        justifyContent: 'center',
    }
})




const ItemListaProdutos = (props) => {

    const navigation = useNavigation()
    const toast = useToast();

    const excluir = async () => {
        console.log(props)
        try {
            if (window.confirm('Tem certeza?')) {
                await api.delete(`/produtos/${props.item.id}`);
                toast.show({
                    description: 'Item excluído!',
                    placement: 'top'
                });
            }
        } catch (error) {
            console.log(error)
        }
    }

    const editar = () => {
        navigation.navigate(TELAS.TELA_EDITAR_PRODUTO, { produto: props.item })
    };
    return (
        <View style={estilos.containerLista}>
            <Image />
            <View style={estilos.itemLista}>
                <View style={estilos.caixaItens}>
                    <Text style={estilos.textoItens}>ID: {props.item.id}</Text>
                    <Text style={estilos.textoItens}>Nome: {props.item.nome}</Text>
                    <Text style={estilos.textoItens}>Estoque: {props.item.estoque}</Text>
                    <Text style={estilos.textoItens}>Cores disponíveis: {props.item.cores}</Text>
                </View>
                <View style={estilos.containerBotoes}>
                    <Pressable style={estilos.botaoDeletar}>
                        <Text onPress={excluir} style={estilos.textoBotao}>Excluir</Text>
                    </Pressable>
                    <Pressable onPress={editar} style={estilos.botaoEditar} >
                        <Text style={estilos.textoBotao}>Editar</Text>
                    </Pressable >
                </View>
            </View>
        </View>
    )
};

export default ItemListaProdutos;