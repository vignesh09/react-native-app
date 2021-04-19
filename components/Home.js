import React, { useState, version } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import firebase from "firebase/app";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// import Header from "./components/Header";

const Drawer = createDrawerNavigator();

function Logout({ navigation }) {
  return (
    <View>
      <Text>You have been logged out successfully</Text>
    </View>
  );
}

function MyAccount({ navigation }) {
  return (
    <View>
      <Text>This is your accounts setting page</Text>
    </View>
  );
}

function HomePage({ navigation }) {
  return (
    <View>
      <Text>Home Page of another module</Text>
    </View>
  );
}
function Home({ navigation }) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="My Account" component={MyAccount} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

export default Home;
