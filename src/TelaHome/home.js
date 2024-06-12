
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import BotaoCategoria from '../../comum/componentes/BotaoCategoria/BotaoCategoria.js';
import api from '../../comum/Services/api.js';
import TELAS from '../../comum/constantes/TELAS.js';

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
        fontSize: 30,
    },
    TituloTela: {
        height: 54,
        width: '100%',
        // paddingTop: 24,
        paddingLeft: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    botaoAdicionarCategoria: {
        height: 24,
        fontSize: 18,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width: 24,
        borderColor: 'black',
        backgroundColor: '#87cefa',
        borderWidth: 1,
        borderRadius: '50%',
        marginLeft: '40%',
        marginRight: 16
    },
    conteudoBotaoAdicionar: {
        fontSize: 24
    }

})

const Home = (props) => {
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
                            categoria={cat}
                            key={cat.id}
                        >
                        </BotaoCategoria>
                    )
                })}

            </View>
        </View>
    )
};


export default Home;