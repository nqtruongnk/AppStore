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
import CategoryListItem from '../components/CategoryListItem'
import { NavigationContainer } from '@react-navigation/native';

export default class Cagetories extends React.Component{
  constructor(props){
    super(props)
    this.state={
        cagetories:[
            {id :1, name:'Dụng cụ trượt tuyết'},
            {id :2, name:'Quần áo trượt tuyết'},
            {id :3, name:'Kính mũ'},
        ]
    };
}
  render(){
    const {navigation}= this.props
    const {cagetories}= this.state;
    return(
      <FlatList data={cagetories} 
        renderItem={({item})=> 
          <CategoryListItem 
            category={item}
            onPress={()=>navigation.navigate('Category',{
              name: item.name              
            })}/>}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={styles.container}>

      </FlatList>
  
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    paddingTop:16,
    paddingLeft: 16,
    paddingRight:16,
  },
})
  
