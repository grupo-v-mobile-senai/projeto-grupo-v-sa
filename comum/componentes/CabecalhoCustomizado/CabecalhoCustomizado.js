import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, Text, View } from 'react-native';
import CORES from '../../constantes/CORES';
import TELAS from '../../constantes/TELAS';
import estilos from './CabecalhoCustomizadoStyle';


const CabecalhoCustomizado = (props) => {
  return (
    <View style={estilos.container}>
      {props.navigation.canGoBack() && (
        <MaterialIcons name='arrow-back' size={24} color={CORES.PRIMEIRA_COR} onPress={props.navigation.goBack} />
      )}

      <Text style={estilos.titulo}>{props.options.title}</Text>

      <Pressable onPress={() => props.navigation.navigate(TELAS.TELA_PERFIL_USUARIO)}>
        <View style={estilos.avatar}>
          <Text>TC</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CabecalhoCustomizado;
