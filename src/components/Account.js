import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import "../styles/Account.css"
const Account = () => {
  const { user, logOut } = UserAuth();
  const navigate=useNavigate();
 
  console.log(user);
  
  const handleLogOut = async () => {
    try {
      await logOut();
    }
    catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className='account'>
    <div className='home'>
      <h1 className='title'>Instaneous Quiz</h1>
    
        
      <button className='play'><Link to="/play" className='link'>Play</Link></button>
   
    
      <button onClick={handleLogOut} className='logout'>Logout</button>
    </div>
    
    </div>
  )
}

export default Account
