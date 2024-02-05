// 01-template.js
// desestructuro sino deberia poner algun nombre sin las llaves y luego acceder al "vemailTemplate" con la notacion del punto (name.emailTemplate)
/* const {emailTemplate} = require("./js-fundation/01-template");
console.log(emailTemplate) */
/* -------------------------------------------------------- */

// 02-destructuring.js
/* require("./js-fundation/02-destructuring"); */
/* -------------------------------------------------------- */

// 03-callbacks.js
// const { getUserById } = require("./js-fundation/03-callbacks");
/* -------------------------------------------------------- */

// hagamos uso de callbacks, que son funciones que se pasan como paramentro, aca usamos la funcion que importamos donde en el segundo parametro le pasamos un callback
/* const id = 1;

getUserById(id, function (error, user) {

  if (error) {
    throw new Error(error);
  }


  // callback hell: pasa cuando usamos callbacks dentro de callbacks
  getUserById(2, (error, user2) => {
    if (error) {
      throw new Error(error);
    }

    console.log({user,user2})
  })

}); */
/* -------------------------------------------------------- */

// 04-arrow.js
/* const { getUserById } = require("./js-fundation/04-arrow");

const id = 1

getUserById(id, (error, user) => {
  if(error){
    throw new Error(error)
  }

  console.log(user)
})
 */
/* -------------------------------------------------------- */

// 05-factory.js
// observamos que aca se mandan las dependencias y el archivo que contiene la funcion o encargado de crear personas no tiene ninguna dependencia en su codigo
// el patron adaptador y factory functions son patrones de diseño
/* const { builMakePerson } = require("./js-fundation/05-factory");
const { getAge, getUUID } = require("./plugins");

const makePerson = builMakePerson({ getUUID, getAge });

const obj = {
  name: "lautaro",
  birthdate: "1998-01-17",
};

const lauti = makePerson(obj); */
/* -------------------------------------------------------- */

// 06-promises.js
/* const { getPokemonById } = require("./js-fundation/06-promises");

getPokemonById(4, (pokemon) => {console.log(pokemon)}) */
/* -------------------------------------------------------- */

// 06.1-cadena-promises.js
/* const { getPokemonById2 } = require("./js-fundation/06.1-cadena-promises");

const info = getPokemonById2(4)
  .then((pokemon) => {
    console.log({ pokemon });
  })
  .catch((error) => {
    // esto me trae el error y la linea, todo
    // console.error({ error });
    // de esta forma obtendria solo el mensaje
    console.error(error.message);
  })
  .finally(() => console.log("finally")); */
/* -------------------------------------------------------- */

// 07-async-await.js
/* const { getPokemonById } = require("./js-fundation/08-patron-adaptador-fetch.js");

getPokemonById(4)
  .then((pokemon) => {
    console.log({ pokemon });
  })
  // si no tuvieramos el manejo del catch el programa crashea
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => console.log("finally")); */
/* -------------------------------------------------------- */

// 08-patron-adaptador-fetch.js
/* const { getPokemonById } = require("./js-fundation/08-patron-adaptador-fetch.js");

getPokemonById(4)
  .then((pokemon) => {
    console.log({ pokemon });
  })
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => console.log("Finalmente")); */
/* -------------------------------------------------------- */

// usando nuestro logger 
const { buildLogger } = require("./plugins");

// le paso como argumento el archivo o servicio que estoy mandando a llamar
// esto me crea archivos .log, donde yo los podrias tratar de diferentes formas, hacer una serializacion a json por ejemplo
const logger = buildLogger("app.js");
logger.log("Hola Mundo");
logger.error("Esto es algo malo");