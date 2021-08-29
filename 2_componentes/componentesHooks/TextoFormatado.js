import React from 'react';
import {Text, Image, View} from 'react-native';

const Component = ({
  texto = 'Usuário não informou a mensagem',
  idade = 'Usuário não informou a idade',
}) => {
  return (
    <View
      style={{backgroundColor: 'red', alignItems: 'center', marginBottom: 5}}>
      <Text style={{fontSize: 20}}>Mensagem: {texto}</Text>
      <Text style={{fontSize: 20}}>Idade: {idade}</Text>
      <Image style={{width:50, height:50}} source={require('./img.jpg')} />
    </View>
  );
};

export default Component;
