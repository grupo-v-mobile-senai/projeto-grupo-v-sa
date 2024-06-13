
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import BotaoCategoria from '../../comum/componentes/BotaoCategoria/BotaoCategoria.js';
import api from '../../comum/Services/api.js';
import TELAS from '../../comum/constantes/TELAS.js';
import estiloHome from './TelaHomeStyle.js';

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