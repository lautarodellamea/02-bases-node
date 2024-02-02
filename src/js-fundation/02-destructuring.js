// el process es un proceso que corre en cualquier app de node
// uno de sus usos más tradicionales es apuntar a las variables de entorno
// puedo obtener variables de el ambiente donde este corriendo node, por ejemplo en algun hosting y obtener el puerto
/* console.log(process.env);
console.log(process.env.PORT); */

// Desestructuración
const { HOMEPATH, windir, USERNAME } = process.env;
console.log({HOMEPATH, windir, USERNAME});
console.table({HOMEPATH, windir, USERNAME});


// desestructuración de arreglos
const characters = ["Pyke", "Garen", "Lux", "Dr. Mundo", "Vex"];

const [, , supp, , mid] = characters;
console.log(supp, mid)