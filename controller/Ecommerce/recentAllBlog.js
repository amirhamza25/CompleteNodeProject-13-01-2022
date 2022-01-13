const { blog } = require("../../models");
const recentAllBlog = async (req, res, next) => {
    try {
        const junction = await blog.findAll({
            order: [['id', 'DESC']],
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

module.exports = recentAllBlog;

