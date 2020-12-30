import React from "react";
import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {SignIn} from './copmponents/SignIn'
import {CreateAccount} from './copmponents/CreateAccount'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Home } from "./copmponents/Home";
import {Profile} from "./copmponents/Profile"

const AuthStack = createStackNavigator();

const Tabs = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>

      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={Home}/>
        <Tabs.Screen name="Profile" component={Profile} />
      </Tabs.Navigator>

      {/* <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn} options={{title:'Sign In'}}/>
        <AuthStack.Screen name="CreateAccount" component={CreateAccount} options={{title:'Create Account'}}/>
      </AuthStack.Navigator> */}
    </NavigationContainer>
  );
}
