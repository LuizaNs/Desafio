import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Adicionar from './src/screens/Adicionar';
import Listar from './src/screens/Listar';
import Excluir from './src/screens/Excluir';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AdicionarInformação">
        <Stack.Screen name="AdicionarInformações" component={Adicionar} options={{ title: 'Adicionar Informações' }} />
        <Stack.Screen name="ListarInformações" component={Listar} options={{ title: 'Listar Informações' }} />
        <Stack.Screen name="ExcluirInformações" component={Excluir} options={{ title: 'Excluir Informações' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

