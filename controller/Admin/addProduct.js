const { product, productStockQty, rel_cat_subcat_brand_product, sequelize } = require("../../models");
const AddProduct = async (req, res, next) => {
    try {
        const { catId, subCatId, brand, productName, productCode, productQty, productTpPrice, productBuyPrice, shortDis, fullDis, userId, productOwner, discountAmount, productCashBack, productDeliveryCharge, productType,status } = req.body;

        let t;
        t = await sequelize.transaction();
        const imgs = []
        for (i = 0; i < req.files.length; i++) {
            imgs.push(req.files[i].filename);
        }
        const imgfile = JSON.stringify(imgs);
        //insert product information
        const CreateProduct = await product.create({ name: productName, brandCode: productCode, realPrice: productTpPrice, buyPrice: productBuyPrice, img: imgfile, shortDescription: shortDis, fullDescription: fullDis, userId: userId, productOwner: productOwner, status: status, productType: productType, discountAmount: discountAmount, cashBackAmount: productCashBack, productDeliveryCharge: productDeliveryCharge }, { transaction: t })
        //  insert stock information
        const StoreQty = await productStockQty.create({ productId: CreateProduct.id, userId: userId, qty: productQty }, { transaction: t })
        //  insert reletion information
        const reletion = await rel_cat_subcat_brand_product.create({ categoryId: catId, categorySubId: subCatId, categoryBrandId: brand, productId: CreateProduct.id, userId: userId }, { transaction: t })
            .then((item) => {
                t.commit();
                res.json({ success: [{ result: 'Your information add successfully', msg: item }] });
            })
            .catch((error) => {
                t.rollback();
                res.json({ errors: [{ result: 'error', msg: error['message'] }] });
            })
    } catch (error) {
        res.status(500).json({ errors: [{ result: 'error', msg: error['message'] }] });
    }
}

module.exports = AddProduct;
