const { Model, DataTypes, Deferrable} = require("sequelize");
const { sequelize, _ } = require("../connection");
const Photo = require("./photo");
const Category = require("./category");

class Product extends Model {}

Product.init(
    {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            field: 'id',
        },
        Title: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: 'title',
        },
        WeightG: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'weight_g',
        },
        PhotoId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: { model: Photo, key: 'id', deferrable: Deferrable.INITIALLY_IMMEDIATE, },
            field: 'photo_id',
        },
        CategoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: Category, key: 'id', deferrable: Deferrable.INITIALLY_IMMEDIATE, },
            field: 'category_id',
        },
        Price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            field: 'price',
        },
        Visible: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: true,
            field: 'visible',
        },
        Description: {
            type: DataTypes.STRING(100),
            allowNull: true,
            field: 'description'
        },
        Composition: {
            type: DataTypes.STRING(200),
            allowNull: false,
            field: 'composition',
        },
        ProteinsG: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0,
            field: 'proteins_g',
        },
        FatsG: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0,
            field: 'fats_g',
        },
        CarbohydratesG: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0,
            field: 'carbohydrates_g',
        },
        FoodValueKcal: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0,
            field: 'food_value_kcal',
        }
    },
    {
        sequelize,
        timestamps: false,
        tableName: 'product',
        modelName: 'product',
    },
);

module.exports = Product;