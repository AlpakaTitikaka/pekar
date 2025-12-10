const express = require('express');
const {sequelize} = require("../database/database");
const prepareData = require("../helpers/easy");
const router = express.Router();


router.get('/', async function (req, res, next) {
    const result = await sequelize.query(`
            SELECT * FROM order_types
        `);
    if (result[1] > 0) {
        const values = result[0];

        res.render('cart',
            prepareData(
                {
                    order_types: values
                }));
    } else {
        res.status(400);
        res.json({error: "Отсутствуют необходимые данные."});
    }
});

router.post('/', async function (req, res, next) {
    const msg = "Заказ успешно оформлен!<br/>Скоро с вами свяжется менеждер.";
    res.render('cart', prepareData({ message: msg }));
});

module.exports = router;
