import React from "react";
import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {SignIn} from './copmponents/SignIn'
import {CreateAccount} from './copmponents/CreateAccount'

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn}/>
        <AuthStack.Screen name="CreateAccount" component={CreateAccount}/>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
