// logger: nos sirve para ver informacion en los despliegues, y guardarlos en una base de datos o un archivo por ejemplo y luego ver lo que querramos.

const winston = require("winston");
const { combine, timestamp, json } = winston.format;

// el timestamp es para ponerle una fecha (viene incluido en winston), y mas abajo la pusimos nosotros de manera manual

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  // defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

// Aca ponemos que estoy en Consola, habria que verificar si no estoy en produccion, ya que no quisiera ver los logs en consola, pero end esarrollo si
//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
// if (process.env.NODE_ENV !== "production") {
logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);
// }

// Envolvemos winston en nuestro patron adaptador
// creamos una factory function y regresaremos el service en el cual estaremos usando el logger, retornaremos como si fuera un console.log().
// Esta es nuestra configuracion basica de nuestro patron adaptador que envuelve a "winston" para protegernos en el caso de que cambiemos este paquete o hagamos nuestra propia implementacion de logger
module.exports = function buildLogger(service) {
  return {
    log: (message) => {
      // el service es para identificar en que servicio esta sucediendo el problema, en que archivo, modulo, clase o lugar especifico.
      logger.log("info", { message, service });
    },
    // para errores, en el caso que suceda uno
    error: (message) => {
      // el service es para identificar en que servicio esta sucediendo el problema, en que archivo, modulo, clase o lugar especifico.
      logger.error("error", { message, service, at: new Date().toISOString() });
    },
  };
};
