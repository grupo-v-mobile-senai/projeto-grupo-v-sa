
import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import BotaoCategoria from '../comum/componentes/BotaoCategoria/BotaoCategoria';

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

const categorias = [

    {
        id: 1,
        nome: "",
        imagem: "icon.png",
        cor: "primaria"
    },
    {
        nome: "",
        imagem: "icon.png",
        cor: "primaria"
    },
    {
        nome: "",
        imagem: "icon.png",
        cor: "primaria"
    },
    {
        nome: "",
        imagem: "icon.png",
        cor: "primaria"
    },
    {
        nome: "",
        imagem: "icon.png",
        cor: "primaria"
    },
];


const Home = () => {
    return (
        <View style={estiloHome.container}>
            <Text style={estiloHome.textoTituloTela}>Categorias</Text>
            <View style={estiloHome.areaBotao}>
                    {/* <Image style={{height: 50, width: 50}} src={require('../assets/transferir.png')}/> */}
            {
                categorias.map(cat => <BotaoCategoria cor={cat.cor}></BotaoCategoria>)
            }


           </View>
        </View>
    )
};


export default Home;