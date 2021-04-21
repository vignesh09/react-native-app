import { StatusBar } from "expo-status-bar";
import React, { useState, version } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import firebase from "firebase/app";
import "firebase/firestore";
import Header from "./Header";
import Redirect from "react-dom";
// import Googlesheet from "./components/Googlesheet";
// import { NavigationContainer } from "react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
// import Home from "./components/Home";

export default function Loginscreen({ navigation, firebase }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   firebase = props.firebase;

  const signUp = (email, password) => {
    try {
      if (password.length < 6) {
        Alert.alert("Please enter atleast 8 characters");
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log("successfully signed up");
      navigation.navigate("Details");
      // Alert.alert("sign up successfull")
    } catch (error) {
      console.log(error.toString);
    }
  };

  const login = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (user) {
          console.log("successfully logged in");
          navigation.navigate("Home");
          // return <Redirect to="googlesheet" />;
          // console.log(user)
          // if(user.length ==1){
          //   Alert.alert("login")
          // }
        });
    } catch (error) {
      console.log(error.toString);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style={styles.Statusbar} />
      {/* <Header title="to do app" /> */}
      {/* <Text>Hi vignesh</Text> */}
      <View style={styles.Login}>
        <TextInput
          style={styles.Textbox}
          placeholder="Enter your Email"
          onChangeText={(email) => setEmail(email)}
        ></TextInput>
        <TextInput
          style={styles.Textbox}
          placeholder="password"
          onChangeText={(password) => setPassword(password)}
        ></TextInput>
        <View style={styles.ButtonLogin}>
          <Button title="Login" onPress={() => login(email, password)}></Button>
          <Button
            title="Sign Up"
            onPress={() => signUp(email, password)}
          ></Button>
        </View>
      </View>
    </View>
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
