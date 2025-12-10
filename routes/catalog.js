const express = require('express');
const {sequelize} = require("../database/database");
const prepareData = require("../helpers/easy");
const router = express.Router();


router.get('/', async function(req, res, next) {
    const result = await sequelize.query(`
            SELECT product.id, product.title, product.price, product.category_id, filename FROM product 
            inner join photo on photo.id = product.photo_id
        `);
    if (result[1] > 0) {
        const values = result[0];
        const categories = await sequelize.query(`
            SELECT * FROM category
        `);

        res.render('catalog',
            prepareData(
            {
                product: values,
                categories: categories[0],
                productsJson: JSON.stringify(values)
            }));
    } else {
        res.status(400);
        res.json({error: "Отсутствует список товаров."});
    }
});



module.exports = router;