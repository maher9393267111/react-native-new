import {View, Text} from 'react-native';
import React from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { useState,useEffect ,  useLayoutEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
//import {Button} from 'native-base';

//import {firestore} from './firebase/index'
import firestore from '@react-native-firebase/firestore';


//import Icon from "react-native-vector-icons/Ionicons";

import {NativeBaseProvider} from 'native-base';
import {LogBox} from 'react-native';

import {Avatar} from 'react-native-paper';
//import { Assets , Image  , Button} from "react-native-ui-lib";
import { Button, FormControl, HStack, Input, VStack, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';







export default function Home() {
 
  const curId = useSelector((state) => state.name.toId);
  console.log('Redux--->>>' , curId)








  return (
    <View>
      
<Text className="  text-blue-600 text-2xl text-center font-bold">hellos {curId}</Text>

<HStack width='100%' space={2}>
                    <Input placeholder='movie' variant='filled' bg='gray.200' px={3} width='85%'
                    InputLeftElement={
                        <Icon size={5} ml={2} color='gray.400' as={<Ionicons name="ios-search"/> } />
                    } 
                    /> 
                         <Button  startIcon={<Icon as={Ionicons} name='ios-search'/>}>Search</Button>
                </HStack>

         
    </View>
  );
}
