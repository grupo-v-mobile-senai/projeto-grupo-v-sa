
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
                <Pressable onPress={() => props.navigation.navigate(TELAS.TELA_LISTA_PRODUTOS)} style={estiloHome.botaoAdicionarCategoria}>
                    
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