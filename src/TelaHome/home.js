
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
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
        fontSize: 24,
        paddingTop: 16,
        paddingLeft: 16
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
            <Text style={estiloHome.textoTituloTela}>Categorias</Text>
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