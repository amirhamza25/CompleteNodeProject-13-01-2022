const { product, cart } = require("../../models");

const addToShoppingCart = async (req, res, next) => {
    try {
        const { id, userId, orderType } = req.body;
        const ip = req._remoteAddress;
        const productCount = await product.findOne({ where: { id: id } });
        const cartOrderCount = await cart.count({ where: { productId: id } })
        if (cartOrderCount > 0) {
            const updateInfo = await cart.increment({ qty: 1 }, { where: { productId: id } })
                .then((item) => {
                    res.json({ success: [{ result: 'Add to cart update successfully', msg: item }] });
                })
                .catch((error) => {
                    res.json({ errors: [{ result: 'error', msg: error['message'] }] });
                })
        } else {
            const insertInfo = await cart.create({ userId: userId, productId: id, ip: ip, orderType: orderType, price: productCount.buyPrice, qty: 1 })
                .then((item) => {
                    res.json({ success: [{ result: 'Add to cart add successfully', msg: item }] });
                })
                .catch((error) => {
                    res.json({ errors: [{ result: 'error', msg: error['message'] }] });
                })
        }
    } catch (error) {
        res.status(500).json({ errors: [{ result: 'error', msg: "System faild" }] });
    }
}

module.exports = addToShoppingCart;

