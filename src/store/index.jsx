import { createStore } from 'redux';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1 >= 0 ? state - 1 : 0;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
