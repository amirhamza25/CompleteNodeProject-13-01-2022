const { agent, agentBalance } = require("../../models");
const getVendorInfo = async (req, res, next) => {
    try {
        const agentInfo = await agent.findAll({
            where: { agenrType: "Vendor" },
            order: [['id', 'DESC']],
            include: [{
                model: agentBalance,
            }]
        })
            .then((item) => {
                res.json(item);
            })
            .catch((error) => {
                res.json({ msg: error['message'] });
            })

    } catch (error) {
        res.status(500).json({ msg: "System faild" });
    }
}

module.exports = getVendorInfo;

