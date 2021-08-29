import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: 'red',
  },

  textBotao: {
    fontSize: 25,
    color: 'black',
  },

  botao: {
    backgroundColor: 'violet',
    alignItems: 'center',
  },
});

const App = () => {
  return (
    <View>
      <Text style={styles.text}>hmmb</Text>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textBotao}> Botão</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
