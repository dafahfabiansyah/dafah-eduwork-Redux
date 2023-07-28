import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Counter</h3>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      {''}
      <span>{counter}</span>
      {''}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </div>
  );
};

export default Counter;
