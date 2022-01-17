import logo from "./logo.svg";
import Counter from "./components/Counter";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Button />
      </header>
    </div>
  );
}

export default App;
