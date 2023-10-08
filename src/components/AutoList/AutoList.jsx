import { useEffect, useState } from 'react';
import { fetchCars } from 'redux/operations';
import useLocalStorage from 'hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import css from './AutoList.module.css';

export const AutoList = () => {
  const { dispatch, cars } = useLocalStorage();
  const [counter, setCounter] = useState(8);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleLoader = () => {
    setCounter(prevState => prevState + 8);
  };

  const arrayOfCars = cars.slice(0, counter);

  return <div></div>;
};
