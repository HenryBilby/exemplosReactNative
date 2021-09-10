import React, {useState, useEffect} from 'react';
import {
  Text,
  Button,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import Axios from 'axios';

const Home = () => {
  const url_base = 'http://10.0.2.2:3000/consulta/';
  const [consultas, setConsultas] = useState([]);

  const route = useRoute();

  useEffect(() => {
    Axios.get(url_base)
      .then(res => {
        setConsultas(res.data);
      })
      .catch(error => {
        console.error('GET - Erro ao recuperar as consultas. ' + error);
      });
  }, [route.params?.res]);

  const navigation = useNavigation();

  return (
    <View style={styles.viewMain}>
      <View style={styles.viewTop}>
        <Text style={styles.textViewTop}>Consultas Agendadas</Text>
        <TouchableOpacity
          style={styles.touchViewTop}
          onPress={() => {
            navigation.navigate('Cadastrar');
          }}>
          <Text style={styles.textTouchViewTop}>Agendar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatList}
        data={consultas}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.touchFlatList}
            onPress={() => {
              navigation.navigate('Editar', {consulta: item});
            }}>
            <Text style={styles.dataTouchFlatList}>{item.data}</Text>
            <View style={styles.viewTouchFlatList}>
              <Text style={styles.textViewTouchFlatList}>Hora:{item.hora}</Text>
              <Text style={styles.textViewTouchFlatList}>
                Medico:{item.medico}
              </Text>
              <Text style={styles.textViewTouchFlatList}>
                Paciente:{item.paciente}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
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

  viewTop: {
    flex: 0.2,
    flexDirection: 'row',
    width: '90%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    margin: 50,
    backgroundColor: 'white',
  },

  flatList: {
    width: '90%',
    height: '100%',
    flex: 0.8,
    flexDirection: 'column',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 50,
    backgroundColor: 'white',
  },

  textViewTop: {color: 'green', fontSize: 20, fontWeight: 'bold', flex: 0.9},

  touchViewTop: {
    backgroundColor: '#BDECB6',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#BDECB6',
    width: '20%',
    height: '50%',
    alignItems: 'center',
  },

  textTouchViewTop: {
    color: 'green',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },

  touchFlatList: {
    marginVertical: 15,
    marginHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#BDECB6',
    backgroundColor: '#BDECB6',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },

  dataTouchFlatList: {
    flex: 0.3,
    fontSize: 20,
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold',
    paddingVertical: 20,
  },

  viewTouchFlatList: {
    flex: 0.7,
    justifyContent: 'center',
  },

  textViewTouchFlatList: {
    color: 'green',
  },
});

export default Home;
