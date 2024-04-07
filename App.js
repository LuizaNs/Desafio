import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tarefa from './src/screens/Tarefa';
import Listar from './src/screens/Listar';
import Excluir from './src/screens/Excluir';
import {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/Tarefa.js';

export default function App() {

  const [task, setTask] = useState();

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);

  const [taskItems, setTaskItems] = useState([]);

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)  }

  }

  return (
    <View style={styles.container}>

      {/*Tarefas de hoje */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Minhas tarefas</Text>

        <View style={styles.itens}>
          {/*Local das tarefas*/}
          {
            taskItems.map((item, index) => {

            {/* return <task key={index}text={item} /> */}

              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )

            })
          }

          {/*<Task text={'Pentear o cabelo'}/>
          <Task text={'Passar maquiagem'} />
          <Task text={'Fazer as unhas'}/>
          <Task text={'Falar com o princípe'}/>
        <Task text={'Reinar o reino'}/>*/}

        </View>

      </View>
      <KeyboardAvoidingView 
        behavior={Platform.android === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Escreva a terefa'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AdicionarTarefa">
        <Stack.Screen name="AdicionarTarefa" component={Adicionar} options={{ title: 'Adicionar tarefas' }} />
        <Stack.Screen name="ListarTarefas" component={Listar} options={{ title: 'Listar tarefas' }} />
        <Stack.Screen name="ExcluirTarefas" component={Excluir} options={{ title: 'Excluir Tarefas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE82EE',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  itens: {
    marginTop: 30,
    
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
})
};
