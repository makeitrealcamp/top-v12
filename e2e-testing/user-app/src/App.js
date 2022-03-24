import './App.css';
import { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { AuthContext } from './store/AuthContext';
import { SignUp } from './pages/SignUp';
import { Navbar } from './components/NavBar/Navbar';
import { Profile } from './pages/Profile';
import { SignIn } from './pages/SignIn';
import PasswordRecovery from './pages/PasswordRecovery';
import PasswordReset from './pages/PasswordReset';
import Products from './pages/Products';

function PrivateRoute(props) {
  const { auth } = useContext(AuthContext);

  if (!auth) return <Redirect to="/" />;

  return <Route {...props} />;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/password-recovery" component={PasswordRecovery} />
          <Route
            exact
            path="/password-reset/:token"
            component={PasswordReset}
          />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/products" component={Products} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
