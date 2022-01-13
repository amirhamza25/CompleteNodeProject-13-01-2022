const { orderDetails, member, agent, order } = require("../../models");
const { Op } = require("sequelize");
const dailyPendingOrderList = async (req, res, next) => {
    try {
        const datetime = new Date();
        const currentDate = (datetime.toISOString().slice(0, 10));
        const junction = await member.findAll({
            // attributes: ['id'],
            // where: {
            //     [Op.and]: [{ status: "pending" }, { orderType: 'order' }, { date: currentDate }]
            // },
            // order: [['id', 'DESC']],
            include: [{
                model: orderDetails,
                attributes: ['totalPrice'],
                as: 'groups',
                through: { attributes: [] }
            }, {
                model: order,
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
        res.status(500).json({ errors: [{ result: 'error', msg: "System failed" }] });
    }
}

module.exports = dailyPendingOrderList;

