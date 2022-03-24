import {
  FormContainer,
  InputForm,
  ButtonSend,
  Errors,
} from './styled/FormStyles';

export function FormSignUp({
  handleSubmit,
  name,
  email,
  password,
  confirmPassword,
  handleChange,
  errorsPassword,
  errorsAccount,
}) {
  return (
    <>
      <FormContainer className="Form__container" onSubmit={handleSubmit} >
        <Errors>{errorsAccount}</Errors>
        <label className="Form__label-name" htmlFor="name" >
          Name
        </label>
        <InputForm
          className="Form__input-name"
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name new user"
          required
        />
        <label className="Form__label-email" htmlFor="email" >
          Email
        </label>
        <InputForm
          className="Form__input-email"
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email new user"
          required
        />
        <label className="Form__label-password" htmlFor="password" >
          Password
        </label>
        <InputForm
          className="Form__input-password"
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password for the account"
          required
        />
        <Errors>{errorsPassword}</Errors>
        <label className="Form__label-confirmPassword" htmlFor="confirmPassword" >
          Confirm Password
        </label>
        <InputForm
          className="Form__input-confirmPassword"
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Confirm the password"
          required
        />
        <ButtonSend>Send Form</ButtonSend>
      </FormContainer>
    </>
  );
}
