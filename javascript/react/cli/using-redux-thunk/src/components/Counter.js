import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokeById } from '../store/reducers/pokeDataReducer';

const Counter = () => {
  const counter = useSelector((state) => state?.counterReducer?.count);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokeById('pikachu'));
  }, [dispatch]);
  
  return <p>{counter}</p>;
};

export default Counter;
