import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native'
function CategoryListItem(props){
   

        const {category, onPress} = props
        return(
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <View style={styles.container}>
                <Text style={styles.title}>{category.name}</Text>
                <Image style={styles.image} source={require('../images/fix.png')}/>
            </View>
            </TouchableOpacity>
            
        );

}
export default CategoryListItem
const styles= StyleSheet.create({
    container:{
        alignItems:'center',
        padding:16,
        borderRadius:4,
        backgroundColor:'#fff',
        shadowColor: '#000',
        shadowOpacity: 10,
        shadowRadius: 10,
        shadowOffset:{width:100,height:5},
        elevation: 10,
        marginBottom:10,
        
    },
    image:{
        width:65,
        height:65
    },
    title:{
        textTransform:'uppercase',
        marginBottom:8,
        fontWeight:'700'
    }
})