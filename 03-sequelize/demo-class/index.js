const server = require("./app");
const sequelize = require(".db");
const PORT = 3001
//PORT
server.listen(PORT, async () => {
  await sequelize.sinc();
  console.log(`server listening on ${PORT}`);
});
