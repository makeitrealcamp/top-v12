import React, { useState, useEffect, useMemo, useCallback } from "react";

const Root = () => {
  const [pokeData, setPokeData] = useState(null);
  const [name, setName] = useState('World');
  const isFetchEnable = false;

  var handleClick = useCallback(() => {
    setName('Class')
  }, []);

  useEffect(() => {
    if (isFetchEnable) {
      fetch('https://pokeapi.co/api/v2/pokemon/squirtle').then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data);
        setPokeData(data)
      });
    }
    return () => console.log('unmounted');
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
