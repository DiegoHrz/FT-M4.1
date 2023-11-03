const express = require("express");
// al ejecutar express tenemos acceso a todas las peticiones (guardamos en una constante)

const server = express();
const { User } = require("./db");

//middlewares:
const morgan = require("morgan");

//Aplicando los middlewares
server.use(express.json());
server.use(morgan("dev"));

//rutas:

//todos los usuarios:
server.get("/users", async (request, response) => {
  try {
    const allUsers = await User.findAll();
    response.status(200).json(allUsers);
  } catch (error) {
    response.status(404).json({ error: error.message });
  }
});

//async para que aparezca despues porq puede tomar mas tiempo
server.post("/user", async (request, response) => {
  //cuando hacemos un post necesitamos info en el body de la request, las cuales son las propiedades de los modelos.
  try {
    const { name, lastname } = request.body;

    //ademas crearemos un modelo:
    //aca espera que mi modelo cree un usuario en la base de datos
    const newUser = await User.create({ name, lastname });

    //ahora pedimos una respuesta del servidor
    response.status(200).json(newUser);
  } catch (error) {
    //se accede al mensaje del error por defecto
    response.status(404).json({ error: error.message });
  }
});

//ruta para eliminar usuarios
server.delete("/user", async (request, response) => {
  try {
    //requiero id para poder eliminar al usuario
    const { id } = request.body;
    const user = await User.findByPk(id);
    user.destroy();
    response.status(200).json(user);
  } catch (error) {
    response.status(404).json({ error: error.message });
  }
});

//dejando a disposicion el server, para que en el index.js ejecutaremos el puerto 3001:
module.exports = server;
