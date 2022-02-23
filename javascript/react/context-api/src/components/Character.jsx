import { useState } from "react";
import Gender from "./Gender";

const Character = ({ character }) => {
  const [showGender, setShowGender] = useState(false);

  const handleShowGender = () => setShowGender((previous) => !previous);

  return (
    <section>
      <h2>{character.name}</h2>
      <h4>{character.species}</h4>
      <img src={character.image} alt="character Character" />
      <br />
      <button onClick={handleShowGender}>Mostrar Genero</button>
      {showGender ? <Gender /> : null}
    </section>
  );
};

export default Character;
