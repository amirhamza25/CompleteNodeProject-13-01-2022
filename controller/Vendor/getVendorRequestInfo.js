const { agent, agentBalance } = require("../../models");
const getVendorRequestInfo = async (req, res, next) => {
    try {
        const agentInfo = await agent.findAll({
            where: { agenrType: "Vendor", chk: "0" },
            order: [['id', 'DESC']],
            include: [{
                model: agentBalance,
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

module.exports = getVendorRequestInfo;

