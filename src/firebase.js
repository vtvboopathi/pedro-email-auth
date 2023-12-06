// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAFxSU6XfwwogwXpXoSWkfb2xlSO8XcomY",
  authDomain: "fir-testing-940dd.firebaseapp.com",
  projectId: "fir-testing-940dd",
  storageBucket: "fir-testing-940dd.appspot.com",
  messagingSenderId: "422643193689",
  appId: "1:422643193689:web:fa1e363e48b5a626089e48",
  measurementId: "G-0W9M8BKMNJ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()

 export const signInWithGoogle = () =>{
  signInWithPopup(auth, provider)
  .then((result)=>{
    const name = result.user.displayName
    const email = result.user.email
    const profile = result.user.photoURL
    const phone = result.user.phoneNumber

    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
    localStorage.setItem('profile', profile)
    localStorage.setItem('phone', phone)
  })
  .catch((error)=>{
    console.log(error);
  })
}
