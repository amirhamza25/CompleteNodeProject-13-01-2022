const { agent, product, agentStockQty } = require("../../models");
const { Op } = require("sequelize");
const getAgentInfo = async (req, res, next) => {
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
                where: { productType: "Reguler" }
            }]
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

module.exports = getAgentInfo;

