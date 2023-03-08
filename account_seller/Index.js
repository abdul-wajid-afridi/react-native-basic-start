import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MyTabs from "./AppNavigations";

const Tab = createBottomTabNavigator();
const Index = () => {
  const HomeScreen = () => {
    return (
      <View>
        <Text>
          <MaterialCommunityIcons name="trash-can" size={50} />
          <MaterialCommunityIcons name="home" size={50} />
        </Text>
        <Text>This is my Home Screen</Text>
      </View>
    );
  };
  const SettingsScreen = () => {
    return <Text>This is my Home Screen</Text>;
  };
  return (
    <NavigationContainer>
      <MyTabs />
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
};

export default Index;

const styles = StyleSheet.create({});
