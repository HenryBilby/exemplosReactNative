import React, {useState, useEffect} from 'react';
import {TextInput, Text, View, StyleSheet, Button} from 'react-native';

import {TextInputMask} from 'react-native-masked-text';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  useEffect(() => {
    AsyncStorage.getItem('@user')
      .then(res => {
        let temp = JSON.parse(res);
        setTelefone(temp.telefone);
        setName(temp.name);
      })
      .catch(err => alert('Erro ao recuperar o que estava armazenado: ' + err));
  }, []);

  const [telefone, setTelefone] = useState('');
  const [name, setName] = useState('');

  // const salvar = async () => {
  //   await AsyncStorage.setItem('@telefone', telefone);
  // };

  const salvar = function () {
    const user = {name: name, telefone: telefone};


    AsyncStorage.setItem('@user', JSON.stringify(user))
      .then(res => alert('ok'))
      .catch(err => alert('Erro ao salvar: ' + err));
  };

  const apagar = function () {
    AsyncStorage.removeItem('@user')
      .then(res => alert('ok'))
      .catch(err => alert('Erro ao salvar: ' + err));
    setTelefone('');
    setName('');
  };

  return (
    <View>
      <Text>Digite seu nome: </Text>

    <TextInput
      style={styles.input}
      value={name}
      onChangeText={text => setName(text)}
    />

      <Text>Digite seu telefone: </Text>

      <TextInputMask
        style={styles.input}
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) ',
        }}
        value={telefone}
        onChangeText={text => setTelefone(text)}
      />

      <Text>{telefone}</Text>

      <Button title="Salvar" onPress={salvar} />
      <Button title="Apagar" onPress={apagar} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {borderWidth: 1},
});

export default App;
