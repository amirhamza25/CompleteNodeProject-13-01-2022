const { agent, agentOrderDetails, sequelize } = require("../../models");
const getVendorOrderReturnSuccess = async (req, res, next) => {
    try {
        const agentInfo = await agentOrderDetails.findAll({
            where: { orderType: "return", status: "success" },
            attributes: [[sequelize.fn('sum', sequelize.col('totalProduct')), 'totalProduct'], [sequelize.fn('sum', sequelize.col('totalQty')), 'totalQty'], [sequelize.fn('sum', sequelize.col('totalPrice')), 'totalPrice']],
            include: [{
                model: agent,
                where: { agenrType: "Vendor", chk: "1" },
                order: [['id', 'DESC']],
                through: { attributes: [] }
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

module.exports = getVendorOrderReturnSuccess;

