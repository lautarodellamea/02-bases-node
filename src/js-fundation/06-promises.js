const getPokemonById = (id, callback) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((pokemon) => { callback(pokemon.name)})
};

module.exports = {
  getPokemonById,
};
