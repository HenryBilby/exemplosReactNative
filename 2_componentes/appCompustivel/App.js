/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const App = () => {
  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const valorGasolina = parseFloat(gasolina);
    const valorAlcool = parseFloat(alcool);

    const valorFinal = valorAlcool / valorGasolina;

    if (valorFinal > 0.7) {
      setResultado('Gasolina');
    } else {
      setResultado('Álcool');
    }

    // setGasolina('');
    // setAlcool('');
  };

  return (
    <ImageBackground
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      source={{
        uri: 'https://fotos.jornaldacidadeonline.com.br/uploads/fotos/650x0_1626635541_60f47d15e11c1_hd.webp',
      }}>
      <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
        Álcool ou Gasolina
      </Text>
      <Text
        style={{
          color: '#fff',
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
        }}>
        Saiba qual a melhor opção de abastecimento para o seu veiculo
      </Text>

      <TextInput
        value={gasolina}
        keyboardType="numeric"
        placeholder="Digite o valor da Gasolina"
        style={{
          backgroundColor: '#fff',
          width: '90%',
          marginVertical: 10,
        }}
        onChangeText={value => setGasolina(value)}
      />
      <TextInput
        value={alcool}
        keyboardType="numeric"
        placeholder="Digite o valor do Álcool"
        style={{
          backgroundColor: '#fff',
          width: '90%',
          marginVertical: 10,
        }}
        onChangeText={value => setAlcool(value)}
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

      <Text
        style={{
          color: '#fff',
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
        }}>
        É melhor você abastecer com:
      </Text>
      <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
        {resultado}
      </Text>
    </ImageBackground>
  );
};

export default App;
