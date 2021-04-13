import { StatusBar } from 'expo-status-bar';
import React, { useState, version } from 'react';
import { StyleSheet, Text, View,TextInput,Button, Alert } from 'react-native';

export default function googlesheet() {
    const SHEET_ID = '1EY4WBOAjdz7vMNqtL8kAlH667Ip3y0TP3bqZI1HE4q8';
    const ACCESS_TOKEN = 'ya29.a0AfH6SMCcyXBngaBpfgSBLsae5JAXLS_GD9cxeCoKHC7iEjTTCsJlLNoRTi4Xx7V17wkeMnRKr6QnjDl5P89uucFgBIvVA9zwLNov5cnQDbhFNHqotwFpOdVnEK9_CSzTaH-CEEiudjLHmHbc900mkWTwv5vX';

    getSheetValues = async () =>{
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

      return(
        <View style={Style.body}> 
            <Text >We will get contents of the google sheet here !!</Text>

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