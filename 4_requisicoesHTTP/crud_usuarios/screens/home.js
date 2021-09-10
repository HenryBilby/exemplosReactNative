import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

import axios from 'axios';

const Home = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const [users, setUsers] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    //Ao iniciar o aplicativo o app, carrega todos os usuários cadastrados no servidor, através de uma requisição GET;

    console.log(
      'useEffect: realizando uma requisição get para atualizar os usuarios',
    );
    axios
      .get('http://10.0.2.2:3000/users')
      .then(res => setUsers(res.data))
      .catch(error =>
        console.log('GET - Erro ao recuperar os usuários. Erro: ' + error),
      );
  }, [route.params?.user]);

  const saveUser = () => {
    axios
      .post('http://10.0.2.2:3000/users', {name: name, location: location})
      .then(res => {
        const temp = [...users, res.data];
        setUsers(temp);
      })
      .catch(error =>
        console.log(
          'POST - Erro ao salvar o usuário: ' + name + ' erro: ' + error,
        ),
      );

    cleanTextInputs();
  };

  const deleteUser = id => {
    axios
      .delete('http://10.0.2.2:3000/users/' + id)
      .then(res => {

        const temp = users.filter(userItem => {
          return userItem.id !== id;
        });

        setUsers(temp);
      })
      .catch(error =>
        console.log(
          'DELETE - Erro ao deletar o usuario com id: ' +
            id +
            ' erro: ' +
            error,
        ),
      );
  };

  const cleanTextInputs = () => {
    setName('');
    setLocation('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>CRUD USUÁRIOS</Text>
      <TextInput
        value={name}
        onChangeText={txt => setName(txt)}
        style={styles.input}
        placeholder="Nome do Usuário"
      />
      <TextInput
        value={location}
        onChangeText={txt => setLocation(txt)}
        style={styles.input}
        placeholder="Localidade"
      />
      <TouchableOpacity style={styles.button} onPress={saveUser}>
        <Text style={styles.txtButton}> Cadastrar</Text>
      </TouchableOpacity>

      <FlatList
        data={users}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row'}}>
            
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', {user: item})}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={() => deleteUser(item.id)}
              style={{backgroundColor: 'red', marginLeft: 10}}>
              <Text style={{color: 'white'}}>Apagar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* <FlatList keyExtractor={(item, index) => item.id.toString()} data={users} renderItem={({ item }) => (
            <View style={{ flexDirection: 'row' }}>

              <TouchableOpacity onPress={() => navigation.navigate('Details', { user: item })}>
                <Text>{item.name}</Text>
              </TouchableOpacity>

              <Text onPress={() => deleteUser(item.id)} style={{ color: 'red', marginLeft: 10 }}>Apagar</Text>
            </View>
          )} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#545454',
    marginVertical: 10,
    padding: 5,
    height: 45,
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtButton: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Home;
