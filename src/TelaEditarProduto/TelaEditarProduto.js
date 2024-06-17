import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import CORES from "../../comum/constantes/CORES";
import { useEffect, useState } from "react";
import api from '../../comum/Services/api';
import ESTILOS from "../../comum/constantes/ESTILOS";
import TELAS from "../../comum/constantes/TELAS";
import { useToast } from "native-base";
import { useNavigation } from "@react-navigation/native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        margin: 16
    },
    campoTextoCategoria: {
        height: 40,
        width: '80%',
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 1,
    },
    botaoSalvarNovoProduto: {
        backgroundColor: CORES.QUARTA_COR,
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }
})

const TelaEditarProduto = (props) => {

    const toast = useToast();
    const produto = props.route.params?.produto;
    const [campoNome, setCampoNome] = useState(produto.nome || '');
    const [campoEstoque, setCampoEstoque] = useState(produto.estoque || '');
    const [campoCor, setCampoCor] = useState(produto.cores || '');

    const salvar = async () => {
        try {
            const produtoAtualizado = {
                id: produto.id,
                nome: campoNome,
                estoque: campoEstoque,
                cores: campoCor
            }
            await api.put(`/produtos/${produto.id}`, produtoAtualizado);
            toast.show({ description: 'Alterações concluídas!', placement: 'top' });
            props.navigation.navigate(TELAS.TELA_LISTA_PRODUTOS, { refresh: + new Date(), categoria, produtoAtualizado })
        } catch (error) {
            console.log(error);
        }
    }
    //         props.navigation.navigate(TELAS.TELA_LISTA_PRODUTOS, { refresh: +new Date()})
    //         console.log(produtoAtualizado)
    return (
        <View style={estilos.container}>
            <Text style={ESTILOS.ESTILO_TITULO}>Editar Produto</Text>

            <CampoTextoCustomizado label='ID' value={produto.id} disabled readonly />
            <CampoTextoCustomizado label='Nome' value={campoNome} onChangeText={setCampoNome} style={estilos.campoTextoCadastroProduto} />
            <CampoTextoCustomizado label='Estoque disponível' value={campoEstoque} onChangeText={setCampoEstoque} style={estilos.campoTextoCadastroProduto} />
            <CampoTextoCustomizado label='Cores disponíveis' value={campoCor} onChangeText={setCampoCor} style={estilos.campoTextoCadastroProduto} />
            <Pressable onPress={salvar} style={estilos.botaoSalvarNovoProduto}>
                <Text>
                    Salvar
                </Text>
            </Pressable>
        </View>
    )
};

export default TelaEditarProduto;