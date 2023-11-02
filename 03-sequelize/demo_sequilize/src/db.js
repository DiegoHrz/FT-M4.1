//Intanciando sequelize
const { Sequelize } = require("sequelize");
const User = require("./models/User");
const Post = require("./models/Post");

const user = "postgres";
const pass = "sher";
const dbname = "lecture";

// Option 1: Passing a connection URI
const dataBase = new Sequelize(
  `postgres://${user}:${pass}@localhost:5432/${dbname}`,
  { logging: false }
);

//Se ejecuta la funcion del modelo usuario (entidad)
User(dataBase);
Post(dataBase);

//Para usar los modelos usaremos dataBase.models, ya q ahi se encuentran

module.exports = { dataBase, ...dataBase.models };
