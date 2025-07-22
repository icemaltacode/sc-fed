import { useMemo, useEffect } from 'react';
import { useReducer } from 'react';

const reducer = {
  play: (state) =>
    ({...state, isRunning: true }),
  pause: (state) =>
    ({...state, isRunning: false }),
  restart: (state) =>
    ({
      ...state,
      remaining: state.initialRemaining,
      isCompleted: false
    }),
  tick: (state) => {
    const remaining = state.remaining - 1;
    if (remaining > 0) {
      return {
        ...state,
        remaining,
      };
    }
    return {
      ...state,
      remaining: 0,
      isRunning: false,
      isCompleted: true,
    };
  }
};

function useTimer(initialRemaining) {
  const initialState = useMemo(() => ({
    initialRemaining,
    remaining: initialRemaining,
    isRunning: false,
    isCompleted: false, 
  }), [initialRemaining]);
  const [state, dispatch] = useReducer((state, action) => reducer[action](state), initialState);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }

    const interval = setInterval(() => dispatch('tick'), 1000);
    return () => clearInterval(interval);
  }, [state.isRunning, dispatch]);
  
  return {
    state,
    actions: {
      play: () => dispatch('play'),
      pause: () => dispatch('pause'),
      restart: () => dispatch('restart'),
      tick: () => dispatch('tick'),
    }
  };
}

export default useTimer;