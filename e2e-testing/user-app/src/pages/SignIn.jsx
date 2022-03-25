import { FormSignIn } from '../components/FormSignIn';
import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../store/AuthContext';
import axios from 'axios';

export  function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const { isAuth } = useContext(AuthContext);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: { token }} = await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/users/sign-in',
        data: { email, password }
      });
      localStorage.setItem('token', token);
      isAuth(token);
      history.push('/profile');
    }
    catch (err) {
      localStorage.removeItem('token');
      setErrors({ account: 'User invalid or password invalid' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default: break;
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <FormSignIn
        handleSubmit={handleSubmit}
        email={email}
        password={password}
        handleChange={handleChange}
        errorsAccount={errors.account}
      />
    </div>
  );
}
