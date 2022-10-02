import {
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    onSnapshot,
    orderBy,
    limit,
    query,
    where,
    FieldPath,
    updateDoc,
    arrayUnion,
    addDoc,
    deleteDoc,
    serverTimestamp
} from "firebase/firestore";

import {
    getDownloadURL,
    ref,
    uploadString,
    getStorage,
    uploadBytes,
    deleteObject,
  } from "firebase/storage";
  import { db } from './index'




// create a new category
export const createCategory = async () => {

    try {
    
        // const reference = collection(db, "Cat");
        // await   addDoc(reference, {
        //   name:'adidas'
        //   });
        console.log('createeeeeeed 🔥 🔥 🔥')
    
        
    } catch (error) {
    
        console.log('noooot workinggg----> 🔥 🔥 🔥 🔥' , error)
    }
    
    
    
    }


    export const createProduct = async (  ) => {
        const reference = collection(db, "Product");
      
        try {
          await addDoc(reference, {
          name:"shoesAdidas"
          })
            .then(() => {})
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
      };