import logo from './logo.svg';
import Title from './TitleClass/index';
import './App.css';

const style = {
  backgroundColor: 'green'
}

const FIRST = 'Hola';

function App() {
  return (
    <div style={style} className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Title firstPart={FIRST} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
