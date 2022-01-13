const express = require("express");
var morgan = require('morgan');
const app = express();
const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(morgan('common'));
app.use(cors());
// Database  model
const db = require("./models");

// Admin Router Import
const adminRouter = require("./router/adminRouter");
const ecommerceRouter = require("./router/ecommerceRouter");
const agentRouter = require("./router/agentRouter");
const vendorRouter = require("./router/vendorRouter");
// Index Router
app.get("/", (req, res) => {
  res.send("hello");
})
//Admin Router use
app.use(adminRouter);
app.use(ecommerceRouter);
app.use(agentRouter);
app.use(vendorRouter);


db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running on ports  ${port}`);
  });
});