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

import ProductListItem from '../components/ProductListItem'



class  Category extends React.Component{
  constructor(props){
    super(props)
    this.state={
      products:[
        {
          id: 1,
          images:[
            {
              url:'https://cf.shopee.vn/file/12a1eb9a4ade54ec021cd2e001a73211',
            }
          ],
          name:'Bo dung cu 143',
          price:'40000'
        },
        {
          id: 2,
          images:[
            {
              url:'https://lachonggroup.com.vn/Uploads/Thumbs/2020/3/27/may-van-vit-dung-pin-makita-df001d.jpg',
            }
          ],
          name:'Bo dung cu 143',
          price:'40000'
        },
        {
          id: 2,
          images:[
            {
              url:'https://lh3.googleusercontent.com/proxy/Qrz28Y4U42V_G253_O7OkWtCYmE9DXt6CUjHave1xDX_0jm_bzfxs69siNQA_SW-1FqcVCNpcsc7pImY718628N7YbC96W5dSozsVZxAfa47FRGZKH7bg-KUIDWhvMPbmuEVqhDi6p6ICEtk3A',
            }
          ],
          name:'Bo dung cu 143',
          price:'40000'
        },
      ]
    }
  }
  render(){
    return(
      <FlatList 
        data={this.state.products}
        contentContainerStyle={styles.container}
        numColumns={2}
        renderItem={({item})=>
        <View style={styles.wrapper}>
          <ProductListItem product={item}></ProductListItem>
        </View>}
        keyExtractor={(item)=> `${item.id}`}></FlatList>
      
    );
  }
    
  }

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:8,
    paddingTop:16
  },
  wrapper:{
    flex:1,
    paddingHorizontal: 8
  },
})

export default Category
  
