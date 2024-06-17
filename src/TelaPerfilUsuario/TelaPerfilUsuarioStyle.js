
import { StyleSheet } from 'react-native';
import CORES from '../../comum/constantes/CORES';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  containerAvatar: {
    alignItems: 'center',
  },
  avatar: {
    height: 96,
    width: 96,
    borderRadius: 96,
    backgroundColor: CORES.SEGUNDA_COR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    height: 96,
    width: 96,
    borderRadius: 96,
  },
  botaoSair: {
    height: 40,
    minWidth: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default estilos;
