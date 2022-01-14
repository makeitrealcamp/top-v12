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
      const fetcher = async (pathName) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pathName}`);
        return await response.json();
      }
      try {
        const [squirtle, ditto ] = await Promise.all([fetcher('squirtle'), fetcher('ditto')]);
        // throw new Error("there is a problem calling the api");
        setPokeData(ditto);
      } catch(e) {
        console.error(e);
      }
    }
    getPokeData();
    return () => console.log('unmount');
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
