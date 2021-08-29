import React from 'react';
import {ScrollView} from 'react-native';
import TextoFormatado from './TextoFormatado';

const App = () => {
  return (
    <ScrollView>
      <TextoFormatado idade={20} texto="Feliz Ano Novo" />
      <TextoFormatado idade={25} texto="Olá" />
      <TextoFormatado idade={30} texto="Feliz Natal" />
      <TextoFormatado />
      <TextoFormatado />
    </ScrollView>
  );
};

export default App;
