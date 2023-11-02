const server = require("./src/app");

//metodo que indica el puerto 3001 (listen)
server.listen(3002, () => {
  console.log("listen on PORT 3001");
});
