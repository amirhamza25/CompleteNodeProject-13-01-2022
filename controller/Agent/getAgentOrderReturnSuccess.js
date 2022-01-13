const { agent, agentOrderDetails, sequelize } = require("../../models");
const getAgentInfo = async (req, res, next) => {
    try {
        const agentInfo = await agentOrderDetails.findAll({
            where: { orderType: "return", status: "success" },
            attributes: [[sequelize.fn('sum', sequelize.col('totalProduct')), 'totalProduct'], [sequelize.fn('sum', sequelize.col('totalQty')), 'totalQty'], [sequelize.fn('sum', sequelize.col('totalPrice')), 'totalPrice']],
            include: [{
                model: agent,
                where: { agenrType: "Agent", chk: "1" },
                order: [['id', 'DESC']],
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

