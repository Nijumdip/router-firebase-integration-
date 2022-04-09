import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD6xT2b_Y_iSl5JnMZ7b2OvMb-PZfl_UvA",
  authDomain: "router-firebase-integrat-5f508.firebaseapp.com",
  projectId: "router-firebase-integrat-5f508",
  storageBucket: "router-firebase-integrat-5f508.appspot.com",
  messagingSenderId: "142864760680",
  appId: "1:142864760680:web:b040e9732d48f05e43e0dd"
};

const initializeConfig = initializeApp(firebaseConfig);

export const auth = getAuth(initializeConfig);

export default initializeConfig;