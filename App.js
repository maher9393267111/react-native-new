import {View, Text} from 'react-native';
import React from 'react';


import {NativeBaseConfigProvider} from 'native-base';

import {TailwindProvider} from 'tailwindcss-react-native';

import {NativeBaseProvider} from 'native-base';
import {LogBox} from 'react-native';
//import HomeScreen from './screens/Home.js';
import SliderScreen from './screens/slider'


import Provider from './mangment/Provider';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Main/MainTab";
import Detail from "./screens/Details/index";

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider>
      <TailwindProvider>
        <NativeBaseProvider>
         
         {/* // TABBB */}

         <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "Movies App",
            headerStyle: {
              backgroundColor: "#2c3e50",
            },
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
         <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: "Movies App",
            headerStyle: {
              backgroundColor: "#2c3e50",
            },
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        />
        </Stack.Navigator>
      </NavigationContainer> 




{/* // TAB END  */}
        </NativeBaseProvider>
      </TailwindProvider>
    </Provider>
  );
}
