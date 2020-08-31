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
import AppNavigation from './AppNavigation';


const stack = createStackNavigator()
const tab = createBottomTabNavigator()
function App() {
  return(
    <AppNavigation/>
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