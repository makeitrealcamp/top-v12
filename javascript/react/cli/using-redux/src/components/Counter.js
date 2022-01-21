import React from "react";
import { useSelector } from 'react-redux'

const Counter = () => {
  const counter = useSelector((state) => state?.counterReducer?.count);
  return <p>{counter}</p>;
};

export default Counter;
