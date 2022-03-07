import { useHandleIncrement } from "../providers/CounterContext";

function Button() {
  const handleIncrement = useHandleIncrement();

  return (

    <button
      type="button"
      onClick={handleIncrement}
    >
      Increment
    </button>
  )
}

export default Button
