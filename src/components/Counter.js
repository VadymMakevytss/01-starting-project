import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

import { counterActions } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  const toggle = useSelector(state => state.showCounter)

  const handleIncrement = () => {
    dispatch(counterActions.increment())
  }

  const handleIncrease = () => {
    dispatch(counterActions.increase(5))
  }

  const handleDecrease = () => {
    dispatch(counterActions.dicrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.showCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>IncresByFive</button>
        <button onClick={handleDecrease}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
