import React from 'react'
import { Metrics } from './features/metrics/Metrics'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Fakeover!
        </h1>
        <div>
          You are the tyrannical sweatshop billionaire owner of a football team.
          Make decisions to benefit only yourself!
          Score points by:
          <div>
            <ul>
              <li>increasing your personal wealth by leeching as much money out of the club as possible</li>
              <li>reducing fan happiness as much as possible and as frequently as possible</li>
              <li>keeping external opinion of yourself higher than fan happiness.</li>
            </ul>
          </div>
          <div>
            The game will be over if fan happiness is too high for too long or reaches 0, or the club funds or your personal value hit £0.
          </div>
        </div>
      </header>
      <Metrics />
    </div>
  )
}

export default App
