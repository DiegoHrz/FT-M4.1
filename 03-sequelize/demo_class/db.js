// 1 Iniciamos con las credenciales
const { Sequelize } = require("sequelize");
const user = "postgress";
const pass = "root";
const port = "5432";
const dbName = "demo";

const sequelize = new Sequelize(
  `postgress://${user}:${pass}@localhost:${port}/${dbName}`
);

async function testConection() {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log(error);
  }
}
testConection();
module.exports = sequelize;
