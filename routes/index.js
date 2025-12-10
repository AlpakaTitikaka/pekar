const express = require('express');
const { sequelize } = require("../database/database");
const prepareData = require("../helpers/easy");
const router = express.Router();

router.get('/', async function(req, res, next) {
    let popular = await sequelize.query(`
      SELECT product.*, filename FROM product 
        inner join photo on photo.id = product.photo_id
        WHERE product.id in
        (SELECT TOP 3
                p.id
              FROM product p
              JOIN order_composition oc ON p.id = oc.product_id
              GROUP BY p.id
              ORDER BY SUM(oc.amount) DESC);
    `);
    if (popular[1] < 3) {
        popular = await sequelize.query(`
            SELECT TOP 3 product.*, filename FROM product 
            inner join photo on photo.id = product.photo_id
        `);
    }
    console.log(prepareData({ popular: popular[0] }))
    res.render('index', prepareData({ popular: popular[0] }));
});

module.exports = router;
