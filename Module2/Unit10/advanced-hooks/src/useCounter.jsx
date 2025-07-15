import { useReducer } from "react";

function reducer(state, { action }) {
    switch (action) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
}

function useCounter(initialState) {
    return useReducer(reducer, initialState);
}

export default useCounter;