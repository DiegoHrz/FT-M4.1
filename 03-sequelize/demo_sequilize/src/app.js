const express = require("express");
// al ejecutar express tenemos acceso a todas las peticiones (guardamos en una constante)

const server = express();

//dejando a disposicion el server, para que en el index.js ejecutaremos el puerto 3001:
module.exports = server
