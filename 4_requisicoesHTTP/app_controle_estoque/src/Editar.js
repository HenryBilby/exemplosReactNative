import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

import * as ImagePicker from 'react-native-image-picker';

import {useNavigation, useRoute} from '@react-navigation/native';

import Axios from 'axios';

const Editar = () => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [modelo, setModelo] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [img, setImg] = useState('');
  const [id, setId] = useState('');

  const navigation = useNavigation();

  const updateProduct = () => {
    if (titulo.trim() === '') {
      alert('Titulo não pode estar vazio');
    } else {
      const url = 'http://10.0.2.2:3000/product/' + id;
      Axios.patch(url, {
        titulo: titulo,
        categoria: categoria,
        modelo: modelo,
        quantidade: parseInt(quantidade, 10),
        img: img,
      })
        .then(res => {
          alert('Atualizado com sucesso!');
          navigation.navigate('Home', {res});
        })
        .catch(() => alert('Erro ao atualizar'));
    }
  };

  const deleteProduct = () => {
    const url = 'http://10.0.2.2:3000/product/' + id;
    Axios.delete(url)
      .then(res => {
        alert('Removido com sucesso!');
        navigation.navigate('Home', {res});
      })
      .catch(() => alert('Erro ao remover'));
  };

  const route = useRoute();

  useEffect(() => {
    const product = route.params.product;
    if (product !== null) {
      setTitulo(product.titulo);
      setCategoria(product.categoria);
      setModelo(product.modelo);
      setQuantidade(product.quantidade.toString());
      setImg(product.img);
      setId(product.id);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{uri: img ? img : null}} style={styles.image} />

      <TouchableOpacity
        onPress={() =>
          ImagePicker.launchImageLibrary({}, res => setImg(res.uri))
        }>
        <Text>Carregar imagem</Text>
      </TouchableOpacity>

      <TextInput
        value={titulo}
        onChangeText={txt => setTitulo(txt)}
        placeholder="Titulo"
        style={styles.textInput}
        placeholderTextColor="#5a5a5a"
      />

      <TextInput
        value={categoria}
        onChangeText={txt => setCategoria(txt)}
        placeholder="Categoria"
        style={styles.textInput}
        placeholderTextColor="#5a5a5a"
      />
      <TextInput
        value={modelo}
        onChangeText={txt => setModelo(txt)}
        placeholder="Modelo"
        style={styles.textInput}
        placeholderTextColor="#5a5a5a"
      />
      <TextInput
        value={quantidade}
        onChangeText={txt => setQuantidade(txt)}
        placeholder="Quantidade"
        style={styles.textInput}
        placeholderTextColor="#5a5a5a"
        keyboardType="numeric"
      />

      <View style={{flexDirection: 'row', flex: 1}}>
        <TouchableOpacity
          style={styles.touchableUpdate}
          onPress={updateProduct}>
          <Text style={styles.textButton}>Atualizar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableDelete}
          onPress={deleteProduct}>
          <Text style={styles.textButton}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Editar;

const styles = StyleSheet.create({
  container: {padding: 20, alignItems: 'center'},

  textButton: {
    color: 'white',
    paddingVertical:13,
    paddingHorizontal: 50,
  },

  touchableUpdate: {
    backgroundColor: 'blue',
    width: 100,
    height: 50,
    flex: 0.5,
    margin: 10,
    borderRadius: 10,
  },

  touchableDelete: {
    backgroundColor: 'red',
    width: 100,
    height: 50,
    flex: 0.5,
    margin: 10,
    borderRadius: 10,
  },

  textInput: {
    fontSize: 16,
    marginTop: 10,
    borderWidth: 1,
    width: '100%',
    height: 50,
    borderRadius: 10,
    padding: 7,
    marginBottom: 10,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#545454',
    borderWidth: 1,
  },
});
