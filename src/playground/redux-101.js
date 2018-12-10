import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ setValue }) => ({
  type: 'SET',
  setValue
});

const resetCount = () => ({
  type: 'RESET'
});

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.setValue
      };
    default:
      return state;
  }
  return state;
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount({ decrementBy: 6 }));
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({setValue: 100}));
