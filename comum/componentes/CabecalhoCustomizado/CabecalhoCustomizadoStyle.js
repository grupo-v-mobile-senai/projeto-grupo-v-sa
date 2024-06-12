import { StyleSheet } from 'react-native';
import CORES from '../../constantes/CORES';
const estilos = StyleSheet.create({
  container: {
    backgroundColor: CORES.SEGUNDA_COR,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  titulo: {
    // color: CORES.SEGUNDA_COR,
    fontSize: 16,
  },
  avatar: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: CORES.FUNDO_PADRAO,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default estilos;
