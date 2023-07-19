import React from 'react'
import "../styles/Signup.css"
import { Link ,useNavigate} from "react-router-dom"
import { useState } from 'react'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { signUp } = UserAuth();
    const navigate=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signUp(email, password);
            navigate("/")
        }
        catch (e) {
            setError(e.message)
            console.log(e.message)
        }
        // e.target.reset();
    }
    return (
        <div className='signup'>
            <div className='image'>
                <div className='heading'>
                    <h1>Create a New Account to Register</h1>
                    {error}
                    <form onSubmit={handleSubmit}>
                        <div className='form-container'>

                            <label>Email Address</label>
                            <input onChange={(e) => setEmail(e.target.value)} type='text' className='inputs' />
                            <label>Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" className='inputs' />
                            <button className='sign-up-button'>Sign up</button>
                        </div>
                    </form>
                    <div className='exist-account'>Already have an account yet?<Link to="/" className='underline'>Sign in</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Signup
