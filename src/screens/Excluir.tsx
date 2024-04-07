import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Excluir = ({ navigation }) => {
  const [info, setInfo] = useState('');

  const excluir = async () => {
    try {
      await AsyncStorage.removeItem('info');
      setInfo('');
      navigation.navigate('ListInfo');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{info ? info : 'Nenhuma informação salva'}</Text>
      {info && <Button title="Excluir Informação" onPress={excluir} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Excluir;
