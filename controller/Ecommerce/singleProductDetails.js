const { product, productStockQty } = require("../../models");
const { Op } = require("sequelize");

const singleProductDetails = async (req, res, next) => {
    try {
        const { id } = req.params
        const junction = await product.findAll({
            order: [['id', 'DESC']],
            where: { id: id },
            // include: [{
            //     model: productStockQty,
            //     // attributes: ['name'],
            // }],
        })
            .then((item) => {
                res.json(item);
            })
            .catch((error) => {
                res.json({ errors: [{ result: 'error', msg: error['message'] }] });
            })

    } catch (error) {
        res.status(500).json({ errors: [{ result: 'error', msg: "System faild" }] });
    }
}

module.exports = singleProductDetails;

