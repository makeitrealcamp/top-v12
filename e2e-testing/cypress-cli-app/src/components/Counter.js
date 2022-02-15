import React from "react";
import { useCounter } from "../providers/CounterContext";

const Counter = () => {
  const { value } = useCounter();
  return <p test-id="counterValue">{value}</p>;
};

export default Counter;
