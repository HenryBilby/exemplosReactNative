//useState() é um Hook que te permite adicionar o state do React a um componente de função.
//Quando o state muda, o componente responde renderizando novamente.

import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';

const App = () => {
  const [valor, setValor] = useState(0);

  const maisUm = () => {
    setValor(valor + 1);
  };

  useEffect(() => {
    alert('Valor foi alterado');
  }, [valor]);

  return (
    <View>
      <Text style={{fontSize: 50}}>{valor}</Text>
      <Button title="Pressione" onPress={maisUm} />
    </View>
  );
};

export default App;
