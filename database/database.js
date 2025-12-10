const { sequelize, syncDatabase } = require("./connection");

// Фабрики моделей
const Category = require("./models/category");
const Photo = require("./models/photo");
const Product = require("./models/product");
const Client = require("./models/client");
const OrderType = require("./models/orderType");
const Order = require("./models/order");
const OrderComposition = require("./models/orderComposition");

// Инициализация
const db = {
    Photo: Photo,
    Category: Category,
    Product: Product,
    Client: Client,
    OrderType: OrderType,
    Order: Order,
    OrderComposition: OrderComposition,
};


db.sequelize = sequelize;


syncDatabase().then(_=>_);


module.exports = db;