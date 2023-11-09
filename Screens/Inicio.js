import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';	
import color from '../color';

//components 
import Button from '../component/Button'
export default function Inicio() {
  return (
    <View style={styles.container}>
    <StatusBar style="light" />
    <Text style={styles.title}>
      Join to building  the future
    </Text>
    <Text style={styles.subtitle}>
      Manage all your exchange accounts & simulate your trading
    </Text>
    <Button  theme={"principal"} title={"click me"} onPress={()=>{
        console.log("click me");
    }}/>
    <Button title={"click me"}/>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: color.background,
  alignItems: 'center',
  justifyContent: 'center',
},
title:{
  color: color.verdecito,
  fontSize: 60,
  fontWeight: 'bold',
  paddingHorizontal:3,
  
},
subtitle:{
  color: color.blanquito,
  fontSize: 20,
  letterSpacing: 5,
  paddingTop: 20,
}
});


