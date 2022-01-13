const express = require('express');
const adminRouter = express.Router();
//const verifyToken = require('../commonfun/auth');

// // Multer for img upload
const avatarUpload = require('../commonfun/avatarUpload');
const attachmentUpload = require('../commonfun/avaterMultiUpload');

// // Registration
// const Registration = require("../controller/Admin/Registration");
// adminRouter.post("/registration", Registration);

// // Admin login
// const Login = require("../controller/Admin/Login");
// adminRouter.post("/login", Login);

// Add category
const addCategory = require("../controller/Admin/addCategory");
adminRouter.post("/AddCategory", addCategory); // (done)

// // Add sub category
const addCategorySub = require("../controller/Admin/addSubCategory");
adminRouter.post("/AddSubCategory", addCategorySub); // (done)

// // Add category brand
const addCategoryBrand = require("../controller/Admin/addCategoryBrand");
adminRouter.post("/AddCategoryBrand", addCategoryBrand); // (done)

// // Get category data
const getCategoryData = require("../controller/Admin/getCategoryData");
adminRouter.get("/GetCategoryData", getCategoryData); // (done)

// // Get category data
const getBrandData = require("../controller/Admin/getBrandData");
adminRouter.get("/GetBrandData", getBrandData); // (done)

// // Add slider and ads
const addSliderAndAds = require('../controller/Admin/addSliderAndAds');
adminRouter.post("/AddSliderAndAds", avatarUpload, addSliderAndAds);

// // Add product
const addProduct = require('../controller/Admin/addProduct');
adminRouter.post("/AddProduct", attachmentUpload, addProduct); // (done)

// Get reguler product  
const getAllProduct = require('../controller/Admin/getAllProduct');
adminRouter.get("/GetAllProduct", getAllProduct); // (done)

// Get offer product
const getAllOfferProduct = require('../controller/Admin/getAllOfferProduct');
adminRouter.get("/GetAllOfferProduct", getAllOfferProduct);  // (done)

// Get flash sales product
const getAllFlashSalesProduct = require('../controller/Admin/getAllFlashSalesProduct');
adminRouter.get("/GetAllFlashSalesProduct", getAllFlashSalesProduct); // (done)

// Get cash back product
const getAllCashBackProduct = require('../controller/Admin/getAllCashBackProduct');
adminRouter.get("/GetAllCashBackProduct", getAllCashBackProduct); // (done)

// Get discount product
const getAllDiscountProduct = require('../controller/Admin/getAllDiscountProduct');
adminRouter.get("/GetAllDiscountProduct", getAllDiscountProduct);  // (done)

// Get admin product stock qty
const getAdminProductStockQty = require('../controller/Admin/getAdminProductStockQty');
adminRouter.get("/GetAdminProductStockQty", getAdminProductStockQty); // (done)

// Remainder admin product stock qty
const getRemainderAdminProductStockQty = require('../controller/Admin/getRemainderAdminProductStockQty');
adminRouter.get("/GetRemainderAdminProductStockQty", getRemainderAdminProductStockQty); // (done)

// Get admin product stock qty
const getRemainderAdminProductPackStockQty = require('../controller/Admin/getRemainderAdminProductPackStockQty');
adminRouter.get("/GetAdminProductPackStockQty", getRemainderAdminProductPackStockQty); // (done)

// Update product qty and get product
const getProductForUpdateQty = require('../controller/Admin/getProductForUpdateQty');
adminRouter.get("/GetProductForUpdateQty", getProductForUpdateQty); // (done)
const updateProductQty = require('../controller/Admin/updateProductQty');
adminRouter.post("/UpdateProductQty", updateProductQty); // (done)

// Reguler product stock list
const regulerProductStockQtyList = require('../controller/Admin/regulerProductStockQtyList');
adminRouter.get("/RegulerProductStockQtyList", regulerProductStockQtyList);  // (done)


// Package product stock list
const packageProductStockQtyList = require('../controller/Admin/packageProductStockQtyList');
adminRouter.get("/PackageProductStockQtyList", packageProductStockQtyList); // (done)

// Daily pending order list
const dailyPendingOrderList = require('../controller/Admin/dailyPendingOrderList');
adminRouter.get("/DailyPendingOrderList", dailyPendingOrderList);

// Daily process order list
const dailyProcessOrderList = require('../controller/Admin/dailyProcessOrderList');
adminRouter.get("/DailyProcessOrderList", dailyProcessOrderList);

// Daily success order list
const dailySuccessOrderList = require('../controller/Admin/dailySuccessOrderList');
adminRouter.get("/DailySuccessOrderList", dailySuccessOrderList);

// Daily cancel order list
const dailyCancelOrderList = require('../controller/Admin/dailyCancelOrderList');
adminRouter.get("/DailyCancelOrderList", dailyCancelOrderList);

// Daily return pending order list
const dailyReturnPendingOrderList = require('../controller/Admin/dailyReturnPendingOrderList');
adminRouter.get("/DailyReturnPendingOrderList", dailyReturnPendingOrderList);

// Daily return process order list
const dailyReturnProcessOrderList = require('../controller/Admin/dailyReturnProcessOrderList');
adminRouter.get("/DailyReturnProcessOrderList", dailyReturnProcessOrderList);

// Daily return success order list
const dailyReturnSuccessOrderList = require('../controller/Admin/dailyReturnSuccessOrderList');
adminRouter.get("/DailyReturnSuccessOrderList", dailyReturnSuccessOrderList);

// Daily return cancel order list
const dailyReturnCancelOrderList = require('../controller/Admin/dailyReturnCancelOrderList');
adminRouter.get("/DailyReturnCancelOrderList", dailyReturnCancelOrderList);

// // Common router for update delete
const Update = require("../commonfun/Update");
adminRouter.put("/Update", Update);
const Delete = require("../commonfun/Delete");
adminRouter.post("/Delete", Delete);
const getInformationSingle = require("../commonfun/getInformationSingle");
adminRouter.get("/GetInformationSingle/:tableName&:condition", getInformationSingle);



module.exports = adminRouter;