import logo from "logo.svg";
import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { logout } = useAuth0();
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
          <Link to="/video">Profile</Link>
        </nav>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <Outlet />
      </header>
    </div>
  );
}

export default Home;
