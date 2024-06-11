
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import BotaoCategoria from '../../comum/componentes/BotaoCategoria/BotaoCategoria.js';
import api from '../../comum/Services/api.js';

const estiloHome = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 48
    },
    areaBotao: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 24,
        paddingTop: 40

    },
    textoTituloTela: {
        fontSize: 30
    },
    TituloTela: {
        height: 54,
        width: '100%',
        paddingTop: 24,
        paddingLeft: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },
    botaoAdicionarCategoria: {
        height: 22,
        width: 22,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: '50%'
    },
    conteudoBotaoAdicionar: {
        fontSize: 24
    }

})

const Home = () => {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        const listarCategorias = async () => {
            const response = await api.get('/categorias');
            setCategorias(response.data);
        };

        listarCategorias();
    }, []);

    return (
        <View style={estiloHome.container}>

            <View style={estiloHome.TituloTela}>
                <Text style={estiloHome.textoTituloTela}>Categorias</Text>
                <Pressable style={estiloHome.botaoAdicionarCategoria}>
                    <Text style={estiloHome.conteudoBotaoAdicionar}>
                       
                    </Text>
                </Pressable>
            </View>
            <View style={estiloHome.areaBotao}>
                {categorias.map(cat => {
                    return (
                        <BotaoCategoria
                            key={cat.id}
                            cor={cat.cor}
                            imagem={cat.imagem}>
                        </BotaoCategoria>
                    )
                })}

            </View>
        </View>
    )
};


export default Home;