import { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';

import PasswordRecoveryForm from '../components/PasswordRecovery';

function PasswordRecovery() {
  const [email, setEmail] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/users/password-recovery',
        data: { email },
      });
      enqueueSnackbar(
        'Te hemos enviado un correo de recuperacion de contraseña, por favor revisa tu correo',
        {
          variant: 'info',
        }
      );
    } catch (error) {
      enqueueSnackbar('El email no existe', {
        variant: 'error',
      });
    }
  };

  return (
    <PasswordRecoveryForm
      email={email}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default PasswordRecovery;
