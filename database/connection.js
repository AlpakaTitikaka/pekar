const Sequelize = require("sequelize");


const sequelize = new Sequelize("bakery", "api", "d0ul0veanime7", {
    dialect: "mssql",
    host: "localhost",
    port: "1433",
});

async function syncDatabase() {
    try {
        console.log("Синхронизация БД...");
        await sequelize.sync({ alter: true });
        console.log("БД синхронизирована");
    } catch (err) {
        console.error("Ошибка синхронизации:", err);
    }
}


module.exports = { sequelize, syncDatabase };