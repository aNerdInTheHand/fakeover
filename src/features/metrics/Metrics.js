import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  changeClubFunds,
  changeExternalOpinion,
  changeFanHappiness,
  changePersonalWealth,
  selectClubFunds,
  selectExternalOpinion,
  selectFanHappiness,
  selectPersonalWealth
} from './metricsSlice'
import styles from './Metrics.module.css'

export function Metrics() {
  const clubFunds = useSelector(selectClubFunds)
  const externalOpinion = useSelector(selectExternalOpinion)
  const fanHappiness = useSelector(selectFanHappiness)
  const personalWealth = useSelector(selectPersonalWealth)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <span className={styles.value}>Club Funds: {clubFunds}</span>
        <button
          className={styles.button}
          onClick={() =>
            dispatch(changeClubFunds(Number(incrementAmount) || 0))
          }
        >
          Change Club Funds
        </button>
      </div>
      <div className={styles.row}>
        <span className={styles.value}>External Opinion: {externalOpinion}</span>
        <button
          className={styles.button}
          onClick={() =>
            dispatch(changeExternalOpinion(Number(incrementAmount) || 0))
          }
        >
          Change External Opinion
        </button>
      </div>
      <div className={styles.row}>
        <span className={styles.value}>Fan Happiness: {fanHappiness}</span>
        <button
          className={styles.button}
          onClick={() =>
            dispatch(changeFanHappiness(Number(incrementAmount) || 0))
          }
        >
          Change Fan Happiness
        </button>
      </div>
      <div className={styles.row}>
        <span className={styles.value}>Personal Wealth: {personalWealth}</span>
        <button
          className={styles.button}
          onClick={() =>
            dispatch(changePersonalWealth(Number(incrementAmount) || 0))
          }
        >
          Change Personal Wealth
        </button>
      </div>
    </div>
  )
}
