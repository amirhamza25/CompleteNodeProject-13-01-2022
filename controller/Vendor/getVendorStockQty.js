const { agent, product, agentStockQty } = require("../../models");
const getVendorStockQty = async (req, res, next) => {
    try {
        const agentInfo = await agentStockQty.findAll({
            include: [{
                model: agent,
            }, {
                model: product,
                where: { productType: "Reguler" }
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

module.exports = getVendorStockQty;

