import React from 'react';
import {View, Text, Button} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

const Tela2 = () => {

  //Recuperando os dados digitados na Tela1, através do useRoute.
  const route = useRoute();
  const name = route.params.nomeDigitado;
  const age = route.params.age;

  const navigation = useNavigation();

  const voltar = () => {
    navigation.goBack();
  }

  return (
    <View>
      <Text>Tela 2</Text>
      <Text>Seja Bem Vindo {name} - {age}</Text>
      <Button title="Voltar" onPress={voltar}/>
    </View>
  );
}

export default Tela2;
