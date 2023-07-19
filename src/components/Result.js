import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { questions } from '../Question';
import  "../styles/Result.css"

const Result = () => {
    const {mark}=UserAuth();
  return (
    <div className='result'>
      Your score is {mark}/{questions.length}
    </div>
  )
}

export default Result
