const { http } = require("../plugins");

const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await http.get(url);

  // const res = await fetch(url)
  // const pokemon = await res.json()

  // caso de error
  // throw new Error("Pokemon no existe")

  return pokemon.name;
};

module.exports = {
  getPokemonById,
};
