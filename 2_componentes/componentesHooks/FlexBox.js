import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: 'yellow',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}>
      <View style={styles.viewVerde} />
      <View style={styles.viewAzul} />
      <View style={styles.viewVermelha} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewVerde: {
    width: 150,
    height: 150,
    backgroundColor: 'green',
  },

  viewAzul: {
    width: 150,
    height: 150,
    backgroundColor: 'blue',
  },

  viewVermelha: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
});

export default App;
