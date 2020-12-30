import React from "react";
import { View, Text, Button } from "react-native";

export const SignIn = ({ navigation }) => {
  return (
    <View>
      <Text>Sign in Screen</Text>
      <Button title="Sign In" onPress={() => alert("todo!")} />
      <Button title="Create Account" onPress={() => alert("todo!")} />
    </View>
  );
};
