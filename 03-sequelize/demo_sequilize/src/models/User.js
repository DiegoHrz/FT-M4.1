const { DataTypes } = require("sequelize");
//const dataBase = require("../db");

//creamos una funcion users en donde le pasamos por parametro la dataBase

const User = (dataBase) => {
  //define metodo de sequlize a definir el modelo(entidad) q se llama User, entre llaves estaras los atributos del modelo usuario
  dataBase.define("User", {
    //en este atributo se indica el tipo de dato y el contraint
    id: {
      //para definir el tipo de dato integer usamos d sqlize datatypes
      type: DataTypes.INTEGER,
      //y las restricciones:
      autoIncremental: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      //indicar datos que son obligatorios
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = User;
