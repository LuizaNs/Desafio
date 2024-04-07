import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Adicionar = ({ navigation }) => {
  const [info, setInfo] = useState('');

  const adicionar = async () => {
    try {
      await AsyncStorage.setItem('info', info);
      navigation.navigate('Listar');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite as informações"
        onChangeText={text => setInfo(text)}
        value={info}
      />
      <Button title="Salvar" onPress={adicionar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default Adicionar;
