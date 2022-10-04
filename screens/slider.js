// import { View, Text } from 'react-native'
// import React from 'react'
// import Icon from "react-native-vector-icons/Ionicons";
// // import YoutubePlayer from "react-native-youtube-iframe";
// import {Box} from 'native-base'
// export default function slider() {

//   return (
//     <View>
//       <Text className=" text-center mt-4 font-bold text-2xl text-blue-700 border-b-2 pb-2">HomePage</Text>

//       <Box className=' absolute top-1 left-2 '>
//       <Icon
//       className=' absolute top-2 left-2'
//       name="close-outline" size={28} color="#1" />
//       </Box>
//     </View>
//   )
// }

import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const listItem = [
  {id: 1, title: 'Yoga'},
  {id: 2, title: 'Gym'},
  {id: 3, title: 'Running'},
  {id: 4, title: 'Yoga'},
  {id: 5, title: 'Fight'},
  {id: 6, title: 'Body'},
  {id: 7, title: 'Rest'},
];

export default function CircularSlide() {
  const [index, setIndex] = useState(2);

  const userActive = i => {
    console.log('i is clicked now', i);
    setIndex(i);
  };
  console.log(index);

  return (
    <View style={styles.userMain}>
      {listItem.map((val, i) => {
        return (
          <TouchableOpacity
            style={styles.user}
            key={val.id}
            onPress={() => userActive(i)}>
            <View
              className={`${
                i === index ? 'bg-blue-800 w-[50px] h-[50px] ' : ' w-[50px] h-[50px] bg-gray-600'
              }p-2 rounded-lg mb-4`}></View>
            <Text className={`${i === index ? 'bg-blue-800' : ' bg-gray-400'}`}>
              {val.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  userMain: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto',
    width: '100%',
  },
  user: {
    padding: 8,
    alignItems: 'center',
    width: 95,
  },
  user_active: {
    height: 5,
    width: 5,
    padding: 25,
    //  borderRadius: '50%',
    //  backgroundColor: '#D3DEDC',
  },
  icon_text: {
    margin: 2,
    color: '#D3DEDC',
  },
  user_inactive: {
    height: 5,
    width: 5,
    padding: 25,
    // borderRadius: '50%',
    //   backgroundColor: '#212b46',
  },
  icon_intext: {
    margin: 2,
    color: '#212b46',
  },
});
