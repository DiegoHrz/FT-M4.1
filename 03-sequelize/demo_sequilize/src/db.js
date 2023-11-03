//Intanciando sequelize
const { Sequelize } = require("sequelize");
const UserFn = require("./models/User");
const PostFn = require("./models/Post");
const PageFn = require("./models/Page");

const user = "postgres";
const pass = "sher";
const dbname = "lecture";

// Option 1: Passing a connection URI
const dataBase = new Sequelize(
  `postgres://${user}:${pass}@localhost:5432/${dbname}`,
  { logging: false }
);

//Se ejecuta la funcion del modelo usuario (entidad)
UserFn(dataBase);
PostFn(dataBase);
PageFn(dataBase);

const { User, Post, Page} = dataBase.models;

//Relaciones:
User.hasMany(Post) // un usuario tiene muchos posts
Post.belongsTo(User) // pertenece a solo un usuario

User.belongsToMany(Page, {through: 'UserPage'}) // N : N
Page.belongsToMany(User, {through: 'UserPage'})


//Para usar los modelos usaremos dataBase.models, ya q ahi se encuentran

module.exports = { dataBase, ...dataBase.models };
