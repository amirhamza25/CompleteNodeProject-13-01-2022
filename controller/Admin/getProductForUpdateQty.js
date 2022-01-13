const { product, category, categorySub, categoryBrand, productStockQtyRecord } = require("../../models");
const { Op } = require("sequelize");

const getProductForUpdateQty = async (req, res, next) => {
    const { productType } = req.body;
    try {
        const junction = await productStockQtyRecord.findAll({
            order: [['id', 'DESC']],
            include: [{
                model: product,
                where: { productOwner: 'Admin' },
                // attributes: ['title'],
                through: { attributes: [] }
            }]
        })
            .then((item) => {
                res.json(item);
            })
            .catch((error) => {
                res.json({ errors: [{ result: 'error', msg: error['message'] }] });
            })

    } catch (error) {
        res.status(500).json({ errors: [{ result: 'error', msg: "System failed" }] });
    }
}

module.exports = getProductForUpdateQty;

