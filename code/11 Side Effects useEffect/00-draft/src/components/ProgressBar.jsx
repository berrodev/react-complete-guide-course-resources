import React, { useEffect, useState } from 'react';

export default function ProgressBar({ timer, interval }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      console.log('INTERVAL');
      setRemainingTime((prevTime) => prevTime - interval);
    }, interval);
    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
