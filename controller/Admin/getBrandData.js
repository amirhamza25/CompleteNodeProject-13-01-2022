const { category, categorySub, categoryBrand } = require("../../models");

const getBrandData = async (req, res, next) => {
    try {
        const listOfBrand = await categoryBrand.findAll({
            order: [['id', 'DESC']],
            attributes: ['id', 'title', 'mobileicon', 'desktopicon'],
            include: [{
                model: category,
                attributes: ['id', 'title', 'mobileicon', 'desktopicon'],
            }, {
                model: categorySub,
                attributes: ['id', 'title', 'mobileicon', 'desktopicon']
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

module.exports = getBrandData;
