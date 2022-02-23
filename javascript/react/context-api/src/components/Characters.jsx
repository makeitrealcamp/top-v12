import { useState, useEffect, createContext } from "react";
import axios from "axios";

import Character from "./Character";

export const CharacterContext = createContext();

const Characters = () => {
  const [dataLocal, setDataLocal] = useState({});
  const [gender, setGender] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getAllCharacters = async () => {
    try {
      setLoading(true);
      const { data } = await axios({
        method: "get",
        url: "https://rickandmortyapi.com/api/character/2",
        responseType: "Content-Type",
      });

      setDataLocal(data);
      console.log("here", dataLocal, gender);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeGender = () => {
    console.log("change", gender);
    setGender((previous) => !previous);
    setDataLocal({ ...dataLocal, gender: gender ? "Male" : "Female" });
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <CharacterContext.Provider
      value={{ characters: dataLocal, handleChangeGender }}
    >
      <article>
        <h1>Este es un componente padre</h1>
        <Character character={dataLocal} />
      </article>
    </CharacterContext.Provider>
  );
};

export default Characters;
