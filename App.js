import { StatusBar } from 'expo-status-bar';
import React, { useState, version } from 'react';
import { StyleSheet, Text, View,TextInput,Button, Alert } from 'react-native';
import * as firebase from 'firebase';
import Header from './components/Header';
import Redirect from 'react-dom';
import googlesheet from './components/googlesheet';

//firebase config
const firebaseConfig= {
  apiKey: "AIzaSyBUZus3vJDiG3GOayZC5wPEbHKRHx5A-hI",
    authDomain: "login-app-62a67.firebaseapp.com",
    projectId: "login-app-62a67",
    storageBucket: "login-app-62a67.appspot.com",
    messagingSenderId: "579335801503",
    appId: "1:579335801503:web:97fca4248a8a12f2c870aa",
    measurementId: "G-TNMGLQYM5E"
}

// if(firebase.app.length == 0 ){
firebase.initializeApp(firebaseConfig);
// }
// else{
  firebase.app();
// }
  // firebase.analytics();

export default function App() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  signUp = (email, password) =>{
    try{

      if(password.length < 6){
        Alert.alert("Please enter atleast 8 characters");
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)
      console.log("successfully signed up")
      return <Redirect to="googlesheet" />
      // Alert.alert("sign up successfull")

    }
    catch(error){
      console.log(error.toString)
    }

  }

  login = (email, password)=>{

    try{
      firebase.auth().signInWithEmailAndPassword(email,password).then(function (user){
        console.log("successfully logged in")
        return <Redirect to="googlesheet" />
        // console.log(user)
        // if(user.length ==1){
        //   Alert.alert("login")
        // }

      })

    }
    catch(error){
      console.log(error.toString)
    }

  }

  return (
    <View style={styles.container}>
      
      <StatusBar style={styles.Statusbar} />
       <Header title="to do app"  />
      {/* <Text>Hi vignesh</Text> */}
     <View style={styles.Login}>
      <TextInput 
      style={styles.Textbox}
      placeholder = "Enter your Email"
      onChangeText = {(email) => setEmail(email)}
      ></TextInput>
      <TextInput 
      style={styles.Textbox}
      placeholder = "password"
      onChangeText = {(password) => setPassword(password)}
      ></TextInput>
      <View style={styles.ButtonLogin}>
      <Button
      title="Login"
      onPress={()=>login(email, password)}
      >
      </Button>
      <Button
      title="Sign Up"
      onPress={()=>signUp(email, password)}
      >
      </Button>
      </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  Statusbar:{
    height: 20,
    backgroundColor: 'white'
  },
  Login:{
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 30,
    height: '70%',
    width: '100%'
  },
  Textbox:{
    // borderWidth: 1,
    borderBottomWidth: 1,
    height: 40,
    width: '80%',
    margin: 15
  },
  ButtonLogin:{
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
