const {Model, DataTypes} = require('sequelize');
const database = require('../database');

class User extends Model {};

User.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birth: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        color: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Black'
        }
    },{
        sequelize: database.sequelize
    }
)

User.sync({alter: true});

module.exports = User;