import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  changeMetrics,
  selectClubFunds,
  selectExternalOpinion,
  selectFanHappiness,
  selectLeaguePosition,
  selectPersonalWealth,
  selectScore
} from './metricsSlice'
import styles from './Metrics.module.css'

export function Metrics() {
  const clubFunds = useSelector(selectClubFunds)
  const externalOpinion = useSelector(selectExternalOpinion)
  const fanHappiness = useSelector(selectFanHappiness)
  const leaguePosition = useSelector(selectLeaguePosition)
  const personalWealth = useSelector(selectPersonalWealth)
  const score = useSelector(selectScore)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div className='feature'>
      <div className={styles.row}>
        <span className='score'>Score: {score}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.value}>Club Funds: {clubFunds}</span>
        {/* <button
          className={styles.button}
          onClick={() =>
            dispatch(changeMetrics(Number(incrementAmount) || 0))
          }
        >
          Change Club Funds
        </button> */}
      </div>
      <div className={styles.row}>
        <span className={styles.value}>External Opinion: {externalOpinion}</span>
        {/* <button
          className={styles.button}
          onClick={() =>
            dispatch(changeMetrics(Number(incrementAmount) || 0))
          }
        >
          Change External Opinion
        </button> */}
      </div>
      <div className={styles.row}>
        <span className={styles.value}>Fan Happiness: {fanHappiness}</span>
        {/* <button
          className={styles.button}
          onClick={() =>
            dispatch(changeMetrics(Number(incrementAmount) || 0))
          }
        >
          Change Fan Happiness
        </button> */}
      </div>
      <div className={styles.row}>
        <span className={styles.value}>League Position: {leaguePosition}</span>
        {/* <button
          className={styles.button}
          onClick={() =>
            dispatch(changeMetrics(Number(incrementAmount) || 0))
          }
        >
          Change Fan Happiness
        </button> */}
      </div>
      <div className={styles.row}>
        <span className={styles.value}>Personal Wealth: {personalWealth}</span>
        {/* <button
          className={styles.button}
          onClick={() =>
            dispatch(changeMetrics(Number(incrementAmount) || 0))
          }
        >
          Change Personal Wealth
        </button> */}
      </div>
    </div>
  )
}
