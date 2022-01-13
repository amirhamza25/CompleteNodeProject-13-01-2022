const { category } = require("../../models");
const addCategory = async (req, res, next) => {
    try {
        const { title, mobileicon, desktopicon } = req.body;
        const AddCategory = await category.create({ title: title, mobileicon: mobileicon, desktopicon: desktopicon })
            .then((item) => {
                res.json({ success: [{ result: 'Your category add successfully', msg: item }] });
            })
            .catch((error) => {
                res.json({ errors: [{ result: 'error', msg: error['message'] }] });
            })
    } catch (error) {
        res.json({ errors: [{ result: 'error', msg: error['message'] }] });
    }
}

module.exports = addCategory;
