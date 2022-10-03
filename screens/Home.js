import {View, Text , Image} from 'react-native';
import React from 'react';
import axios from 'axios';
import {search} from '../styles/global'
import { useSelector } from "react-redux";
import { useState,useEffect ,  useLayoutEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
//import {Button} from 'native-base';

//import {firestore} from './firebase/index'
import firestore from '@react-native-firebase/firestore';


//import Icon from "react-native-vector-icons/Ionicons";

import {Box} from 'native-base';
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

<HStack
className=' ml-4 mt-4 mr-6 overflow-x-hidden'
width='100%' space={2}>
                    <Input placeholder='movie' 
                    className=' rounded-lg'
                    variant='filled' bg='gray.200' px={3} width='66%'
                    InputLeftElement={
                        <Icon size={5} ml={2} color='gray.400' as={<Ionicons name="ios-search"/> } />
                    } 
                    /> 
                         <Button
                        className=''
                         >
                          <Box className='flex flex-row   align-middle justify-center'>

                         
                         <Image
                         className='w-6 h-6 object-contain'
                         source={{uri:search}} /> 
                          
                          <Text className=' text-white font-bold '>Search</Text>
                          </Box>
                          
                          </Button>
                </HStack>

         


    </View>
  );
}
