import React from 'react'
import "../styles/Play.css"
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
const Play = () => {
  const {startTimer}=UserAuth();
  return (
    <div className='play-container'>
      <div className='play-heading'>
        ❌Instructions must be followed❌
      </div>
      <div className="choice">
        1.You are given 1 minutes to answer the questions.
        </div>
        <div className="choice">
        2.You are not allowed to skip the questions.
        </div>
        <div className="choice">
        3.All questions must be answered.
        </div>
        <div className="choice">
        4.You are not allowed to go back.
        </div>
        <div className="choice">
        5.Score will be displayed at end.
        </div>
      <button className='start'><Link to="/start" className='start' onClick={startTimer}>Start</Link></button>
    </div>
  )
}

export default Play
