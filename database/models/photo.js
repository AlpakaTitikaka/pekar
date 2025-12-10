const { Model, DataTypes} = require("sequelize");
const { sequelize, _ } = require("../connection");

class Photo extends Model {}

Photo.init(
    {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            field: 'id',
        },
        Filename: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'filename',
        },
    },
    {
        sequelize,
        timestamps: false,
        tableName: 'photo',
        modelName: 'photo',
    },
);

module.exports = Photo;