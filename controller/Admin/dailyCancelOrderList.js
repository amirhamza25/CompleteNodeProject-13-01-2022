const { rel_order_order_details_user_agent_vendor, orderDetails, member, agent } = require("../../models");
const { Op } = require("sequelize");
const dailyCancelOrderList = async (req, res, next) => {
    try {
        const junction = await rel_order_order_details_user_agent_vendor.findAll({
            attributes: ['id'],
            where: {
                [Op.and]: [{ status: "cancel" }, { orderType: 'order' }, { date: DataTypes.NOW }]
            },
            order: [['id', 'DESC']],
            include: [{
                model: orderDetails,
                //attributes: ['title'],
            }, {
                model: member,
                //attributes: ['title'],
            }, {
                model: categoryBrand,
                attributes: ['title'],
            }, {
                model: agent,
                // attributes: ['name'],
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

module.exports = dailyCancelOrderList;

