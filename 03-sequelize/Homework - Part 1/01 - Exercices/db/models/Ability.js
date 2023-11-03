const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Ability", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      //nos piden la combinación "name" + "mana_cost" debe ser única y llamarse 'compositeIndex'.
      unique: "compositeIndex",
    },
    description: {
      type: DataTypes.TEXT,
    },
    mana_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
      //nos piden la combinación "name" + "mana_cost" debe ser única y llamarse 'compositeIndex'.
      unique: "compositeIndex",
      validate: {
        min: 10.0,
        max: 250.0,
      },
    },
  });
};
