import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import { Image, StyleSheet, View } from 'react-native';
import TelaLogin from './src/TelaLogin/TelaLogin';
import TelaCadastro from './src/TelaCadastro/TelaCadastro';
import TELAS from './comum/constantes/TELAS';
import Home from './src/TelaHome/home';
import TelaListaProdutos from './src/TelaListaProdutos/TelaListaProdutos';
import CabecalhoCustomizado from './comum/componentes/CabecalhoCustomizado/CabecalhoCustomizado';

import { useEffect, useState } from 'react';
import { pegarItemStorage } from './comum/Services/serviceStorage';
import { CHAVES_STORAGE } from './comum/constantes/chaves_storage';
import TelaCadastroNovoProduto from './src/TelaCadastroNovoProduto/TelaCadastroNovoProduto';
import TelaPerfilUsuario from './src/TelaPerfilUsuario/TelaPerfilUsuario';
import TelaEditarProduto from './src/TelaEditarProduto/TelaEditarProduto';
import { NativeBaseProvider } from 'native-base';


const Stack = createStackNavigator();

// const ImagemTitulo = () => {
//   <Image
//     style={{ height: 24, width: 24 }}
//     source={{ uri: 'assets/transferir.png' }}
//   />
// }

export default function App() {
  const [usuarioLogado, setUsuarioLogado] = useState();

  useEffect(() => {
    const verificarSeUsuarioEstaLogado = async () => {
      const usuarioNoStorage = await pegarItemStorage(CHAVES_STORAGE.USUARIO_LOGADO);
      setUsuarioLogado(usuarioNoStorage);
    }

    verificarSeUsuarioEstaLogado();
  }, []);

  if (usuarioLogado === undefined) {
    return <></>
  }


  return (
      <NativeBaseProvider>
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={usuarioLogado ? TELAS.TELA_INICIO : TELAS.TELA_LOGIN}
          screenOptions={{ cardStyle: { flex: 1 }, header: CabecalhoCustomizado }}
        >
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name={TELAS.TELA_LOGIN} component={TelaLogin} />
            <Stack.Screen name={TELAS.TELA_CADASTRO} component={TelaCadastro} />
          </Stack.Group>
          <Stack.Screen
            name={TELAS.TELA_INICIO}
            component={Home}
            options={{ title: 'Home', headerLeft: false }} />
          <Stack.Screen name={TELAS.TELA_PERFIL_USUARIO} component={TelaPerfilUsuario} options={{ title: 'Perfil'}}/>
          <Stack.Screen name={TELAS.TELA_LISTA_PRODUTOS} component={TelaListaProdutos} options={{ title: 'Produtos' }} />
          <Stack.Screen name={TELAS.TELA_NOVO_PRODUTO} component={TelaCadastroNovoProduto} options={{ title: 'Novo Produto' }} />
          <Stack.Screen name={TELAS.TELA_EDITAR_PRODUTO} component={TelaEditarProduto} options={{ title: 'Editar'}}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});