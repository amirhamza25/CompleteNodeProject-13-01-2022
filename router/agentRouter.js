const express = require('express');
const agentRouter = express.Router();
//const verifyToken = require('../commonfun/auth');

// Multer for img upload
// const avatarUpload = require('../commonfun/avatarUpload');
// const attachmentUpload = require('../commonfun/avaterMultiUpload');

// Create Agent
const createAgent = require("../controller/Agent/createAgent");
agentRouter.post("/CreateAgent", createAgent);

// Get agent information
const getAgentInfo = require("../controller/Agent/getAgentInfo");
agentRouter.get("/GetAgentInfo", getAgentInfo);

// Get agent request information
const getAgentRequestInfo = require("../controller/Agent/getAgentRequestInfo");
agentRouter.get("/GetAgentRequestInfo", getAgentRequestInfo);

// Get sub agent information
const getSubAgentInfo = require("../controller/Agent/getSubAgentInfo");
agentRouter.get("/GetSubAgentInfo", getSubAgentInfo);

// Get sub agent request information
const getSubAgentRequestInfo = require("../controller/Agent/getSubAgentRequestInfo");
agentRouter.get("/GetSubAgentRequestInfo", getSubAgentRequestInfo);

// Get agent sales information
const getAgentSalesInfo = require("../controller/Agent/getAgentSalesInfo");
agentRouter.get("/GetAgentSalesInfo", getAgentSalesInfo);

// Get agent sales information
const getSubAgentSalesInfo = require("../controller/Agent/getSubAgentSalesInfo");
agentRouter.get("/GetSubAgentSalesInfo", getSubAgentSalesInfo);

//Get agent order and order details information
const getAgentOrderDetails = require("../controller/Agent/getAgentOrderDetails");
agentRouter.get("/GetAgentOrderDetails", getAgentOrderDetails);

//Get agent order pending information
const getAgentOrderPending = require("../controller/Agent/getAgentOrderPending");
agentRouter.get("/GetAgentOrderPending", getAgentOrderPending);
//Get agent order process information
const getAgentOrderProcess = require("../controller/Agent/getAgentOrderProcess");
agentRouter.get("/GetAgentOrderProcess", getAgentOrderProcess);
//Get agent order success information
const getAgentOrderSuccess = require("../controller/Agent/getAgentOrderSuccess");
agentRouter.get("/GetAgentOrderSuccess", getAgentOrderSuccess);
//Get agent order cancel information
const getAgentOrderCancel = require("../controller/Agent/getAgentOrderCancel");
agentRouter.get("/GetAgentOrderCancel", getAgentOrderCancel);

//Get agent order return information
const getAgentOrderReturn = require("../controller/Agent/getAgentOrderReturn");
agentRouter.get("/GetAgentOrderReturn", getAgentOrderReturn);

//Get agent order return pending information
const getAgentOrderReturnPending = require("../controller/Agent/getAgentOrderReturnPending");
agentRouter.get("/GetAgentOrderReturnPending", getAgentOrderReturnPending);

//Get agent order return process information
const getAgentOrderReturnProcess = require("../controller/Agent/getAgentOrderReturnProcess");
agentRouter.get("/GetAgentOrderReturnProcess", getAgentOrderReturnProcess);

//Get agent order return success information
const getAgentOrderReturnSuccess = require("../controller/Agent/getAgentOrderReturnSuccess");
agentRouter.get("/GetAgentOrderReturnSuccess", getAgentOrderReturnSuccess);

//Get agent order return cancel information
const getAgentOrderReturnCancel = require("../controller/Agent/getAgentOrderReturnCancel");
agentRouter.get("/GetAgentOrderReturnCancel", getAgentOrderReturnCancel);

//Get agent stock qty information
const getAgentStockQty = require("../controller/Agent/getAgentStockQty");
agentRouter.get("/GetAgentStockQty", getAgentStockQty);

//Get agent stock qty information
const getAgentStockQtyPackage = require("../controller/Agent/getAgentStockQtyPackage");
agentRouter.get("/GetAgentStockQtyPackage", getAgentStockQtyPackage);

//Get agent stock qty remainder information
const getAgentStockQtyRemainder = require("../controller/Agent/getAgentStockQtyRemainder");
agentRouter.get("/GetAgentStockQtyRemainder", getAgentStockQtyRemainder);

//Get agent stock qty remainder package information
const getAgentStockQtyRemainderPackage = require("../controller/Agent/getAgentStockQtyRemainderPackage");
agentRouter.get("/GetAgentStockQtyRemainderPackage", getAgentStockQtyRemainderPackage);

// Common router for update delete
// const Update = require("../commonfun/Update");
// adminRouter.put("/Update", Update);
// const Delete = require("../commonfun/Delete");
// adminRouter.delete("/Delete", Delete);
// const getInformationSingle = require("../commonfun/getInformationSingle");
// adminRouter.get("/GetInformationSingle/:tableName&:condition", getInformationSingle);



module.exports = agentRouter;