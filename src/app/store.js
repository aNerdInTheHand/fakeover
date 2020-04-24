import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import metricsReducer from '../features/metrics/metricsSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    metrics: metricsReducer
  },
})
