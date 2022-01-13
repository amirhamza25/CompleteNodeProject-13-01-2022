const { product } = require("../../models");
const getCategoryWishProduct = async (req, res, next) => {

    try {
        const { vendorId } = req.params
        const junction = await product.findAll({
            where: { userId: vendorId },
            order: [['id', 'DESC']],
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

