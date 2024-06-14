import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import CORES from "../../comum/constantes/CORES";
import { useState } from "react";
import api from '../../comum/Services/api';
import TELAS from "../../comum/constantes/TELAS";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16
    },
    campoTextoCadastroProduto: {
        height: 40,
        width: '80%',
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 1,
    },
    botaoSalvarNovoProduto: {
        backgroundColor: CORES.QUARTA_COR,
        width: '80%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const TelaCadastroNovoProduto = (props) => {
    const [campoNome, setCampoNome] = useState();
    const [campoEstoque, setCampoEstoque] = useState();
    const [campoCor, setCampoCor] = useState();
    const categoria = props.route.params.categoria

    const salvar = async () => {
        try {
            const novoProduto = {
                nome: campoNome,
                estoque: campoEstoque,
                cores: campoCor,
                categoria
            }
            await api.post('/produtos', novoProduto);
            alert('Dados salvos com sucesso!');
            props.navigation.navigate(TELAS.TELA_LISTA_PRODUTOS, { refresh: +new Date(), categoria });
            console.log(novoProduto);
        } catch (error) {
            alert(error.response.data);
        }
    }


    return (<View style={estilos.container}>
        <Text>Novo Produto</Text>
        <TextInput value={categoria.nome} style={estilos.campoTextoCadastroProduto} />
        <TextInput value={campoNome} onChangeText={setCampoNome} style={estilos.campoTextoCadastroProduto} />
        <TextInput value={campoEstoque} onChangeText={setCampoEstoque} style={estilos.campoTextoCadastroProduto} />
        <TextInput value={campoCor} onChangeText={setCampoCor} style={estilos.campoTextoCadastroProduto} />
        <Pressable style={estilos.botaoSalvarNovoProduto} onPress={salvar}>
            <Text>
                Salvar
            </Text>
        </Pressable>
    </View>
    )
};

export default TelaCadastroNovoProduto;