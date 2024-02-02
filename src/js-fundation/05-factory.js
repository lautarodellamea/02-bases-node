// tema fundamental si queremos aplicar arquitecturas en js, para que nuestras app sean tolerantes a cambios, facil de expandir y escalar, etc.

// un factory function no es mas que una funcion que crea una funcion

// dependencia para crear ids unicos y calcular edad, unsamos "PATRON ADAPTADOR", traidas de un archivo de barril
// pero esto lo sacaremos ya que este archivo no debe tener ninguna dependencia, en otros patrones de diseño esto se denominaria "entidad"
// const { getAge, getUUID } = require('../plugins');

// para no tener que estar mandando la dependencia sienmpre creamos una nueva funcion
// esto es un factory function, una funcion que regresa otra funcion
// aca mandaremos las dependencias como argumentos
const builMakePerson = ({getUUID, getAge}) => {
  return ({ name, birthdate }) => {
    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
}





// const obj = {
//   name: "lautaro",
//   birthdate: "1998-01-17",
// };

// const lauti = buildPerson(obj);

// console.log(lauti)


module.exports = {
  builMakePerson
}