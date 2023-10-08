import { useEffect, useState } from 'react';
import { fetchCars } from 'redux/operations';
import useLocalStorage from 'hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import css from './AutoList.module.css';

export const AutoList = () => {
  return <div className={css.page}></div>;
};
