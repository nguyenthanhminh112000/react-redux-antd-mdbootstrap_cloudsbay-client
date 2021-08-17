import firebase from 'firebase/app';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBBq7jDu_kbP1shxBov-jUiYs-5gDsFFx8',
  authDomain: 'cloudsbay-c1dda.firebaseapp.com',
  projectId: 'cloudsbay-c1dda',
  storageBucket: 'cloudsbay-c1dda.appspot.com',
  messagingSenderId: '362992299749',
  appId: '1:362992299749:web:0994ca9bd9c4ae9f81ee0c',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
console.log('firebase outside');
