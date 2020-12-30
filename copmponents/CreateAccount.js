import React from "react";
import { View, Text, Button } from "react-native";

export const CreateAccount = () => {
  return (
    <View>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => alert("todo!")} />
    </View>
  );
};
