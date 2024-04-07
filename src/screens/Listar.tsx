import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Listar = () => {
  const [info, setInfo] = useState('');

  useEffect(() => {
    const pegarInformacao = async () => {
      try {
        const storedInfo = await AsyncStorage.getItem('info');
        setInfo(storedInfo);
      } catch (error) {
        console.log(error);
      }
    };

    pegarInformacao();
  }, []);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
}

export default Listar;
