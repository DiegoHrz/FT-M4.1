const server = require("./src/app");
const {dataBase} = require("./src/db");

//metodo que indica el puerto 3001 (listen)
server.listen(3001, async () => {
  //Ademas de escuchar en el puerto 3002 se sincronice con la base de datos.

  //Como debemos esperar a que se sincronice la base de datos con el servidor debemos hacer una promesa (async y await), sync(metodo para sincronizar la base de datos)
//para q la db se pueda actualizar cada vez (crear y eliminar) requiere un {force}
  await dataBase.sync({alter: true});
  console.log("listen on port 3001");
});
