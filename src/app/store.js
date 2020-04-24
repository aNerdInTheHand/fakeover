import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import dilemmasReducer from '../features/dilemmas/dilemmaSlice'
import metricsReducer from '../features/metrics/metricsSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    dilemmas: dilemmasReducer,
    metrics: metricsReducer
  },
})
