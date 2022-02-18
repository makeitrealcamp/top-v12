import Counter from "./components/Counter";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faMinus);

function App() {
  return (
    <div className="App-container">
      <Counter
        min={1}
        max={10}
        increment={{ size: "large" }}
        count={{ style: { fontWeight: "bold", padding: 26, fontSize: 26 } }}
      />
    </div>
  );
}

export default App;
