import {SafeAreaView, StyleSheet, TextInput} from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box ,Stack ,Input, Button } from "native-base";
import * as Animatable from 'react-native-animatable';
import { Text } from 'react-native';
export default function Register({navigation}) {

  return (
    
    <NativeBaseProvider>

    <Box>
      <Text>
        Movies
      </Text>
    </Box>
          
    </NativeBaseProvider>
    
  )
}

const styles = StyleSheet.create({
  input:{
    borderStyle:'solid',
    backgroundColor:'blue',
    borderRadius:100,
    borderWidth: 1,
    padding: 10,
    color:'#ffffff'
    
  },

  button:{
    borderRadius:100,
    borderWidth: 1,
    padding: 10,
    borderStyle:'solid',
  }
})