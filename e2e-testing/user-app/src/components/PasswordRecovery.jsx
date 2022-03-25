import { FormContainer, InputForm, ButtonSend } from './styled/FormStyles';

function PasswordRecoveryForm({ email, handleSubmit, handleChange }) {
  return (
    <div>
      <FormContainer onSubmit={handleSubmit} id="recoveryPass">
        <label htmlFor="email">Ingresa tu correo electronico</label>
        <InputForm
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          placeholder="Correo electronico"
          required
        />
        <ButtonSend>Recuperar contraseña</ButtonSend>
      </FormContainer>
    </div>
  );
}

export default PasswordRecoveryForm;
