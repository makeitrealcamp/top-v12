let encounters;

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then((response) => response.json())
.then((data) => {
  fetch(data.location_area_encounters)
  .then((response) => response.json())
  .then((data) => console.log('encounters', data))
});

async function getEncounters() {
  const pokemonResponse = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  const pokemonData = await pokemonResponse.json();
  const response = await fetch(pokemonData.location_area_encounters);
  const data = await response.json();
  console.log('encounters', data);
}

getEncounters();
