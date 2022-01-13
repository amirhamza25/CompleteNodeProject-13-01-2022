const express = require('express');
const agentRouter = express.Router();
//const verifyToken = require('../commonfun/auth');

// Multer for img upload
// const avatarUpload = require('../commonfun/avatarUpload');
// const attachmentUpload = require('../commonfun/avaterMultiUpload');

// Create Vendor
const createVendor = require("../controller/Vendor/createVendor");
agentRouter.post("/CreateVendor", createVendor);

// Get Vendor information
const getVendorInfo = require("../controller/Vendor/getVendorInfo");
agentRouter.get("/GetVendorInfo", getVendorInfo);

// Get vendor request information
const getVendorRequestInfo = require("../controller/Vendor/getVendorRequestInfo");
agentRouter.get("/GetVendorRequestInfo", getVendorRequestInfo);

// Get vendor sales information
const getVendorSalesInfo = require("../controller/Vendor/getVendorSalesInfo");
agentRouter.get("/GetVendorSalesInfo", getVendorSalesInfo);

//Get vendor order and order details information
const getVendorOrderDetails = require("../controller/Vendor/getVendorOrderDetails");
agentRouter.get("/GetVendorOrderDetails", getVendorOrderDetails);

//Get vendor order pending information
const getVendorOrderPending = require("../controller/Vendor/getVendorOrderPending");
agentRouter.get("/GetVendorOrderPending", getVendorOrderPending);

//Get vendor order process information
const getVendorOrderProcess = require("../controller/Vendor/getVendorOrderProcess");
agentRouter.get("/GetVendorOrderProcess", getVendorOrderProcess);

//Get vendor order success information
const getVendorOrderSuccess = require("../controller/Vendor/getVendorOrderSuccess");
agentRouter.get("/GetVendorOrderSuccess", getVendorOrderSuccess);

//Get vendor order cancel information
const getVendorOrderCancel = require("../controller/Vendor/getVendorOrderCancel");
agentRouter.get("/GetVendorOrderCancel", getVendorOrderCancel);

//Get vendor order return information
const getVendorOrderReturn = require("../controller/Vendor/getVendorOrderReturn");
agentRouter.get("/GetVendorOrderReturn", getVendorOrderReturn);

//Get vendor order return pending information
const getVendorOrderReturnPending = require("../controller/Vendor/getVendorOrderReturnPending");
agentRouter.get("/GetVendorOrderReturnPending", getVendorOrderReturnPending);

//Get vendor order return process information
const getVendorOrderReturnProcess = require("../controller/Vendor/getVendorOrderReturnProcess");
agentRouter.get("/GetVendorOrderReturnProcess", getVendorOrderReturnProcess);

//Get vendor order return success information
const getVendorOrderReturnSuccess = require("../controller/Vendor/getVendorOrderReturnSuccess");
agentRouter.get("/GetVendorOrderReturnSuccess", getVendorOrderReturnSuccess);

//Get vendor order return cancel information
const getVendorOrderReturnCancel = require("../controller/Vendor/getVendorOrderReturnCancel");
agentRouter.get("/GetVendorOrderReturnCancel", getVendorOrderReturnCancel);

//Get vendor product information
const getVendorProductInformation = require("../controller/Vendor/getVendorProductInformation");
agentRouter.get("/GetVendorProductInformation/:vendorId", getVendorProductInformation);

//Get vendor stock qty information
const getVendorStockQty = require("../controller/Vendor/getVendorStockQty");
agentRouter.get("/GetVendorStockQty", getVendorStockQty);

//Get vendor stock qty information
const getVendorStockQtyPackage = require("../controller/Vendor/getVendorStockQtyPackage");
agentRouter.get("/GetVendorStockQtyPackage", getVendorStockQtyPackage);

//Get vendor stock qty remainder information
const getVendorStockQtyRemainder = require("../controller/Vendor/getVendorStockQtyRemainder");
agentRouter.get("/GetVendorStockQtyRemainder", getVendorStockQtyRemainder);

//Get vendor stock qty remainder package information
const getVendorStockQtyRemainderPackage = require("../controller/Vendor/getVendorStockQtyRemainderPackage");
agentRouter.get("/GetVendorStockQtyRemainderPackage", getVendorStockQtyRemainderPackage);

// Common router for update delete
// const Update = require("../commonfun/Update");
// adminRouter.put("/Update", Update);
// const Delete = require("../commonfun/Delete");
// adminRouter.delete("/Delete", Delete);
// const getInformationSingle = require("../commonfun/getInformationSingle");
// adminRouter.get("/GetInformationSingle/:tableName&:condition", getInformationSingle);



module.exports = agentRouter;