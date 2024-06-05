
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import BotaoCategoria from '../comum/componentes/BotaoCategoria/BotaoCategoria';

const estiloHome = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 48
    },
    areaBotao: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 24,
        
    }
})


const Home = () => {
    return (
        <View style={estiloHome.container}>
            <View style={estiloHome.areaBotao}>
                <BotaoCategoria cor='primaria'></BotaoCategoria>
                <BotaoCategoria cor='secundaria'></BotaoCategoria>
                <BotaoCategoria cor='primaria'></BotaoCategoria>
                <BotaoCategoria cor='terciaria'></BotaoCategoria>
                <BotaoCategoria cor='primaria'></BotaoCategoria>
                <BotaoCategoria cor='quaternaria'></BotaoCategoria>
                <BotaoCategoria cor='primaria'></BotaoCategoria>
                <BotaoCategoria cor='quaternaria'></BotaoCategoria>
                <BotaoCategoria cor='secundaria'></BotaoCategoria>
                <BotaoCategoria cor='quaternaria'></BotaoCategoria>
                <BotaoCategoria cor='secundaria'></BotaoCategoria>
                <BotaoCategoria cor='terciaria'></BotaoCategoria>
                <BotaoCategoria cor='primaria'></BotaoCategoria>
                <BotaoCategoria cor='quaternaria'></BotaoCategoria>
                <BotaoCategoria cor='terciaria'></BotaoCategoria>
            </View>
        </View>
    )
};


export default Home;