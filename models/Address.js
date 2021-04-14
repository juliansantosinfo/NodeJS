const { Model, DataTypes } = require("sequelize");
const database = require("../database");

class Address extends Model {}

Address.init(
  {
      country: {
          type: DataTypes.STRING,
          allowNull: true
      },
      state: {
          type: DataTypes.STRING,
          allowNull: true
      },
      city: {
          type: DataTypes.STRING,
          allowNull: true
      },
      district: {
          type: DataTypes.STRING,
          allowNull: true
      },
      address: {
          type: DataTypes.STRING,
          allowNull: true
      },
      number: {
          type: DataTypes.INTEGER,
          allowNull: true
      },
      complement: {
          type: DataTypes.STRING,
          allowNull: true
      },
      user_id : {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: 'Users',
              key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      }
  },
  {
    sequelize: database.sequelize,
  }
);

Address.sync({alter: true});

module.exports = Address;
