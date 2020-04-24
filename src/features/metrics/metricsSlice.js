import { createSlice } from '@reduxjs/toolkit'

export const metricsSlice = createSlice({
  name: 'metrics',
  initialState: {
    clubFunds: 50000000,
    externalOpinion: 70,
    fanHappiness: 70,
    personalWealth: 100000000,
    score: 0
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    changeClubFunds: (state, action) => {
      state.clubFunds += action.payload
    },
    changeExternalOpinion: (state, action) => {
      state.externalOpinion += action.payload
    },
    changeFanHappiness: (state, action) => {
      state.fanHappiness += action.payload
    },
    changePersonalWealth: (state, action) => {
      state.personalWealth += action.payload
    },
    changeScore: (state, action) => {
      state.score += action.payload
    }
  }
})

export const {
  changeClubFunds,
  changeExternalOpinion,
  changeFanHappiness,
  changePersonalWealth,
  changeScore
} = metricsSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.metrics.value)`
export const selectClubFunds = state => state.metrics.clubFunds
export const selectExternalOpinion = state => state.metrics.externalOpinion
export const selectFanHappiness = state => state.metrics.fanHappiness
export const selectPersonalWealth = state => state.metrics.personalWealth
export const selectScore = state => state.metrics.score

export default metricsSlice.reducer
