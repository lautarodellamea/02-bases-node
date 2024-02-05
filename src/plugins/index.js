// archivo de barril
// archivo que sirve como punto de entrada o como un lugar centralizado para exportar y reexportar otros módulos o archivos.

const { getAge } = require("./get-age.plugin");
const { getUUID } = require("./get-id.plugin");
const { http } = require("./http-client.plugin");

// va sin llaver porque es lo unico que exportamos
const buildLogger = require("./logger.plugin");

module.exports = {
  getAge,
  getUUID,
  http,
  buildLogger
};
