import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Timer = () => {
  const [startTime, setStartTime] = useState(null);
  const [charCount, setCharCount] = useState(0);
  const currIndex = useSelector(state => state.currIndex);

  useEffect(() => {
    if (currIndex === 0) {
      setStartTime(null);
      setCharCount(0);
    } else if (currIndex === 1) {
      setStartTime(Date.now());
    } else {
      const elapsedTime = (Date.now() - startTime) / 1000;
      const count = currIndex - 1;
      const speed = count / elapsedTime;
      setCharCount(speed);
    }
  }, [currIndex, startTime]);

  return <p>{`${charCount.toFixed(2)} simbols p/s`}</p>;
};

export default Timer;