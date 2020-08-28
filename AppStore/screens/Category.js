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
  View,
  Text,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default class Category extends React.Component{

  render(){
    return(
      <View>
          <Text>Category</Text>
      </View>
  
      
    );
  }
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
  
