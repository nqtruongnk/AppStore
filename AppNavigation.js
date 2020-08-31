import React from 'react'
import {View,Text} from 'react-native'
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Cagetories from './screens/Categories'
import Category from './screens/Category'
import Cart from './screens/Cart'
import Oders from './screens/Oders'
import Settings from './screens/Settings'

const HomeStack = createStackNavigator()
const CartStack = createStackNavigator()
const OderStack = createStackNavigator()
const SettingStack = createStackNavigator()
const Tab= createBottomTabNavigator()
function HomeShopping(){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Categories' component={Cagetories}/>
            <HomeStack.Screen name='Category' component={Category} options={({route})=>({title:route.params.name})}/>
        </HomeStack.Navigator>
    );
}


function HomeCart(){
    return(
        <CartStack.Navigator>
            <CartStack.Screen name='Cart' component={Cart}/>
        </CartStack.Navigator>
    );
}


function HomeOder(){
    return(
        <OderStack.Navigator>
            <OderStack.Screen name='Oders' component={Oders}/>
        </OderStack.Navigator>
    );
}


function HomeSetting(){
    return(
        <SettingStack.Navigator>
            <SettingStack.Screen name='Settings' component={Settings}/>
        </SettingStack.Navigator>
    );
}


function AppNavigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor:'red',
                    inactiveTintColor:'grey',
                }}>
                <Tab.Screen name='Shopping' component={HomeShopping}/>
                <Tab.Screen name='Cart' component={HomeCart}/>
                <Tab.Screen name='Oder' component={HomeOder}/>
                <Tab.Screen name='Setting' component={HomeSetting}/>
            </Tab.Navigator>
        </NavigationContainer>
       
    )
}

export default AppNavigation