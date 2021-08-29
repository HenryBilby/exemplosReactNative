import React, {useState} from 'react';
import {
  Text,
  View,
  Switch,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [visible, setVisible] = useState(true);
  const [saldo, setSaldo] = useState(0);
  const [valorUsuario, setValorUsuario] = useState('');

  const add = () => {
    if (isValorUsuarioValido()) {
      const valDigitado = parseFloat(valorUsuario);
      setSaldo(saldo + valDigitado);
      setValorUsuario('');
    }
  };

  const remove = () => {
    if (isValorUsuarioValido()) {
      const valDigitado = parseFloat(valorUsuario);
      setSaldo(saldo - valDigitado);
      setValorUsuario('');
    }
  };

  const isValorUsuarioValido = () => {
    const valDigitado = parseFloat(valorUsuario);
    if (isNaN(valDigitado)) {
      alert('Valor incorreto, digite algum numero.');
      return false;
    }
    return true;
  };

  const toggleSwitch = () => setVisible(!visible);

  return (
    <View style={{padding: 10}}>
      <Text style={{marginBottom: 10}}>Carteira Digital</Text>

      <View style={{backgroundColor: 'blue', padding: 10, borderRadius: 10}}>
        <View style={styles.view1}>
          <Text> Seu saldo: </Text>
          <Switch onValueChange={toggleSwitch} value={visible} />
        </View>

        {/*if ternario*/}
        {visible ? ( 
          <Text style={styles.saldo}>R$ {saldo}</Text>
        ) : (
          <Text style={styles.saldo}>R$ --</Text>
        )}

        <TextInput
          value={valorUsuario}
          onChangeText={value => setValorUsuario(value)}
          style={{
            backgroundColor: '#fff',
            marginVertical: 10,
            borderRadius: 10,
          }}
        />

        <View style={styles.view2}>
          <TouchableOpacity style={styles.button} onPress={add}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={remove}>
            <Text style={styles.buttonText}>Remover</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  view2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  saldo: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
  },

  button: {
    height: 40,
    justifyContent: 'center',
    marginBottom: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
