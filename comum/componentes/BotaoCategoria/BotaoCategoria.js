import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start'
  },
  botao: {
    height: 96,
    width: 96,
    backgroundColor: 'blue'
  }
})

const BotaoCategoria = () => {
  return (
    <View style={estilos.container}>
      <Pressable style={estilos.botao}>
        <Text>
          Alo
        </Text>
      </Pressable>
    </View>
  );
};

export default BotaoCategoria;