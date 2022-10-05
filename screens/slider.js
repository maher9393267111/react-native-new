


import { View, Text , StyleSheet } from 'react-native'
 import React ,{useState,useEffect} from 'react'
 import Icon from "react-native-vector-icons/Ionicons";
  import {Box} from 'native-base'

 import DropDownPicker from "react-native-dropdown-picker";
import Colors from '../utils/sliderdata'

const ArrayItems= [
  { label: "Mammals", value: "Mammals" },
  { label: "Birds", value: "Birds" },
  { label: "Reptiles", value: "Reptiles" },
  { label: "Amphibians", value: "Amphibians" },
  { label: "Fish", value: "Fish" },
  { label: "Insects", value: "Insects" },
  { label: "Plants", value: "Plants" },
  { label: "dinosaurs", value: "dinosaurs" },
]



export default function slider() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

   const [items, setItems] = useState(ArrayItems);




  return (
    <View>
      <Text>slider1</Text>

  <DropDownPicker
           //  style={styles.dropDownPicker}
            //  placeholderStyle={{
            //    color: Colors.primary900,
            //  }}
            //  listParentLabelStyle={{
            //    color: Colors.primary900,
            //  }}
            // textStyle={{               color: Colors.primary900,
            // }}
             open={open}
            value={value}
             items={items}
             setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            maxHeight={500}
             placeholder="Select a category"
           />



    </View>
  )
}











// import { View, Text  } from 'react-native'
// import React ,{useState,useEffect} from 'react'
// import Icon from "react-native-vector-icons/Ionicons";
// // import YoutubePlayer from "react-native-youtube-iframe";
// import {Box} from 'native-base'

// // import DropDownPicker from "react-native-dropdown-picker";
// //import Colors from '../utils/sliderdata'

// export default function slider() {

//   // const [open, setOpen] = useState(false);
//   // const [value, setValue] = useState(null);

//   // const [items, setItems] = useState([
//   //   { label: "Mammals", value: "Mammals" },
//   //   { label: "Birds", value: "Birds" },
//   //   { label: "Reptiles", value: "Reptiles" },
//   //   { label: "Amphibians", value: "Amphibians" },
//   //   { label: "Fish", value: "Fish" },
//   //   { label: "Insects", value: "Insects" },
//   //   { label: "Plants", value: "Plants" },
//   //   { label: "dinosaurs", value: "dinosaurs" },
//   // ]);



//   return (
//     <View>
//       <Text className=" text-center mt-4 font-bold text-2xl text-blue-700 border-b-2 pb-2">HomePage</Text>

//       <Box className=' absolute top-1 left-2 '>
//       <Icon
//       className=' absolute top-2 left-2'
//       name="close-outline" size={28} color="#1" />


// <Text >Category</Text>
//           {/* <DropDownPicker
//             style={styles.dropDownPicker}
//             placeholderStyle={{
//               color: Colors.primary900,
//             }}
//             listParentLabelStyle={{
//               color: Colors.primary900,
//             }}
//             textStyle={{
//               color: Colors.primary900,
//             }}
//             open={open}
//             value={value}
//             items={items}
//             setOpen={setOpen}
//             setValue={setValue}
//             setItems={setItems}
//             maxHeight={500}
//             placeholder="Select a category"
//           /> */}


//       </Box>
//     </View>
//   )
// }




// const styles = StyleSheet.create({
//   dropDownPicker: {
//     borderWidth: 0,
//     backgroundColor: Colors.accent100,
//     color: Colors.primary900,
//   },
// })

