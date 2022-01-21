import logo from "../../logo.svg";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/">Home</Link> |{" "}
          <Link to="/poke-data">Api Data</Link> |{" "}
          <Link to="/video">Video</Link>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Outlet />
      </header>
    </div>
  );
}

export default Home;
