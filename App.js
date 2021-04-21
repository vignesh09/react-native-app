import { StatusBar } from "expo-status-bar";
import React, { useState, version } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import firebase from "firebase/app";
import "firebase/firestore";
import Header from "./components/Header";
import Redirect from "react-dom";
import Googlesheet from "./components/Googlesheet";
// import { NavigationContainer } from "react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home";
import Loginscreen from "./components/LoginScreen";

//firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBUZus3vJDiG3GOayZC5wPEbHKRHx5A-hI",
  authDomain: "login-app-62a67.firebaseapp.com",
  projectId: "login-app-62a67",
  storageBucket: "login-app-62a67.appspot.com",
  messagingSenderId: "579335801503",
  appId: "1:579335801503:web:97fca4248a8a12f2c870aa",
  measurementId: "G-TNMGLQYM5E",
};

// if (!firebase.app) {
firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app();
// }
// firebase.analytics();
var db = firebase.firestore();

const Stack = createStackNavigator();
db.collection("user-creds")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // console.log(doc.data().keys.tostring());
      console.log(`${doc.id} => ${doc.data().UserId}`);
    });
  });

db.collection("user-creds")
  .doc("users")
  .set({
    UserId: "as@gmail.com",
    geo: [23.59, 53.24],
    password: "asdf",
    timestamp: Date.now(),
  })
  .then(() => {
    console.log("Document successfully written!");
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });

function Login({ route, navigation }) {
  return <Loginscreen navigation={navigation} firebase={firebase} />;
}

function HomeScreen({ navigation }) {
  return <Home />;
}

function DetailsScreen({ navigation }) {
  return (
    <View>
      <Text>Details screes</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loginscreen" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    height: "100%",
    width: "100%",
  },
  Statusbar: {
    height: 20,
    backgroundColor: "white",
  },
  Login: {
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 30,
    height: "70%",
    width: "100%",
  },
  Textbox: {
    // borderWidth: 1,
    borderBottomWidth: 1,
    height: 40,
    width: "80%",
    margin: 15,
  },
  ButtonLogin: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default App;
