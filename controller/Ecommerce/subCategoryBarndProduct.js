const { categoryBrand, product } = require("../../models");
const { Op } = require("sequelize");

const subCategoryBarndProduct = async (req, res, next) => {
    const { brand } = req.params
    try {
        const junction = await categoryBrand.findAll({
            order: [['id', 'DESC']],
            where: { id: brand },
            include: [{
                model: product,
                through: { attributes: [] }
            }],
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

module.exports = subCategoryBarndProduct;

