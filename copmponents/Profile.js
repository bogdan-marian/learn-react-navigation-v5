import React from "react";
import { View, Text, Button } from "react-native";
import {ScreenContainer} from "./ScreenContainer"

export const Profile = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Prifile Screen</Text>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Sign Out" onPress={() => alert("todo")} />
    </ScreenContainer>
  );
};
