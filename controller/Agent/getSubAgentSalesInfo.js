const { agent, orderDetails, sequelize } = require("../../models");
const getAgentInfo = async (req, res, next) => {
    try {
        const agentInfo = await agent.findAll({
            where: { agenrType: "SubAgent", chk: "1" },
            order: [['id', 'DESC']],
            include: [{
                model: orderDetails,
                where: { orderType: "order" },
                attributes: [[sequelize.fn('sum', sequelize.col('totalProduct')), 'totalProduct'], [sequelize.fn('sum', sequelize.col('totalQty')), 'totalQty'], [sequelize.fn('sum', sequelize.col('totalPrice')), 'totalPrice']],
                through: { attributes: [] }
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

