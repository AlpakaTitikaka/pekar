const { Model, DataTypes, Deferrable, DATE} = require("sequelize");
const { sequelize, _ } = require("../connection");
const Client = require("./client");
const OrderType = require("./orderType");

class Order extends Model {}

Order.init(
    {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            field: 'id',
        },
        Client: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: Client, key: 'id', deferrable: Deferrable.INITIALLY_IMMEDIATE, },
            field: 'client_id',
        },
        OrderType: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: OrderType, key: 'id', deferrable: Deferrable.INITIALLY_IMMEDIATE, },
            field: 'order_type',
        },
        CreationDate: {
            type: DataTypes.DATE,
            allowNull: true,
            default: DataTypes.NOW,
            field: 'creation_date',
        },
        RequiredCompletionDate: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'required_completion_date',
        },
        Address: {
            type: DataTypes.STRING(150),
            allowNull: true,
            field: 'address',
        },
        Sum: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            field: 'order_sum',
        },
        Discount: {
            type: DataTypes.FLOAT,
            allowNull: false,
            default: 0,
            field: 'discount',
        },
        CompletionActualDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'completion_actual_date',
        },
    },
    {
        sequelize,
        timestamps: false,
        modelName: 'orders',
        tableName: 'orders',
    },
);

module.exports = Order;