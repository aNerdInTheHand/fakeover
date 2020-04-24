import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getNewDilemma,
  selectCurrentDilemma,
  selectPreviousDilemma
} from './dilemmaSlice'

const Dilemma = () => {
  const currentDilemma = useSelector(selectCurrentDilemma)
  const previousDilemma = useSelector(selectPreviousDilemma)
  const [showDilemma, setShowDilemma] = useState(false)
  return (
    <div className='dilemma'>
      {showDilemma && showOptions(currentDilemma)}
      {!showDilemma && getDilemma(setShowDilemma, showDilemma)}
  </div>
  )
}

const showOptions = dilemma => (
  <div className='dilemmas'>
    <span className='dilemma-text'>{dilemma.text}</span>
    {dilemma.options.map((option, i) => (
      <button
      className='dilemma-button row'
      key={i}
      onClick={() => console.log(option.resultText)}
    >
      {option.buttonText}
    </button>
    ))}
  </div>
)

const getDilemma = (setShowDilemma, showDilemma) => (
  <div>
    <button
      className='get-dilemma-button'
      onClick={() => setShowDilemma(!showDilemma)}
    >
      Next Day
    </button>
  </div>
)

export default Dilemma
