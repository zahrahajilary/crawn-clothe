import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyBiRngOQ4DonXTpEoHClJLP3Z4IE6u8hmE",
    authDomain: "crown-db-44af6.firebaseapp.com",
    databaseURL: "https://crown-db-44af6.firebaseio.com",
    projectId: "crown-db-44af6",
    storageBucket: "crown-db-44af6.appspot.com",
    messagingSenderId: "645608389319",
    appId: "1:645608389319:web:cf0be5905aee62097b5ce2",
    measurementId: "G-Y8VZ2HR5NE"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
