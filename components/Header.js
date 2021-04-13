import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

const Header =(props) =>{
    return(
        <View style={styles.Header}>
        <Text style={styles.title}>{props.title}</Text>
        </View> 
        

    )
}

const styles =StyleSheet.create({
Header:{
    backgroundColor: "black",
    //  marginTop: 100,
     padding: 10,
    color: 'white',
    width: '100%'
},
title:{
// alignContent: 'center',
// justifyContent: 'center',
fontSize: 44,
fontWeight: '900',
color: 'white'

}

});

export default Header;