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
        <AuthStack.Screen name="SignIn" component={SignIn} options={{title:'Sign In'}}/>
        <AuthStack.Screen name="CreateAccount" component={CreateAccount} options={{title:'Create Account'}}/>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
