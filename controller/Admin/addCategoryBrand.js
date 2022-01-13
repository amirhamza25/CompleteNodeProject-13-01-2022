const { categoryBrand } = require("../../models");
const addCategoryBrand = async (req, res, next) => {
    try {
        const { categoryId, subId, title, mobileicon, desktopicon } = req.body;
        const CategoryBrand = await categoryBrand.create({ categoryId: categoryId, categorySubId: subId, title: title, mobileicon: mobileicon, desktopicon: desktopicon })
            .then((item) => {
                res.json({ success: [{ result: 'Your brand add successfully', msg: item }] });
            })
            .catch((error) => {
                res.json({ errors: [{ result: 'error', msg: error['message'] }] });
            })
    } catch (error) {
        res.status(500).json({ errors: [{ result: 'error', msg: error['message'] }] });
    }
}

module.exports = addCategoryBrand;
