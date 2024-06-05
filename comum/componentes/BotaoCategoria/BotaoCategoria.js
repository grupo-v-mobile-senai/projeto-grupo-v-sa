import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import CORES from '../../constantes/CORES';

const estilos = StyleSheet.create({
  botao: {
    height: 96,
    width: 96,
    borderRadius: 16,
    backgroundColor: 'blue'
  },
  botaoPrimario: {
    backgroundColor: CORES.PRIMEIRA_COR,
  },
  botaoSecundario: {
    backgroundColor: CORES.SEGUNDA_COR,
  },
  botaoTerciario: {
    backgroundColor: CORES.TERCEIRA_COR,
  },
  botaoQuaternario: {
    backgroundColor: CORES.QUARTA_COR
  },
})

const BotaoCategoria = (props) => {
  const estilosBotao = [estilos.botao];

  switch (props.cor) {
    case 'primaria':
      estilosBotao.push(estilos.botaoPrimario);
      break;
    case 'secundaria':
      estilosBotao.push(estilos.botaoSecundario);
      break;
    case 'terciaria':
      estilosBotao.push(estilos.botaoTerciario);
      break;
    case 'quaternaria':
      estilosBotao.push(estilos.botaoQuaternario);
      break;
  }
  return (
    <Pressable style={estilosBotao}>
      <Text>

      </Text>
    </Pressable>
  );
};

export default BotaoCategoria;