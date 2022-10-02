import {View, Text} from 'react-native';
import React from 'react';

import {NativeBaseConfigProvider} from 'native-base';

import { TailwindProvider } from 'tailwindcss-react-native';

import {NativeBaseProvider} from 'native-base';
import {LogBox} from 'react-native';
import HomeScreen from './screens/Home.js'

import Provider from './mangment/Provider';








LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications





export default function App() {






  return (
    <Provider>
  
  
    
    <TailwindProvider >
     <NativeBaseProvider>
    <View>
     
<HomeScreen/>

{/* <SliderScreen/> */}

</View>

     </NativeBaseProvider>
     
     </TailwindProvider >
     </Provider>
  );
}
