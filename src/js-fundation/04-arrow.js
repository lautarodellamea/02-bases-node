const users = [
  {
    id: 1,
    name: "Lautaro",
  },
  {
    id: 2,
    name: "Nilah",
  },
];

// las funciones que trabajan con un callback no retornan el valor propiamente sino que el valor basadoen el callback
const getUserById = (id, callback) => {
  let user = users.find((user) => user.id === id);

  /*   if(!user){
    return callback(`User not found with id ${id}`)
  }

  return callback(null, user) */

  // podemos hacer lo siguiente
  user ? callback(null, user) : callback(`User not found with id ${id}`);
};

module.exports = {
  getUserById,
};
