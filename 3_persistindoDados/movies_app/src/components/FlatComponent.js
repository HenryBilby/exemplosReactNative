import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const FlatComponent = ({data}) => {
  const navigation = useNavigation();

  //Esta func passa os parÂmetros nomeDigitado e age, para a Tela2
  const chamaTela2 = () => {
    navigation.navigate('Tela2', {data: data});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={chamaTela2}>
      <Image
        resizeMode="contain"
        source={{uri: data.image}}
        style={{width: 100, height: 100}}
      />

      <View style={styles.subContainer}>
        <Text style={styles.tituloTopo}>{data.filme}</Text>
        <Text>{data.ano}</Text>
        <Text>{data.estilo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3d3d3',
    marginBottom: 5,
    flexDirection: 'row',
  },
  subContainer: {
    marginLeft: 10,
  },
  tituloTopo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FlatComponent;
