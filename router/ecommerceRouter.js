const express = require('express');
const ecommerceRouter = express.Router();

// Get category 
const getCategoryData = require('../controller/Admin/getCategoryData');
ecommerceRouter.get("/api/ev1/GetCategoryData", getCategoryData);  // (done)

// Get category wish product
const getCategoryWishProduct = require('../controller/Ecommerce/getCategoryWishProduct');
ecommerceRouter.get("/api/ev1/GetCategoryWishProduct", getCategoryWishProduct);  // (done)

// Get category all product
const categoryAllProduct = require('../controller/Ecommerce/categoryAllProduct');
ecommerceRouter.get("/api/ev1/CategoryAllProduct/:catId", categoryAllProduct);  // (done)

// // Get category and subcategory and brand wish product
const subCategoryBarndProduct = require('../controller/Ecommerce/subCategoryBarndProduct');
ecommerceRouter.get("/api/ev1/SubCategoryBrandProduct/:brand", subCategoryBarndProduct); // (done)

// Get single product details
const singleProductDetails = require('../controller/Ecommerce/singleProductDetails');
ecommerceRouter.get("/api/ev1/SingleProductDetails/:id", singleProductDetails);  // (done)

// Get recent all product
const recentProduct = require('../controller/Ecommerce/recentProduct');
ecommerceRouter.get("/api/ev1/RecentProduct", recentProduct);  // (done)

// Get all blog
const recentAllBlog = require('../controller/Ecommerce/recentAllBlog');
ecommerceRouter.get("/api/ev1/RecentAllBlog", recentAllBlog);  // (done)

// Get all blog details
const recentAllBlogDetails = require('../controller/Ecommerce/recentAllBlogDetails');
ecommerceRouter.get("/api/ev1/RecentAllBlogDetails/:id", recentAllBlogDetails);  // (done)

// Get all all outlet
const allOutlet = require('../controller/Ecommerce/allOutlet');
ecommerceRouter.get("/api/ev1/AllOutlet", allOutlet);  // (done)

// Get all all outlet details
const allOutletDetails = require('../controller/Ecommerce/allOutletDetails');
ecommerceRouter.get("/api/ev1/AllOutletDetails/:id", allOutletDetails);  // (done)

// Add to shopping cart.
//const addToShoppingCart = require('../controller/Ecommerce/addToShoppingCart');
//ecommerceRouter.post("/api/ev1/AddToShoppingCart", addToShoppingCart);

// Shopping cart order
const shoppingCartOrder = require('../controller/Ecommerce/shoppingCartOrder');
ecommerceRouter.post("/api/ev1/ShoppingCartOrder", shoppingCartOrder);

// Shopping cart order
const userLogin = require('../controller/Ecommerce/userLogin');
ecommerceRouter.post("/api/ev1/UserLogin", userLogin);



module.exports = ecommerceRouter;