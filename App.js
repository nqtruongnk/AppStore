/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  FlatList,
  ScrollView,
  Settings
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Categories from './screens/Categories'
import Category from './screens/Category';
import Cart from './screens/Cart';
import Oders from './screens/Oders';
import Settings from './screens/Settings'

const stack = createStackNavigator()
const tab = createBottomTabNavigator()
function App() {
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Categories' component={Categories} options={{ title: 'Categories' }}/>
        <stack.Screen name='Category' component={Category}
          options={({route})=>({title: route.params.name})}/>
      </stack.Navigator>
      <tab.Navigator>
        <tab.Screen name='Shopping' component={Categories}/>
        <tab.Screen name='Gio hang' component={Cart}/>
        <tab.Screen name='Don hang' component={Oders}/>
        <tab.Screen name='Settings' component={Settings}/>
      </tab.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'stretch',
    backgroundColor:'#fff',
    justifyContent:'center',
    paddingLeft: 16,
    paddingRight:16
  },
})
  
export default App