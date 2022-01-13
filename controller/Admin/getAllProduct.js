const { category, categorySub, categoryBrand, product, agent } = require("../../models");

const GetProductData = async (req, res, next) => {
    try {
        const junction = await product.findAll({
            // attributes: ['id'],
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

module.exports = GetProductData;
