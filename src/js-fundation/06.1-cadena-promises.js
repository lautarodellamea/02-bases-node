const getPokemonById2 = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  return fetch(url)
    .then((res) => res.json())
    .then(() =>{throw new Error("Pokemon no existe")})
    .then((pokemon) => pokemon.name)
};

module.exports = {
  getPokemonById2,
};
