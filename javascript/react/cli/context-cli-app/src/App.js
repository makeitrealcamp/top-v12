import logo from "./logo.svg";
import CounterProvider from "./providers/CounterContext";
import Counter from "./components/Counter";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CounterProvider>
          <Counter />
          <Button />
        </CounterProvider>
      </header>
    </div>
  );
}

export default App;
