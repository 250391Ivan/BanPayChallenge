const { DataTypes, Model } = require("sequelize");
module.exports = (sequelize) => {
  class Roles extends Model {
    static associate(models) {}
  }
  Roles.init(
    {
      IdRol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Name: { type: DataTypes.STRING },
      Status: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "Rol",
      tableName: "Roles",
      timestamps: true,
    }
  );
  return Roles;
};
