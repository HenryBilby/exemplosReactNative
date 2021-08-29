//useState() é um Hook que te permite adicionar o state do React a um componente de função.
//Quando o state muda, o componente responde renderizando novamente.

import React, {useState} from 'react';
import {Modal, View, Button, Text} from 'react-native';

const App = () => {
  const [visible, setVisible] = useState(false);

  const abreModal = () => {
    setVisible(true);
  };

  const fechaModal = () => {
    setVisible(false);
  };

  return (
    <View>
      <Text> Hello World</Text>

      <Button title="Abrir modal" onPress={abreModal} />

      <Modal visible={visible}>
        <View style={{width: 200, height: 200, backgroundColor: 'red'}}>
          <Text style={{fontSize: 20}}>
            Olá eu sou um modal com um Text e um Button
          </Text>
          <Button title="Fechar modal" onPress={fechaModal} />
        </View>
      </Modal>
    </View>
  );
};

export default App;
