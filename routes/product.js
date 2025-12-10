const express = require('express');
const { _, sequelize} = require("../database/database");
const prepareData = require("../helpers/easy");
const router = express.Router();


router.get('/:id', async function(req, res, next) {
    if (req.params) {
        const id = req.params.id;
        const result = await sequelize.query(`
            SELECT product.*, filename FROM product 
            inner join photo on photo.id = product.photo_id
            where product.id=${id}
        `);
        if (result[1] === 1) {

            const values = result[0][0];

            if (values.visible) {
                res.render('product', prepareData({ product: values, productJson: JSON.stringify(values) }));
            } else {
                res.status(400);
                res.json({ error: "Этот товар временно недоступен." });
            }
        } else {
            res.status(400);
            res.json({ error: "Такого товара не существует." });
        }
    } else {
        res.status(400);
        res.json({status: 400});
    }
});


module.exports = router;