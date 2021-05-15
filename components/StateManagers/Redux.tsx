import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../stores/redux-counter/counterSlice';

function Redux() {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <button
        className="row border-2 rounded-xl p-2"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="row border-2 rounded-xl p-2"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </Fragment>
  );
}

export default Redux;
