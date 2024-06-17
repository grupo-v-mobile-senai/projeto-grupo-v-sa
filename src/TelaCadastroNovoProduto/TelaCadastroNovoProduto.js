import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import CORES from "../../comum/constantes/CORES";
import { useState } from "react";
import api from '../../comum/Services/api';
import TELAS from "../../comum/constantes/TELAS";
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import ESTILOS from "../../comum/constantes/ESTILOS";
import { useToast } from "native-base";

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
        borderRadius: 8,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const TelaCadastroNovoProduto = (props) => {
    const [campoNome, setCampoNome] = useState('');
    const [campoEstoque, setCampoEstoque] = useState('');
    const [campoCor, setCampoCor] = useState('');
    const categoria = props.route.params && props.route.params.categoria ? props.route.params.categoria : null;

    const toast = useToast();


    const salvar = async () => {
        try {
            if (!campoNome.trim() || !campoEstoque.trim()) {
                toast.show({
                    description: "Os Campos estão imcompletos",
                    placement: 'bottom'
                })
                return <></>
            } else {
                const novoProduto = {
                    nome: campoNome,
                    estoque: campoEstoque,
                    cores: campoCor,
                    categoria: categoria
                }
                await api.post('/produtos', novoProduto);
                toast.show({ description: 'Dados salvos com sucesso!', placement: 'top' });
                props.navigation.navigate(TELAS.TELA_LISTA_PRODUTOS, { refresh: + new Date(), categoria });

            }
        } catch (error) {
            console.log(error.response.data)
            toast.show({
                description: "Algo deu errado...",
                placement: 'top'
            });
        }
    }


    return (
        <View style={estilos.container}>
            <Text style={ESTILOS.ESTILO_TITULO}>Novo Produto</Text>
            <Text style={estilos.campoTextoCadastroProduto}>Categoria: {categoria.nome}</Text>
            <CampoTextoCustomizado label='Nome' value={campoNome} onChangeText={setCampoNome} style={estilos.campoTextoCadastroProduto} />
            <CampoTextoCustomizado label='Estoque disponível' value={campoEstoque} onChangeText={setCampoEstoque} style={estilos.campoTextoCadastroProduto} />
            <CampoTextoCustomizado label='Cores disponíveis' value={campoCor} onChangeText={setCampoCor} style={estilos.campoTextoCadastroProduto} />
            <Pressable style={estilos.botaoSalvarNovoProduto} onPress={salvar}>
                <Text>
                    Salvar
                </Text>
            </Pressable>
        </View>
    )
};

export default TelaCadastroNovoProduto;