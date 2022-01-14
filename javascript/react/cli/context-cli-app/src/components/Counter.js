import React from "react";
import { useCounter } from "../providers/CounterContext";

const Counter = () => {
  const { value } = useCounter();
  return <p>{value}</p>;
};

export default Counter;
