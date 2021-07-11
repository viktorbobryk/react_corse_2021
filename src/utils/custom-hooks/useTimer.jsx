import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useTimer = (callback, time) => {
  const dispatch = useDispatch();
  let interval = null;
  useEffect(() => {
    dispatch(callback());
    interval = setInterval(async () => {
      dispatch(callback());
    }, time);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return interval;
};
