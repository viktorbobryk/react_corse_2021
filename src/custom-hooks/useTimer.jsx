import { useEffect } from 'react';

export const useTimer = (callback, time) => {
  let interval = null;
  useEffect(() => {
    interval = setInterval(async () => {
      // console.log('timer');
      callback();
    }, time);
    return () => {
      // console.log('cleared');
      clearInterval(interval);
    };
  }, []);

  return interval;
};
