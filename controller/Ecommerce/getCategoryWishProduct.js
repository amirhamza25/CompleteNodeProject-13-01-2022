const { category, product } = require("../../models");
const getCategoryWishProduct = async (req, res, next) => {

    try {
        const junction = await category.findAll({
            order: [['id', 'DESC']],
            include: [{
                model: product,
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
        res.status(500).json({ errors: [{ result: 'error', msg: "System faild" }] });
    }
}

module.exports = getCategoryWishProduct;

