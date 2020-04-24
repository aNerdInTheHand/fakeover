import React from 'react'

const getDilemma = props => (
  <div className='dilemmas'>
    <span className='dilemma-text'>{props.dilemma.text}</span>
    <button
      className='dilemma-button'
      onClick={() => console.log('clicked 1')}
    >
      Option One
    </button>
    <button
      className='dilemma-button'
      onClick={() => console.log('clicked 2')}
    >
      Option Two
    </button>
    <button
      className='dilemma-button'
      onClick={() => console.log('clicked 3')}
    >
      Option Three
    </button>
  </div>
)

export default () => (
  <div className='dilemma'>
    <div>{getDilemma()}</div>
  </div>
)
