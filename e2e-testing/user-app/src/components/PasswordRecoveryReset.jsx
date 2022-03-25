import {
  FormContainer,
  InputForm,
  ButtonSend,
  Errors,
} from './styled/FormStyles';

function PasswordRecoveryResetForm({
  password,
  newPassword,
  message,
  handleSubmit,
  handleChange,
}) {
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Errors>{message}</Errors>
      <label htmlFor="password">Ingresa tu nueva constraseña</label>
      <InputForm
        id="password"
        name="password"
        type="password"
        onChange={handleChange}
        value={password}
        placeholder="Confirma tu constraseña"
        required
      />
      <label htmlFor="newPassword">Confirma tu constraseña</label>
      <InputForm
        id="newPassword"
        name="newPassword"
        type="password"
        onChange={handleChange}
        value={newPassword}
        placeholder="Confirma tu constraseña"
        required
      />
      <ButtonSend>Reestablecer constraseña</ButtonSend>
    </FormContainer>
  );
}

export default PasswordRecoveryResetForm;
