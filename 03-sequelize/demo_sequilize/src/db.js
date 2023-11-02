//Intanciando sequelize
const { Sequelize } = require("sequelize");
const User = require('./models/User')

const user = "postgres";
const pass = "sher";
const dbname = "lecture";

// Option 1: Passing a connection URI
const dataBase = new Sequelize(
  `postgres://${user}:${pass}@localhost:5432/${dbname}`
);

//Se ejecuta la funcion del modelo usuario (entidad)
User(dataBase)

module.exports = dataBase;
