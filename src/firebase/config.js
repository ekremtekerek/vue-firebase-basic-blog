// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCSkfi3ZerH3wpaCa_eb5JWNv08sfzvh_c",
    authDomain: "vue-blog-35d3d.firebaseapp.com",
    projectId: "vue-blog-35d3d",
    storageBucket: "vue-blog-35d3d.appspot.com",
    messagingSenderId: "536159289152",
    appId: "1:536159289152:web:b0f00e9bcdda4aceea84a5",
    measurementId: "G-L23693JKGQ"
  };

  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  
  
  export {db,timestamp}
