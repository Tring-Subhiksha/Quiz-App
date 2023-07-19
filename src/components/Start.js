import React from 'react'
import "../styles/Start.css"
import { Link } from 'react-router-dom'
import Border from "../components/Border"
import { questions } from '../Question'
import Result from "../components/Result"
import { UserAuth } from '../context/AuthContext'
const Start = () => {

  const {index,next,value,onRadioChange,Submit,Timer,Inter}=UserAuth();
  const {id,q,o1,o2,o3,o4}=questions[index]
  return (
    <>
    {Timer.sec<=20?
    <div className='center'>
      <h1>Quiz App</h1>
     <Border>
      <div className='content'>
        <span>{id}-{q}</span>
        <div className='option'>
        <label>
          <input type="radio" 
          value={o1} 
          checked={value===o1} 
          onChange={onRadioChange}
          />
            <span>
              {o1}
            </span>
            </label>
            </div>
        <div className='option'>
        <label>
          <input type="radio"
          value={o2} 
          checked={value===o2} 
          onChange={onRadioChange}
          />
            <span>
              {o2}
            </span>
            </label>
            </div>
            <div className='option'>
        <label>
          <input type="radio"
          value={o3} 
          checked={value===o3} 
          onChange={onRadioChange}
          />
            <span>
              {o3}
            </span>
            </label>
            </div>
            <div className='option'>
        <label>
          <input type="radio"
          value={o4} 
          checked={value===o4} 
          onChange={onRadioChange}
          />
           <span>
              {o4}
            </span>
            </label>
            </div>
            {index===questions.length-1?
             <Link to="/result" className='submit next' onClick={Submit}>Submit</Link>
             :<button className='next' onClick={next}>Next</button>
             }
      </div>
      </Border>
      <div className='timer'>
            🕛{Timer.min}:{Timer.sec}
      </div>
    </div>:
    <>
    {clearInterval
    (Inter)}
    <Result/>
    </>
    }
    </>
  )
}

export default Start
