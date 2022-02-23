import { useContext } from "react";

import { CharacterContext } from "./Characters";

const Gender = () => {
  const characterContext = useContext(CharacterContext);

  const { handleChangeGender, characters } = characterContext || {};
  console.log("gender", characters);
  return (
    <>
      <h5>{characters.gender === "Male" ? "Masculino" : "Femenino"}</h5>
      <button onClick={handleChangeGender}>Cambiar genero</button>
    </>
  );
};

export default Gender;
