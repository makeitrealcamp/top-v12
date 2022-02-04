import Button from 'src/components/Button/Button';
import useCounter from 'src/hooks/useCounter';

const App = () => {
  const { counter, addToCounter }  = useCounter();

  return (
    <>
      <p>{counter}</p>
      <Button onClick={() => addToCounter()} text={"Add"} />
      <Button onClick={() => addToCounter(-1)} text={"Remove"} />
    </>
  );
}

export default App;
