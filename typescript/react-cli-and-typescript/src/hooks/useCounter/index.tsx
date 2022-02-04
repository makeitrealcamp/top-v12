import { useState, createContext, useContext } from 'react';

const CounterContext = createContext(undefined!);

export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const addToCounter = (amount = 1) => {
    setCounter(counter + amount);
  }

  return (
    <CounterContext.Provider value={{counter, addToCounter}}>
      {children}
    </CounterContext.Provider>
  )
};

const useCounter = () => useContext(CounterContext);

export default useCounter;
