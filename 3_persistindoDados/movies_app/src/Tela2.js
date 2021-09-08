import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {useRoute} from '@react-navigation/native';

const Tela2 = () => {
  const route = useRoute();
  const data = route.params.data;

  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={{width: 200, height: 300}} />
      <Text style={styles.tituloLabel}>{data.filme}</Text>
      <Text style={styles.outrasLabel}>Ano: {data.ano}</Text>
      <Text style={styles.outrasLabel}>Estilo: {data.estilo}</Text>
      <Text style={styles.outrasLabel}>Sinopse:</Text>
      <Text >{data.descricao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: 'column',
    backgroundColor: '#d3d3d3',
  },
  tituloLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  outrasLabel: {
    paddingVertical:5,
  },
});

export default Tela2;
