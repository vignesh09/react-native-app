import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, version } from 'react';
import { StyleSheet, Text, View,TextInput,Button, Alert } from 'react-native';
import * as firebase from 'firebase';

export default function Googlesheet() {
    const SHEET_ID = '1EY4WBOAjdz7vMNqtL8kAlH667Ip3y0TP3bqZI1HE4q8';
    const ACCESS_TOKEN = 'ya29.a0AfH6SMCgAzl8V2BmvSWWrnL6MuxRm1OojMW55ilcg1RtZgqd0kZBytCv-x3RAyKyuAetpHr2hevyVqPv1eitshUvdFkq0sbfIgc6CNuxtWMvsHqpB5-aa3GY-7EtTbY71EL_RCu-0ir53zEsZMblO4QYBu53';
    
    // const firebaseConfig= {
    //   apiKey: "AIzaSyBUZus3vJDiG3GOayZC5wPEbHKRHx5A-hI",
    //     authDomain: "login-app-62a67.firebaseapp.com",
    //     projectId: "login-app-62a67",
    //     storageBucket: "login-app-62a67.appspot.com",
    //     messagingSenderId: "579335801503",
    //     appId: "1:579335801503:web:97fca4248a8a12f2c870aa",
    //     measurementId: "G-TNMGLQYM5E"
    // }
     
    //  if(firebase.app.length == 0 ){
    // firebase.initializeApp(firebaseConfig);
    // }
    // else{ 
    //   firebase.app();
    // }
    async function  getSheetValues  () {
      const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A1:B5`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`  
      }
      });
      const data = await request.json();  
      console.log(data);
      return data;
    }
    const [data, setData] = useState('');

    useEffect(() => {
       getSheetValues().then((value) => {
         console.log("value");
         console.log(value)
         setData(JSON.stringify(value));
       }); 
    },[])

   

      return(
        <View style={Style.body}> 
            <Text >{data}</Text>

        </View>

      );
    

}

const Style = StyleSheet.create({
  body:{
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1,
    // marginTop: 35,
    height: '100%',
    width: '100%'
  }
})