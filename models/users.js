const { DataTypes, Model } = require("sequelize");
module.exports = (sequelize) => {
  class Users extends Model {
    static associate(models) {
      models.User.hasMany(models.Role, {
        as: "RoleUser",
        foreinhkey: "Id",
      });
    }
  }
  Users.init(
    {
      IdUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Rol: { type: DataTypes.INTEGER },
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
