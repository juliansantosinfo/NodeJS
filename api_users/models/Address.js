const { DataTypes } = require("sequelize");
const db = require("../database");

module.exports = db.sequelize.define('Address', {

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
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }

}, {
    // Other model options go here
});