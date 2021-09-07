/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Switch} from 'react-native';

const App = () => {
  const [temperatura, setTemperatura] = useState('');
  const [resultado, setResultado] = useState('');
  const [visible, setVisible] = useState(true);
  const [visibleLabelResult, setvisibleLabelResult] = useState(false);
  const [temperaturaEscolhida, setTemperaturaEscolhida] = useState('Celsius');
  const [temperaturaResultado, setTemperaturaResultado] =
    useState('Fahrenheit');

  const calcular = () => {
    const temperaturaDigitada = parseFloat(temperatura);
    let temperaturaCalculada = 0.0;
    if (visible) {
      temperaturaCalculada = temperaturaDigitada * (9 / 5) + 32;
    } else {
      temperaturaCalculada = (temperaturaDigitada - 32) * (5 / 9);
    }

    setvisibleLabelResult(true);
    setResultado(temperaturaCalculada);
  };

  const toggleSwitch = () => {
    if (visible) {
      setTemperaturaEscolhida('Fahrenheit');
      setTemperaturaResultado('Celsius');
    } else {
      setTemperaturaEscolhida('Celsius');
      setTemperaturaResultado('Fahrenheit');
    }
    setVisible(!visible);
    setResultado('');
    setvisibleLabelResult(false);
  };

  return (
    <View
      style={{
        backgroundColor: '#00008B',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{color: '#fff', fontSize: 26, fontWeight: 'bold', flex: 0.8}}>
          {'Converter ' + temperaturaEscolhida + ' em ' + temperaturaResultado}
        </Text>
        <Switch
          style={{flex: 0.2}}
          value={visible}
          onValueChange={toggleSwitch}
        />
      </View>

      <TextInput
        keyboardType="numeric"
        placeholder={'Digite a temperatura em ' + temperaturaEscolhida}
        style={{
          backgroundColor: '#fff',
          width: '90%',
          marginVertical: 10,
        }}
        onChangeText={value => setTemperatura(value)}
      />

      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          width: '90%',
          justifyContent: 'center',
          marginVertical: 10,
        }}
        onPress={calcular}>
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
            justifyContent: 'center',
            padding: 10,
          }}>
          Calcular
        </Text>
      </TouchableOpacity>

      {visibleLabelResult ? (
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20,
          }}>
          A temperatura em {temperaturaResultado} é:
        </Text>
      ) : (
        <Text />
      )}

      <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
        {resultado}
      </Text>
    </View>
  );
};

export default App;
