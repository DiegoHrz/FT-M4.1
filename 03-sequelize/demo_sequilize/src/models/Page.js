const { DataTypes } = require("sequelize");

const Page = (dataBase) => {
  dataBase.define(
    "Page",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pageName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = Page;
