const { DataTypes, Model } = require("sequelize");
module.exports = (sequelize) => {
  class Users extends Model {
    static associate(models) {}
  }
  Users.init(
    {
      IdUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      IdRol: { type: DataTypes.INTEGER },
      FirstName: { type: DataTypes.STRING },
      LastName: { type: DataTypes.STRING },
      Email: { type: DataTypes.STRING },
      Status: { type: DataTypes.BOOLEAN },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
      timestamps: true,
    }
  );
  return Users;
};
