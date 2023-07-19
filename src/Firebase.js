import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTpgjrapAGQdikF8V8i2ipvLcO2Y8L6Vg",
  authDomain: "login-account-6fe8b.firebaseapp.com",
  databaseURL: "https://login-account-6fe8b-default-rtdb.firebaseio.com",
  projectId: "login-account-6fe8b",
  storageBucket: "login-account-6fe8b.appspot.com",
  messagingSenderId: "831348135874",
  appId: "1:831348135874:web:9507431d07089e3cc8a85b",
  measurementId: "G-EDHS2MWTC2"
};


 const appFire = initializeApp(firebaseConfig);
export const auth=getAuth(appFire)
export default appFire;