const { sequelize, _ } = require("../connection");
const { Model, DataTypes} = require("sequelize");

class Category extends Model {}

Category.init(
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
        modelName: 'category',
        tableName: 'category',
    },
);


module.exports = Category;