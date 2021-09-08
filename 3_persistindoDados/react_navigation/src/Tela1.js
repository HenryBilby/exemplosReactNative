import React, {useState} from 'react';
import {View, TextInput, Text, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Tela1 = () => {

  const [name, setName] = useState('');

  const navigation = useNavigation();

  const chamaTabs = () => {
    navigation.navigate('Tabs');
  };

  //Esta func passa os parÂmetros nomeDigitado e age, para a Tela2
  const chamaTela2 = () => {
    navigation.navigate('Tela2', {nomeDigitado: name, age: 30});
  };

  return (
    <View>
      <Text>Tela 1</Text>
      <TextInput value={name} onChangeText={txt=>setName(txt)} placeholder="Digite seu nome."/>
      <Button title="Ir para Tabs" onPress={chamaTabs} />
      <Button title="Ir para Tela 2" onPress={chamaTela2} />
    </View>
  );
};

export default Tela1;
