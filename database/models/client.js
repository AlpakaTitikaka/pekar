const { Model, DataTypes} = require("sequelize");
const { sequelize, _ } = require("../connection");

class Client extends Model {}

Client.init(
    {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            field: 'id',
        },
        FirstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'first_name',
        },
        Name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'name',
        },
        LastName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'last_name',
        },
        Phone: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'phone',
        },
        Email: {
            type: DataTypes.STRING(50),
            allowNull: true,
            field: 'email',
        },
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'client',
        tableName: 'client',
        indexes: [{ unique: true, fields: ['phone'] }],
    },
);

module.exports = Client;