const { productStockQty, productStockQtyRecord, sequelize } = require("../../models");
const updateProductQty = async (req, res, next) => {
    try {
        let t;
        t = await sequelize.transaction();

        const { productId, qty, userId } = req.body;
        const update = await productStockQty.increment({ qty: qty }, { where: { productId: productId } }, { transaction: t });
        const insertInfo = await productStockQtyRecord.create({ productId: productId, qty: qty, userId: userId }, { transaction: t })
            .then((item) => {
                t.commit();
                res.json({ success: [{ result: 'Your stock update successfully', msg: item }] });
            })
            .catch((error) => {
                t.rollback();
                res.json({ errors: [{ result: 'error', msg: error['message'] }] });
            })
    } catch (error) {
        res.json({ errors: [{ result: 'error', msg: error['message'] }] });
    }
}

module.exports = updateProductQty;
