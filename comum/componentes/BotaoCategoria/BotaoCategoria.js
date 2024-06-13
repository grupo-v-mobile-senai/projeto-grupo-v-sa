import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import CORES from '../../constantes/CORES';
import { ImagesAssets } from '../../../assets/ImagesAssets';
import { useNavigation } from '@react-navigation/native';
import TELAS from '../../constantes/TELAS';

const estilos = StyleSheet.create({
  botao: {
    height: 96,
    width: 96,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center'
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
  imagemCategoria: {
    width: 68,
    height: 68,
  }
})

const BotaoCategoria = ({ categoria }) => {
  const navigation = useNavigation()

  const estilosBotao = [estilos.botao];

  switch (categoria.cor) {
    case 'primaria':
      estilosBotao.push(estilos.botaoPrimario);
      break;
    case 'secundaria':
      estilosBotao.push(estilos.botaoSecundario);
      break;
    case 'terceira':
      estilosBotao.push(estilos.botaoTerciario);
      break;
    case 'quarta':
      estilosBotao.push(estilos.botaoQuaternario);
      break;
  }
  return (
    <Pressable style={estilosBotao}
      onPress={() => navigation.navigate(TELAS.TELA_LISTA_PRODUTOS, { categoria })}
    >
      <Image
        style={estilos.imagemCategoria}
        source={ImagesAssets[categoria.imagem]}
      />
    </Pressable>
  );
};

export default BotaoCategoria;