const { blog } = require("../../models");
const { Op } = require("sequelize");

const recentAllBlogDetails = async (req, res, next) => {
    try {
        const { id } = req.params
        const junction = await blog.findAll({
            order: [['id', 'DESC']],
            where: { id: id }
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

module.exports = recentAllBlogDetails;

