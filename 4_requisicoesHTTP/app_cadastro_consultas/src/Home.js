import React, {useState, useEffect} from 'react';
import {Text, Button, View, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import Axios from 'axios';

const Home = () => {
  const url_base = 'http://10.0.2.2:3000/consulta/';
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    Axios.get(url_base)
      .then(res => {
        setConsultas(res.data);
      })
      .catch(error => {
        console.error('GET - Erro ao recuperar as consultas. ' + error);
      });
  }, []);

  const navigation = useNavigation();

  return (
    <View>
      <Text>Consultas Agendadas</Text>
      <Button
        title="Agendar Consulta"
        onPress={() => {
          navigation.navigate('Cadastrar');
        }}
      />
      <FlatList
        data={consultas}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Editar');
            }}>
            <Text>Data:{item.data}</Text>
            <Text>Hora:{item.hora}</Text>
            <Text>Medico:{item.medico}</Text>
            <Text>Paciente:{item.paciente}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
