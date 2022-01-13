const { agent, agentBalance, sequelize } = require("../../models");
const createAgent = async (req, res, next) => {
    try {

        let t;
        t = await sequelize.transaction();

        const { agenrType, name, number, email, presentAddress, permanentAddress, division, district, upazila, companyName, officeAddress, nidNumber, img, commission, } = req.body;
        const insertAgentInfo = await agent.create({ agenrType, name, number, email, presentAddress, permanentAddress, division, district, upazila, companyName, officeAddress, nidNumber, img, commission }, { transaction: t });
        const insertAgentBalanceInfo = await agentBalance.create({ id: insertAgentInfo.id, balance: "0" }, { transaction: t }, { transaction: t })
            .then((item) => {
                t.commit();
                res.json({ success: [{ result: 'Your information add successfully', msg: item }] });
            })
            .catch((error) => {
                t.rollback();
                res.json({ errors: [{ result: 'error', msg: error['message'] }] });
            })
    } catch (error) {
        res.json({ errors: [{ result: 'error', msg: error['message'] }] });
    }
}

module.exports = createAgent;
