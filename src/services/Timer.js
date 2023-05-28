import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSpeedMin, setSpeedSec } from '../actions/actions';

const Timer = () => {
  const dispatch = useDispatch();
  const [startTime, setStartTime] = useState(null);
  const [charCount, setCharCount] = useState(0);
  const currIndex = useSelector(state => state.currIndex);

  const calculateSpeed = useCallback(() => {
    const elapsedTime = (Date.now() - startTime) / 1000;
    const count = currIndex - 1;
    const speed = count / elapsedTime;
    return speed;
  }, [startTime, currIndex]);

  useEffect(() => {
    if (currIndex === 0) {
      setStartTime(null);
      setCharCount(0);
    } else if (currIndex === 1) {
      setStartTime(Date.now());
    } else {
      const speed = calculateSpeed();
      setCharCount(speed);
      dispatch(setSpeedMin(Math.round(speed * 60)));
      dispatch(setSpeedSec(speed.toFixed(2)));
    }
  }, [currIndex, calculateSpeed, dispatch]);

  return (
    <div className='timer'>
      <p>{`${charCount.toFixed(2)} symbols/s`}</p>
    </div>
  );
};

export default Timer;
