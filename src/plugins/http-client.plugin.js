/* const httpClientPlugin = {
  get: async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  },

  post: async (url, body) => {},
  put: async (url, body) => {},
  delete: async (url) => {},
};

module.exports = {
  http: httpClientPlugin,
};
 */

// si quisieramos usar axios ahora, solo deberiamos modificar este archivo, hare de nuevo el codigo debajo para guardar el anterior

const axios = require("axios");

const httpClientPlugin = {
  get: async (url) => {
    // axios ya me devuelve en formato json, perod ebo desestructurar el data del res
    const res = await axios.get(url);
    return res.data;
  },
};

module.exports = {
  http: httpClientPlugin,
};

// en el caso que tengamos distintas peticiones, es decir un cliente para cuando tenemos un token y estamos autenticado donde lo pasaremos por el header, y otro cliente para peticiones publicas, para no repetir codigo y tener dos archivos casi iguales podriamos hacer lo sieguiente:
/* const buildHttpClient = (headers) => {
  const httpClientPlugin = {
    get: async (url) => {
      // axios ya me devuelve en formato json, perod ebo desestructurar el data del res
      const res = await axios.get(url, headers);
      return res.data;
    },
  };

  module.exports = {
    http: httpClientPlugin,
  };
}; */

// de esta forma tnemos un solo archivo y mas facil de mantener o modificar