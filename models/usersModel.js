const { DataTypes, Model } = require("sequelize");

odule.exports = (sequelize) => {
  class Client extends Model {
    static associate(models) {
      models.Client.hasMany(models.Company, {
        as: "CompaniesClient",
        foreingKey: "IdCompany",
      });
    }
  }

  Client.init(
    {
      IdContacto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      IdCompany: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      //options
      sequelize,
      modelName: "Client",
      tableName: "Clients",
      timestamps: true,
    }
  );
};
