import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, Text, View } from 'react-native';
import CORES from '../../constantes/CORES';
import TELAS from '../../constantes/TELAS';
import estilos from './CabecalhoCustomizadoStyle';
import { useEffect, useState } from 'react';
import { CHAVES_STORAGE } from '../../constantes/chaves_storage';
import { pegarItemStorage } from '../../Services/serviceStorage';

const CabecalhoCustomizado = (props) => {
  const [usuarioLogado, setUsuarioLogado] = useState();

  useEffect(() => {
    const verificarSeUsuarioEstaLogado = async () => {
      const usuarioNoStorage = await pegarItemStorage(CHAVES_STORAGE.USUARIO_LOGADO);
      setUsuarioLogado(usuarioNoStorage);
    }

    verificarSeUsuarioEstaLogado();
  }, []);

  return (
    <View style={estilos.container}>
      {props.navigation.canGoBack() && (
        <MaterialIcons name='arrow-back' size={24} color={CORES.BOTAO_VOLTAR} onPress={props.navigation.goBack} />
      )}

      <Text style={estilos.titulo}>{props.options.title}</Text>

      {usuarioLogado && (
        <Pressable onPress={() => props.navigation.navigate(TELAS.TELA_PERFIL_USUARIO)}>
          <View style={estilos.avatar}>
            <Text>{usuarioLogado.nome[0]}</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default CabecalhoCustomizado;
