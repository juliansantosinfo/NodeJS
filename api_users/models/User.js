const { DataTypes } = require("sequelize");
const db = require("../database");

module.exports = db.sequelize.define('User',
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
    },
    {
        // Other model options go here
    });