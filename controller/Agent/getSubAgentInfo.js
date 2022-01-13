const { agent, agentBalance } = require("../../models");
const getAgentInfo = async (req, res, next) => {
    try {
        const agentInfo = await agent.findAll({
            where: { agenrType: "SubAgent" },
            order: [['id', 'DESC']],
            include: [{
                model: agentBalance,
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

