import MouseTracker from "./components/MouseTracker";
//import Cat from "./components/Cat";
//import withMouse from "./components/withMouse";
import "./App.css";

function App() {
  // With HOC
  // const CatMouseTracker = withMouse(Cat);
  return (
    <div className="App">
      <div className="App-container">
        <h1 style={{ margin: 0, paddingTop: 14 }}>Move the mouse around!</h1>
        <MouseTracker />
      </div>
    </div>
  );
}

export default App;
