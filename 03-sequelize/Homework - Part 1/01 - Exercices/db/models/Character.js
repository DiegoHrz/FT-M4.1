const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Character",
    {
      code: {                         // 5 caracteres max
        type: DataTypes.STRING(5),     // 5 caracteres max
        primaryKey: true,             // Validación: el valor no puede ser HENRY
        validate: {
          isNotHenry(value) {
            if (value.toLowerCase() === "henry") throw new Error("is henry");
          },
        },
      },                               // Mistake 1: Removed the extra comma

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,                  // Debe ser único
        validate: {
          notIn: [["Henry", "SoyHenry", "Soy Henry"]],  // Operador notIn que permite introducir valores que no queremos en nuestra data
        },
      },
      age: { type: DataTypes.INTEGER },
      race: {
        type: DataTypes.ENUM(
          "Human",
          "Elf",
          "Machine",
          "Demon",
          "Animal",
          "Other"
        ),
        defaultValue: "other",         // Tendrá un valor por defecto considerado "other"
      },
      hp: { type: DataTypes.FLOAT, allowNull: false },
      mana: { type: DataTypes.FLOAT, allowNull: false },
    },
    {
      timestamps: false,
    }
  );
};
