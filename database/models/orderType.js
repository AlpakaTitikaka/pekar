const { sequelize, _ } = require("../connection");
const { Model, DataTypes} = require("sequelize");

class OrderType extends Model {}

OrderType.init(
    {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            field: 'id',
        },
        Title: {
            type: DataTypes.STRING(40),
            allowNull: false,
            field: 'title',
        },
    },
    {
        sequelize,
        timestamps: false,
        tableName: 'order_types',
        modelName: 'order_types',
    },
);

module.exports = OrderType;