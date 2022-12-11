import { initializeApp } from 'firebase/app'
import { getMessaging, onMessage, getToken,  } from 'firebase/messaging'
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBXmCl34LVpTv4aysdMVZ946TgUn7rz-9E",
  authDomain: "utacourseavailability-50a5d.firebaseapp.com",
  projectId: "utacourseavailability-50a5d",
  storageBucket: "utacourseavailability-50a5d.appspot.com",
  messagingSenderId: "1025565773812",
  appId: "1:1025565773812:web:c4aed577953e6ad20a73a1",
  measurementId: "G-BJDJ7F6JKQ"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: 'BNQmR9phLCDqiT69cPwb4J_pHrcPAgTKu1ceTlnyg_2jQ8rIEtUVba86zSLG8W1gtUhBOxqFIrPmsgSLkuJFKic' })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token: ', currentToken);
      } else {
        console.log('No registration token available.');
      }
    })
    .catch((error) => {
      console.log('There is an error occurred while retrieving token. ', error);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {    
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

export {auth}
