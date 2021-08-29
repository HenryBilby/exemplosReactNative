import React from 'react'
import {Button, Text, View} from 'react-native'

class App extends React.Component {

  state = {
    numero : 1
  }

  maisUm = () => {
    this.setState({numero: this.state.numero+1})
  }

  render(){
    return (
      <View>
        <Text>{this.state.numero}</Text>
        <Button title="Somar" onPress={this.maisUm}></Button>
      </View>
    )
  }
}

export default App;