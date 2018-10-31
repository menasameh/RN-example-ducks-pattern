// @flow

//Types
const INCREASE_COUNTER = 'app/counter/increase'

//Action creators
const increaseCounter = () => {
  return {
    type: INCREASE_COUNTER,
  }
}

//Reducers
type stateShape = { value: number }
type actionShape = { type: string, payload?: {} }
const initialState = { value: 0 }

export default (state: stateShape = initialState, action: actionShape) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        value: state.value + 1,
      }
    default:
      return state
  }
}
