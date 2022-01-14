import { createContext, useContext, useState } from 'react'

const CounterContext = createContext()

function CounterProvider({ children }) {
  const [count, setCount] = useState(1)

  function handleIncrement() {
    setCount(prevCount => prevCount + 1)
  }

  function handleDecrement() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <CounterContext.Provider
      value={{
        count,
        handleIncrement,
        handleDecrement,
      }}
    >
      {children}
    </CounterContext.Provider>
  )
}

export function useHandleIncrement() {
  const { handleIncrement } = useContext(CounterContext);
  return handleIncrement;
}

export function useCounter() {
  const { count } = useContext(CounterContext);
  return {
    value: count
  }
}

export default CounterProvider
