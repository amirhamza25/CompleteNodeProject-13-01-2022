const { category, categorySub, categoryBrand, product, productStockQty } = require("../../models");
const { Op } = require("sequelize");

const getRemainderAdminProductPackStockQty = async (req, res, next) => {
    try {
        const junction = await product.findAll({
            where: { [Op.and]: [{ productOwner: 'Admin' }, { productType: 'Package' }] },
            order: [['id', 'DESC']],
            include: [{
                model: category,
                attributes: ['title'],
                through: { attributes: [] }
            }, {
                model: categorySub,
                attributes: ['title'],
                through: { attributes: [] }
            }, {
                model: categoryBrand,
                attributes: ['title'],
                through: { attributes: [] }
            }, {
                model: productStockQty,
                where: {
                    qty: {
                        [Op.lte]: 10
                    }
                },
                through: { attributes: [] }
            }],
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

module.exports = getRemainderAdminProductPackStockQty;

