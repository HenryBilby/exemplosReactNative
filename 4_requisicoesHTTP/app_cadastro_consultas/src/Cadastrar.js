import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import {TextInputMask} from 'react-native-masked-text';

import {useNavigation} from '@react-navigation/native';

import Axios from 'axios';

const Cadastra = () => {
  const navigation = useNavigation();

  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [medico, setMedico] = useState('');
  const [paciente, setPaciente] = useState('');

  const url_base = 'http://10.0.2.2:3000/consulta/';

  const cadastrar = () => {
    if (!data || !hora || !medico || !paciente) {
      alert('Todos os parâmetros devem ser preenchidos!');
    } else {
      Axios.post(url_base, {
        data: data,
        hora: hora,
        medico: medico,
        paciente: paciente,
      })
        .then(res => {
          alert('Consulta salva com sucesso!');
          navigation.navigate('Home', {res});
        })
        .catch(error => {
          alert('Erro ao salvar a consulta.');
          console.error('POST - Erro ao salvar a consulta.' + error);
        });
    }
  };

  return (
    <View style={styles.viewMain}>
      <View style={styles.viewTopo}>
        <Text style={styles.textTopo}>Agendar Consulta</Text>
      </View>
      <View style={styles.viewCorpo}>
        <TextInput
          value={medico}
          onChangeText={txt => setMedico(txt)}
          placeholder="Informe o medico da consulta"
          style={styles.textInput}
          placeholderTextColor="green"
        />
        <TextInput
          value={paciente}
          onChangeText={txt => setPaciente(txt)}
          placeholder="Informe o paciente da consulta"
          style={styles.textInput}
          placeholderTextColor="green"
        />
        <TextInputMask
          type={'datetime'}
          options={{
            format: 'DD/MM/YY',
          }}
          value={data}
          onChangeText={txt => setData(txt)}
          placeholder="Informe a data da consulta"
          style={styles.textInput}
          placeholderTextColor="green"
        />
        <TextInputMask
          type={'datetime'}
          options={{
            format: 'HH:mm',
          }}
          value={hora}
          onChangeText={txt => setHora(txt)}
          placeholder="Informe a hora da consulta"
          style={styles.textInput}
          placeholderTextColor="green"
        />
        <TouchableOpacity style={styles.touch} onPress={cadastrar}>
          <Text style={styles.textTouch}> Salvar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewMain: {
    backgroundColor: '#BDECB6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewTopo: {
    flex: 0.2,
    width: '90%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 50,
  },

  textTopo: {color: 'green', fontSize: 20, fontWeight: 'bold'},

  viewCorpo: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    alignContent: 'center',
  },

  textInput: {
    color: 'green',
    fontSize: 16,
    marginTop: 10,
    borderWidth: 1,
    width: '100%',
    height: 50,
    borderRadius: 10,
    padding: 7,
    marginBottom: 10,
    backgroundColor: 'white',
    borderColor: 'white',
  },

  touch: {
    margin: 20,
    backgroundColor: 'white',
    width: 100,
    height: 50,
    borderRadius: 10,
  },

  textTouch: {
    color: 'green',
    textAlign: 'center',
    paddingVertical: 12,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Cadastra;
