import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaLogin from './src/TelaLogin/TelaLogin';
import Home from './src/home';
import TELAS from './comum/telas';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen name={TELAS.TELA_LOGIN} component={TelaLogin} />
          </Stack.Group>
          <Stack.Screen name={TELAS.TELA_INICIO} component={Home} options={{ title: 'Home', headerLeft: null }}></Stack.Screen>
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
