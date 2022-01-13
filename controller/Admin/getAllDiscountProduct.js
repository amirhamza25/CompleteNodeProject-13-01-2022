const { category, categorySub, categoryBrand, product } = require("../../models");
const { Op } = require("sequelize");
const GetDiscountProductData = async (req, res, next) => {
    try {
        const junction = await product.findAll({
            // attributes: ['id'],
            where: {
                discountAmount: { [Op.ne]: 0 }
            },
            order: [['id', 'DESC']],
            include: [{
                model: category,
                // attributes: ['title'],
                through: { attributes: [] }
            }, {
                model: categorySub,
                attributes: ['title'],
                through: { attributes: [] }
            }, {
                model: categoryBrand,
                attributes: ['title'],
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

module.exports = GetDiscountProductData;
