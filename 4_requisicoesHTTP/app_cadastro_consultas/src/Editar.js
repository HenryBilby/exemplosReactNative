import React from 'react';
import {Text, Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Edita = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Editar Consulta</Text>
      <Button
        title="Salvar Alterações"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default Edita;
