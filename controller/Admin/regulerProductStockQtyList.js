const { product, category, categorySub, categoryBrand, productStockQty } = require("../../models");
const { Op } = require("sequelize");
const regulerProductStockQtyList = async (req, res, next) => {
    try {
        const junction = await productStockQty.findAll({
            order: [['id', 'DESC']],
            include: [{
                model: product,
                where: { [Op.and]: [{ productOwner: 'Admin' }, { productType: 'Reguler' }] },
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

module.exports = regulerProductStockQtyList;

