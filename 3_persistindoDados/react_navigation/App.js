import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Tela1 from './src/Tela1';
import Tela2 from './src/Tela2';

import Tab1 from './src/Tab1';
import Tab2 from './src/Tab2';

const StackNav = createStackNavigator();
const TabNav = createBottomTabNavigator();

function Tabs() {
  return (
    <TabNav.Navigator>
      <TabNav.Screen component={Tab1} name="Tab1" />
      <TabNav.Screen component={Tab2} name="Tab2" />
    </TabNav.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen component={Tela1} name="Tela1" />
        <StackNav.Screen component={Tela2} name="Tela2" />
        <StackNav.Screen component={Tabs} name="Tabs" />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

export default App;
