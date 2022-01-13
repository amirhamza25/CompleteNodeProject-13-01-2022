const { agent, product, agentStockQty } = require("../../models");
const { Op } = require("sequelize");
const getVendorStockQtyRemainderPackage = async (req, res, next) => {
    try {
        const agentInfo = await agentStockQty.findAll({
            where: {
                qty: {
                    [Op.lte]: 10
                }
            },
            include: [{
                model: agent,
            }, {
                model: product,
                where: { productType: "Package" }
            }]
        })
            .then((item) => {
                res.json(item);
            })
            .catch((error) => {
                res.json(error['message']);
            })

    } catch (error) {
        res.status(500).json({ msg: "System faild" });
    }
}

module.exports = getVendorStockQtyRemainderPackage;

