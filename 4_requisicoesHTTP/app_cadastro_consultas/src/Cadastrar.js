import React from 'react';
import {Text, Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Cadastra = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Agendar Consulta</Text>
      <Button
        title="Agendar"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default Cadastra;
