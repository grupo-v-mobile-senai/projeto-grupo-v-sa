import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from 'react-native';
import TelaLogin from './src/TelaLogin/TelaLogin';
import Home from './src/home';
import TelaCadastro from './src/TelaCadastro/TelaCadastro';
import TELAS from './comum/constantes/TELAS';


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaListaProdutos from './src/TelaListaProdutos/TelaListaProdutos';

const Stack = createStackNavigator();

const ImagemTitulo = () => {
    <Image
      style={{height: 24, width: 24}}
      source={{uri: 'assets/transferir.png'}}
    />
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name={TELAS.TELA_INICIO} 
          component={Home} 
          options={{ title: 'Home', headerLeft: (props) => <ImagemTitulo {...props}/>  }}>
          </Stack.Screen>
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name={TELAS.TELA_LOGIN} component={TelaLogin} />
            <Stack.Screen name={TELAS.TELA_CADASTRO} component={TelaCadastro} />
            <Stack.Screen name={TELAS.TELA_LISTA_PRODUTOS} component={TelaListaProdutos} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
