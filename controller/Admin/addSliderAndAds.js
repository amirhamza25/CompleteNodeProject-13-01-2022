const { addSliderAndAds } = require("../../models");
const insertAddSliderAndAds = async (req, res, next) => {
    try {
        const { title, shortDiscriptions, status } = req.body;
        const imgs = req.files[0].filename;
        const CreateAddSliderAndAds = await addSliderAndAds.create({ title: title, shortDiscription: shortDiscriptions, img: imgs, status: status })
            .then((item) => {
                res.json({ success: [{ result: 'Your information add successfully', msg: item }] });
            })
            .catch((error) => {
                res.json({ errors: [{ result: 'error', msg: error['message'] }] });
            })
    } catch (error) {
        res.status(500).json({ errors: [{ result: 'error', msg: error['message'] }] });
    }
}

module.exports = insertAddSliderAndAds;
