import React,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom"
import "../styles/Signup.css"
import GoogleButton from "react-google-button";
import { UserAuth } from '../context/AuthContext';

const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { logIn ,googleSignIn} = UserAuth();
    const navigate=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await logIn(email, password);
            navigate("/Account")
        }
        catch (e) {
            setError(e.message)
            console.log(e.message)
        }
        // e.target.reset();
    }
    const handleGoogleSignIn=async(e)=>{
        e.preventDefault();
        try{
            await googleSignIn();
            navigate("/Account")
        }
        catch(error){
            setError(e.message)
        }
    }
  return (
    <div className='signup'>
        <div className='image'>
      <div className='heading'>
        <h1>Login into your Account</h1>
        {error}
        <form onSubmit={handleSubmit}>
        <div className='form-container'>
           
            <label>Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)} type='text' className='inputs'/>
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" className='inputs'/>
            <button className='sign-up-button'>Login</button>
            <GoogleButton onClick={handleGoogleSignIn}></GoogleButton>
        </div>
      </form>
        <div className='exist-account'>Don't have an account yet?<Link to="/signup" className='underline'>Sign up</Link></div>
      </div>
      </div>
    </div>
  )
}

export default Signin
