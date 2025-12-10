const { Model, DataTypes, Deferrable } = require("sequelize");
const { sequelize, _ } = require("../connection");
const Order = require("./order");
const Product = require("./product");

class OrderComposition extends Model {}

OrderComposition.init(
    {
        OrderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: Order, key: 'id', deferrable: Deferrable.INITIALLY_IMMEDIATE, },
            field: 'order_id',
        },
        ProductId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: Product, key: 'id', deferrable: Deferrable.INITIALLY_IMMEDIATE, },
            field: 'product_id',
        },
        ProductPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            field: 'product_price',
        },
        Amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 1,
            field: 'amount',
        },
        Discount: {
            type: DataTypes.FLOAT,
            allowNull: false,
            default: 0,
            field: 'discount',
        },
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'order_composition',
        tableName: 'order_composition',
    },
);

module.exports = OrderComposition;