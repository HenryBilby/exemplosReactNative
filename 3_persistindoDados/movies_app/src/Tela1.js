import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import FlatComponent from './components/FlatComponent';

const Tela1 = () => {
  const data = [
    {
      key: '0',
      filme: 'SCOOBY! O Filme',
      ano: 2020,
      estilo: 'Comédia',
      direcao: 'Tony Cervone',
      searchUrl: 'https://www.google.com/search?q=scooby-doo+o+filme',
      image:
        'https://br.web.img3.acsta.net/pictures/20/03/05/20/58/4942195.jpg',
      descricao:
        'SCOOBY! O Filme é uma história de origem dos famosos personagens da série animada da Hanna Barbera. Salsicha e Scooby tem uma conexão instantânea envolvendo comida em seu primeiro encontro, e logo se unem aos jovens detetives Fred, Velma e Daphne para formar a Mistério S/A. Só que, após resolver centenas de casos, eles encontram o desafio de impedir o "apocãolipse", que virá quando o fantasma do cão Cerberus for liberado no mundo.',
    },

    {
      key: '1',
      filme: 'Doce Entardecer na Toscana',
      ano: 2021,
      estilo: 'Drama',
      direcao: 'Jacek Borcuch',
      searchUrl: 'https://www.google.com/search?q=doce+entardecer+o+filme',
      image:
        'https://br.web.img3.acsta.net/pictures/19/12/11/19/47/1467591.jpg',
      descricao:
        'Com a chegada de um novo imigrante na cidade, Maria, uma mãe de família tem sua vida virada de cabeça para baixo. Conforme ela se relaciona com o rapaz, um cenário de terrorismo começa a se desenrolar na, até então, calma região da Toscana.',
    },
  ];

  const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
    },
  });

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <FlatComponent data={item} />}
      />
    </View>
  );
};

export default Tela1;
