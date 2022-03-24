import {
  FormContainer,
  InputForm,
  ButtonSend,
  Errors,
  InputSelect,
  InputChecked,
  ButtonDelete,
  Message,
} from './styled/FormStyles';

export function FormProfile({
  handleSubmit,
  name,
  email,
  lastname,
  job,
  rolDeveloper,
  handleChange,
  handleDelete,
  errorsAccount,
  errorsMessage,
}) {
  return (
    <>
      <FormContainer className="Form__container" onSubmit={handleSubmit} >
        <Errors>{errorsAccount}</Errors>
        <Message>{errorsMessage}</Message>
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
        <label className="Form__label-lastname" htmlFor="lastname" >
          Lastname
        </label>
        <InputForm
          className="Form__input-lastname"
          id="lastname"
          type="text"
          name="lastname"
          value={lastname}
          onChange={handleChange}
          placeholder="Lastname for the account"
        />
        <label className="Form__label-rolDeveloper" htmlFor="rolDeveloper" >
          Rol Developer
        </label>
        <InputSelect
          className="Form__input-rolDeveloper"
          id="rolDeveloper"
          name="rolDeveloper"
          value={rolDeveloper}
          onChange={handleChange}
          placeholder="What is your rol"
        >
          <option
            value="NN"
            className="Form__input-nn"
          >
            None
          </option>
          <option
            value="FE"
            className="Form__input-fe"
          >
            Front End
          </option>
          <option
            value="BE"
            className="Form__input-be"
          >
            Back End
          </option>
          <option
            value="FS"
            className="Form__input-fs"
          >
            Full Stack
          </option>
        </InputSelect>
        <label className="Form__label-job" htmlFor="job" >
          You have Job
        </label>
        <InputChecked
          className="Form__input-job"
          id="job"
          type="checkbox"
          name="job"
          value={job}
          checked={job}
          onChange={handleChange}
        />
        <div>
          <ButtonSend>Send Form</ButtonSend>
          <ButtonDelete onClick={handleDelete}>
            Delete Account
          </ButtonDelete>
        </div>
      </FormContainer>
    </>
  );
}
