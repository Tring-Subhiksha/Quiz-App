import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup
} from "firebase/auth";
import { auth } from "../Firebase";
import { answers } from "../Question";

const UserContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const[index,setIndex]=useState(0);
    const[value,setValue]=useState("");
    const[mark,setMark]=useState(0);
    const[Timer,setTimer]=useState({hr:0,min:0,sec:0,ms:0});
    const[Inter,setInter]=useState("");
    var updatedHr=Timer.hr,
    updatedMin=Timer.min,
    updatedSec=Timer.sec,
    updatedMs=Timer.ms;
   const startTimer=()=>{
    run();
    setInter(setInterval(run,10))
   }
    const run=()=>{
        if(updatedMin===60){
            updatedHr++;
            updatedMin=0;
        }
        if(updatedSec===60){
            updatedMin++;
            updatedSec=0;
        }
        if(updatedMs===100){
            updatedSec++;
            updatedMs=0;
        }
        updatedMs++;
        return setTimer({ms:updatedMs,sec:updatedSec,min:updatedMin})
    }

    const final_answers=[];
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }
    const googleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }
    const calcMark=()=>{
        if(final_answers.includes(answers[index])){
            setMark(prev=>prev+1)
        }
    }
    const next=()=>{
        if(value===""){
            alert("please select the value")
            return 
        }
        final_answers.push(value);
        calcMark()
        setIndex(prev=>prev+1);
    }
    const onRadioChange=(e)=>{
        setValue(e.target.value);
    }
    
    const Submit=()=>{
        final_answers.push(value);
        calcMark();
        
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <UserContext.Provider value={{ user, signUp, logIn, logOut,googleSignIn,index,next ,value,onRadioChange,Submit,mark,startTimer,Timer,Inter}}>
            {children}
        </UserContext.Provider>
    )
}
export const UserAuth = () => {

    return useContext(UserContext)
}