const { category, categorySub, categoryBrand } = require("../../models");

const getCategoryData = async (req, res, next) => {
    try {
        const listOfCategory = await category.findAll({
            order: [['id', 'DESC']],
            attributes: ['id', 'title', 'mobileicon', 'desktopicon'],
            include: [{
                model: categorySub,
                attributes: ['id', 'title', 'mobileicon', 'desktopicon'],
                include: [{
                    model: categoryBrand,
                    attributes: ['id', 'title', 'mobileicon', 'desktopicon']
                }]
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

module.exports = getCategoryData;
