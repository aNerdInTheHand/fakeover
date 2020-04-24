import React from 'react'
import { Metrics } from './features/metrics/Metrics'
import About from './components/About'
import Dilemma from './features/dilemmas/Dilemmas'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Fakeover!
        </h1>
        <About />
        <Dilemma />
        <Metrics />
      </header>
    </div>
  )
}

export default App
