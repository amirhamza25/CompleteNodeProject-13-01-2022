const { categorySub } = require("../../models");
const addCategorySub = async (req, res, next) => {
    try {
        const { categoryId, title, mobileicon, desktopicon } = req.body;

        const CategorySub = await categorySub.create({ categoryId: categoryId, title: title, mobileicon: mobileicon, desktopicon: desktopicon })
            .then((item) => {
                res.json({ success: [{ result: 'Your sub category add successfully', msg: item }] });
            })
            .catch((error) => {
                res.json({ errors: [{ result: 'error', msg: error['message'] }] });
            })
    } catch (error) {
        res.status(500).json({ errors: [{ result: 'error', msg: error['message'] }] });
    }
}

module.exports = addCategorySub;
