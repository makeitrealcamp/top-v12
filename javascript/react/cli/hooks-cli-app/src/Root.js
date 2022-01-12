import React, { useState, useEffect, useCallback } from "react";

const Root = () => {
  const [pokeData, setPokeData] = useState(null);
  const [name, setName] = useState('World');
  const isFetchEnable = true;

  var handleClick = useCallback(() => {
    setName('Class')
  }, []);

  useEffect(() => {
    async function getPokeData () {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/squirtle');
        const data = await response.json();
        // throw new Error("there is a problem calling the api");
        setPokeData(data);
      } catch(e) {
        console.error(e);
      }
    }
    getPokeData();
  }, [isFetchEnable]);

  return (<div>
    <h1 onClick={handleClick}>{`Hola ${name}`}</h1>
    <div>
      <h3>{pokeData?.name}</h3>
      <p>{pokeData?.weight}</p>
    </div>
  </div>);
}

export default Root;
