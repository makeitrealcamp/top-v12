import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from 'notistack';

import PasswordRecoveryResetForm from '../components/PasswordRecoveryReset';

function PasswordRecoveryReset() {
  const { token } = useParams();
  const history = useHistory();

  const [password, setPassword] = useState('');
  const [newPassword, setPasswordConfirm] = useState('');
  const [message, setMessage] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'password':
        setPassword(value);
        break;
      case 'newPassword':
        setPasswordConfirm(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await axios({
          method: 'PUT',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: '/users/password-reset',
          data: { newPassword },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        enqueueSnackbar('Contraseña reestablecida correcamente!', {
          variant: 'success',
        });
        history.push('/');
      } catch (error) {
        setMessage(error);
        enqueueSnackbar('No se logro reestablecer la constraseña', {
          variant: 'error',
        });
      }
    }
  };

  const validate = () => {
    const arePasswordEqual =
      !!password && !!newPassword && password === newPassword;

    if (!arePasswordEqual) {
      setMessage({ password: 'La contraseña no coincide' });
      return false;
    }
    return true;
  };

  return (
    <PasswordRecoveryResetForm
      password={password}
      newPassword={newPassword}
      message={message.password}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
}

export default PasswordRecoveryReset;
