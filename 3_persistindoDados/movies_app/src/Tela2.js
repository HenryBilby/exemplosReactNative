import React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  Alert,
} from 'react-native';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';

import {useRoute} from '@react-navigation/native';

async function openLink(url) {
  try {
    if (await InAppBrowser.isAvailable()) {
      await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: '#453AA4',
        preferredControlTintColor: 'white',
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'coverVertical',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor: '#6200EE',
        secondaryToolbarColor: 'black',
        navigationBarColor: 'black',
        navigationBarDividerColor: 'white',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animation bundled with app).
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right',
        },
        headers: {
          'my-custom-header': 'my custom header value',
        },
      });
    } else {
      Linking.openURL(url);
    }
  } catch (error) {
    console.log(error.message);
  }
}

const Tela2 = () => {
  const route = useRoute();
  const {data} = route.params;

  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={{width: 200, height: 300}} />
      <Text style={styles.tituloLabel}>{data.filme}</Text>
      <Text style={styles.outrasLabel}>Ano: {data.ano}</Text>
      <Text style={styles.outrasLabel}>Estilo: {data.estilo}</Text>
      <Text style={styles.outrasLabel}>Sinopse:</Text>
      <Text>{data.descricao}</Text>
      <Button
        title="Search on Google"
        onPress={() => openLink(data.searchUrl)}
      />
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
    paddingVertical: 5,
  },
  button: {
    paddingTop: 20,
  },
});

export default Tela2;
