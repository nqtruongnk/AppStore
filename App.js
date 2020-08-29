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
  ScrollView
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
import Categories from './screens/Categories'
import Category from './screens/Category';

const stack = createStackNavigator()
function App() {
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Categories' component={Categories} options={{ title: 'Categories' }}/>
        <stack.Screen name='Category' component={Category}
          options={({route})=>({title: route.params.name})}/>
      </stack.Navigator>
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